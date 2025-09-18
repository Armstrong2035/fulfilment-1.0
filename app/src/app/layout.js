import { PolarisProvider } from "@/components/PolarisProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PolarisProvider>{children}</PolarisProvider>
      </body>
    </html>
  );
}
