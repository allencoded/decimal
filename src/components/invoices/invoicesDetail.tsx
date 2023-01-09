import moment from "moment";
import LineItemsDetail from "./LineItemsDetail";

interface IProps {
  invoice: any;
}

function InvoicesDetail({ invoice }: IProps) {
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Invoice Details</h1>
      <div>Id: {invoice.id}</div>
      <div>Tenant: {invoice.tenant_name}</div>
      <div>Account: {invoice.account_name}</div>
      <div>Created: {moment(invoice.created_date).format("MMM Do YY")}</div>
      <LineItemsDetail lineItems={invoice.line_items} />
    </div>
  );
}

export default InvoicesDetail;
