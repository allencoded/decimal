interface ILineItem {
  id: string;
  sku: string;
  quantity: number;
  amount: number;
  start_date: string;
  schedule?: {
    duration: number;
    units: string;
  }
  is_deferred: boolean;
  name: string;
}

interface IInvoice {
  id: string;
  tenant_name: string;
  account_name: string;
  created_date: string;
  line_items: Array<ILineItem>;
}

export type { ILineItem, IInvoice };
