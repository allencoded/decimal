import { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import { Column } from 'react-table';
import Table from "../table/Table";
import moment from "moment";

async function fetchInvoices() {
  try {
    const response = await fetch("/api/invoices");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchTenants() {
  try {
    const response = await fetch("/api/tenants");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAccounts() {
  try {
    const response = await fetch("/api/accounts");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchSkus() {
  try {
    const response = await fetch("/api/skus");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAllTableData() {
  const allInvoices = await fetchInvoices();
  const allTenants = await fetchTenants();
  const allAccounts = await fetchAccounts();
  const allSkus = await fetchSkus();

  return allInvoices.map((invoice: {
    line_items: Array<any>;
    account_id: string; 
    tenant_id: string;
  }) => {
    const tenant = allTenants.find((tenant: { id: string; }) => tenant.id === invoice.tenant_id);
    const account = allAccounts.find((account: { id: any; }) => account.id === invoice.account_id);
    const lineItems = invoice.line_items.map((lineItem) => {
      const sku = allSkus.find((sku: { id: string; }) => sku.id === lineItem.sku);
      return {
        ...lineItem,
        ...sku
      };
    });


    return {
      ...invoice,
      ...{
        account_name: account.name,
        tenant_name: tenant.name,
        line_items: lineItems,
      }
    }
  });
}

interface IData {
  id: string;
  tenant_name: string;
  account_id: string;
  account_name: string;
  created_date: string;
}

interface IProps {
  setSelectedInvoice: Dispatch<SetStateAction<undefined| Record<string, any>>>;
}

/**
 * Displays all the invoices in a table
 */
function InvoicesTable({ setSelectedInvoice }: IProps) {
  const [invoices, setInvoices] = useState([]);

  const columns = useMemo<Column<IData>[]>(() => [
    {
      Header: 'Id',
      accessor: 'id',
      sortType: 'basic',
    },
    {
      Header: 'Tenent',
      accessor: 'tenant_name'
    },
    {
      Header: 'Account Name',
      accessor: 'account_name'
    },
    {
      Header: 'Date',
      accessor: 'created_date',
      Cell: ({ cell }) => <>{moment(cell.value).format("MMM Do YY")}</>,
      disableGlobalFilter: true,
    }
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllTableData();
      setInvoices(data);
    }

    fetchData();
  }, []);

  return (<div>
    {invoices.length < 1 && <div>loading...</div>}
    {invoices.length >= 1 && <Table data={invoices} columns={columns} setSelectedRow={setSelectedInvoice} />}
  </div>)

}

export default InvoicesTable;
