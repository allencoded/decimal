import { useState } from "react";
import InvoicesDetail from "./invoicesDetail";
import InvoicesTable from "./InvoicesTable";

function Invoices() {
  const [selectedInvoice, setSelectedInvoice] = useState<undefined | Record<string, any>>();

  return (<div>
    <h1>Invoices</h1>
    <InvoicesTable setSelectedInvoice={setSelectedInvoice} />
    {selectedInvoice && <InvoicesDetail invoice={selectedInvoice} />}
  </div>)
}

export default Invoices;
