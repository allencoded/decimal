import { useState } from "react";
import { createServer } from "miragejs";
import * as invoiceList from "../../mock-api/list-invoices.json";
import * as tenantList from "../../mock-api/list-tenants.json";
import * as accountList from "../../mock-api/list-accounts.json";
import * as skuList from "../../mock-api/list-skus.json";
import InvoicesDetail from "./InvoicesDetail";
import InvoicesTable from "./InvoicesTable";

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

    this.get("/api/accounts", () => {
      const { accounts } = accountList;
      return accounts;
    });

    this.get("/api/skus", () => {
      const { skus } = skuList;
      return skus;
    });
  }
});

function Invoices() {
  const [selectedInvoice, setSelectedInvoice] = useState<undefined | Record<string, any>>();

  return (<div>
    <h1>Invoices</h1>
    <InvoicesTable setSelectedInvoice={setSelectedInvoice} />
    {selectedInvoice && <InvoicesDetail invoice={selectedInvoice} />}
  </div>)
}

export default Invoices;
