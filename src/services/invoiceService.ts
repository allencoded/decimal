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

async function fetchSkus() {
  try {
    const response = await fetch("/api/skus");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches all invoice data
 */
async function fetchAllInvoiceData() {
  const allInvoices = await fetchInvoices();
  const allTenants = await fetchTenants();
  const allAccounts = await fetchAccounts();
  const allSkus = await fetchSkus();

  return allInvoices.map(
    (invoice: {
      line_items: Array<any>;
      account_id: string;
      tenant_id: string;
    }) => {
      const tenant = allTenants.find(
        (tenant: { id: string }) => tenant.id === invoice.tenant_id
      );
      const account = allAccounts.find(
        (account: { id: any }) => account.id === invoice.account_id
      );
      const lineItems = invoice.line_items.map((lineItem) => {
        const sku = allSkus.find(
          (sku: { id: string }) => sku.id === lineItem.sku
        );
        return {
          ...lineItem,
          ...sku,
        };
      });

      return {
        ...invoice,
        ...{
          account_name: account.name,
          tenant_name: tenant.name,
          line_items: lineItems,
        },
      };
    }
  );
}

export { fetchAllInvoiceData };