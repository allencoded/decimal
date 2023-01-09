import moment from "moment";
import { useContext } from "react";
import { UserContext } from "../../App";
import LineItemsDetail from "./LineItemsDetail";
import WorkFlowDetail from "./WorkFlowDetail";

interface IProps {
  invoice: any; // todo: get rid of any and type this
}

function InvoicesDetail({ invoice }: IProps) {
  const { isAdmin } = useContext(UserContext);
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Invoice Details</h1>
      <div>Id: {invoice.id}</div>
      <div>Tenant: {invoice.tenant_name}</div>
      <div>Account: {invoice.account_name}</div>
      <div>Created: {moment(invoice.created_date).format("MMM Do YY")}</div>
      <LineItemsDetail lineItems={invoice.line_items} />
      {isAdmin && <WorkFlowDetail />}
    </div>
  );
}

export default InvoicesDetail;
