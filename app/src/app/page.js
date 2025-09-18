"use client";

import { Page, Card, Text } from "@shopify/polaris";

export default function Main() {
  const headline = "Emerson's Fulfilment semi-automated app!";

  return (
    <Page>
      <Card>
        <Text variant="heading2xl">{headline}</Text>
      </Card>
    </Page>
  );
}
