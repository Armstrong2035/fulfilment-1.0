import { AppProvider } from "@shopify/polaris";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";

export default function RootLayout({ children }) {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
    host:
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("host")
        : "",
    forceRedirect: true,
  };

  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AppBridgeProvider config={config}>{children}</AppBridgeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
