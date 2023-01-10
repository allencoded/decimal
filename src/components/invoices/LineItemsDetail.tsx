import moment from "moment";
import { ILineItem } from "./invoiceTypes";

interface IProps {
  lineItems: Array<ILineItem>;
}

/**
 * Displays a invoice list of line items
 */
function LineItemsDetail({ lineItems }: IProps) {
  return (
    <div>
      <h3>Line Items:</h3>
      {lineItems.map((lineItem: ILineItem) => (
        <div key={lineItem.sku?.toString()}>
          <ul>Name: {lineItem.name}</ul>
          <ul>Quantity: {lineItem.quantity}</ul>
          <ul>Amount: {lineItem.amount}</ul>
          <ul>Deferred: {lineItem.is_deferred ? "true" : "false"}</ul>
          <ul>Started: {moment(lineItem.start_date).format("MMM Do YY")}</ul>
          {lineItem.schedule && (
            <ul>
              Duration: {lineItem.schedule.duration} {lineItem.schedule.units}
              (s)
            </ul>
          )}
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default LineItemsDetail;
