import moment from "moment";

interface LineItem {
  units: string;
  schedule: {
    duration: string;
    units: string;
  };
  is_deferred: string;
  start_date: string;
  amount: string;
  quantity: string;
  sku: string;
  name: string;
}

interface IProps {
  lineItems: Array<LineItem>;
}

function LineItemsDetail({ lineItems }: IProps) {
  return (
    <div>
      <h3>Line Items:</h3>
      {lineItems.map((lineItem: LineItem) => (
        <div key={lineItem.sku?.toString()}>
          <ul>Name: {lineItem.name}</ul>
          <ul>Quantity: {lineItem.quantity}</ul>
          <ul>Amount: {lineItem.amount}</ul>
          <ul>Deferred: {lineItem.is_deferred ? 'true' : 'false'}</ul>
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
