import { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import { Column } from "react-table";
import Table from "../table/Table";
import moment from "moment";
import { fetchAllInvoiceData } from "../../services/invoiceService";
import { IInvoice } from "./invoiceTypes";

interface IProps {
  setSelectedInvoice: Dispatch<SetStateAction<undefined | Record<string, any>>>;
}

/**
 * Displays all the invoices in a table
 */
function InvoicesTable({ setSelectedInvoice }: IProps) {
  const [invoices, setInvoices] = useState([]);

  const columns = useMemo<Column<IInvoice>[]>(
    () => [
      {
        Header: "Id",
        accessor: "id",
        sortType: "basic",
      },
      {
        Header: "Tenent",
        accessor: "tenant_name",
      },
      {
        Header: "Account Name",
        accessor: "account_name",
      },
      {
        Header: "Date",
        accessor: "created_date",
        Cell: ({ cell }) => <>{moment(cell.value).format("MMM Do YY")}</>,
        disableGlobalFilter: true,
      },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const invoices = await fetchAllInvoiceData();
      setInvoices(invoices);
    };

    fetchData();
  }, []);

  return (
    <div>
      {invoices.length >= 1 && (
        <Table
          data={invoices}
          columns={columns}
          setSelectedRow={setSelectedInvoice}
        />
      )}
    </div>
  );
}

export default InvoicesTable;
