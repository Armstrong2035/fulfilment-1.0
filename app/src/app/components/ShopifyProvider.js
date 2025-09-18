"use client";

import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";

export function ShopifyProvider({ children }) {
  const host =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("host")
      : "";

  const config = {
    apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
    host: host,
    forceRedirect: true,
  };

  if (!host) {
    return null;
  }

  return <AppBridgeProvider config={config}>{children}</AppBridgeProvider>;
}
