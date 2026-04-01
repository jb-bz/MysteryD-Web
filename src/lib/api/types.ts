export interface ShopifyAddress {
  first_name: string;
  last_name: string;
  address1: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone?: string;
}

export interface ShopifyOrder {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  total_price: string;
  currency: string;
  financial_status: string;
  fulfillment_status: string | null;
  status: string;
  customer: ShopifyCustomer | null;
  line_items: ShopifyLineItem[];
}

export interface ShopifyLineItem {
  id: number;
  product_id: number;
  variant_id: number;
  title: string;
  quantity: number;
  price: string;
}

export interface ShopifyCustomer {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  addresses: ShopifyAddress[];
  created_at: string;
  updated_at: string;
  orders_count: number;
  total_spent: string;
  tags: string;
}

export interface ShopifyCustomersResponse {
  customers: ShopifyCustomer[];
}

export interface ShopifyOrdersResponse {
  orders: ShopifyOrder[];
}

export interface ShopifyAnalyticsResponse {
  data: Record<string, unknown>;
}