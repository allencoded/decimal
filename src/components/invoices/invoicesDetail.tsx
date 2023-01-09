import moment from "moment";

interface IProps {
  invoice: any;
}

function InvoicesDetail({ invoice }: IProps) {
  return (<div>
    <h1>Invoice Details</h1>
    <div>Id: {invoice.id}</div>
    <div>Tenant: {invoice.tenant_name}</div>
    <div>Account: {invoice.account_name}</div>
    <div>Created: {moment(invoice.created_date).format("MMM Do YY")}</div>
    <div>Line Items:
      {invoice.line_items.map((lineItem: { sku: string }) => <div key={lineItem.sku?.toString()}>{lineItem.sku}</div>)}
    </div>
  </div>)
}

export default InvoicesDetail;
