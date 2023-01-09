import { createServer } from "miragejs";
import { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import * as invoiceList from "../../mock-api/list-invoices.json";
import * as tenantList from "../../mock-api/list-tenants.json";
import * as accountList from "../../mock-api/list-accounts.json";
import { Column } from 'react-table';
import Table from "../table/Table";
import moment from "moment";

/**
 * Mocks the api/invoices call for simulating real world api calls
 */
createServer({
  routes() {
    this.get("/api/invoices", () => {
      const { invoices } = invoiceList;
      return invoices;
    });

    this.get("/api/tenants", () => {
      const { tenants } = tenantList;
      return tenants;
    });

    this.get("/api/accounts", () => {
      const { accounts } = accountList;
      return accounts;
    });
  }
});

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

async function fetchAllTableData() {
  const allInvoices = await fetchInvoices();
  const allTenants = await fetchTenants();
  const allAccounts = await fetchAccounts();

  return allInvoices.map((invoice: {
    account_id: string; tenant_id: string;
  }) => {
    const tenant = allTenants.find((tenant: { id: string; }) => tenant.id === invoice.tenant_id);
    const account = allAccounts.find((account: { id: any; }) => account.id === invoice.account_id);

    return {
      ...invoice,
      ...{
        account_name: account.name,
        tenant_name: tenant.name,
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
    <Table data={invoices} columns={columns} setSelectedRow={setSelectedInvoice} />
  </div>)

}

export default InvoicesTable;
