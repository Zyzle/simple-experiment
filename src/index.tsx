import { Analytics, AnalyticsInstance } from "analytics";
import { createRoot } from "react-dom/client";
import googleAnalytics from "@analytics/google-analytics";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { AnalyticsProvider } from "use-analytics";

import { App } from "./components/App";

let analytics: AnalyticsInstance;

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: process.env.GROWTHBOOK_KEY,
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    analytics.track("$experiment_started", {
      "Experiment name": experiment.key,
      "Variant name": result.variationId,
      $source: "growthbook",
    });
  },
});

analytics = Analytics({
  app: "simple-experiment",
  plugins: [
    googleAnalytics({
      measurementIds: ["G-Z9H1M6HP2V"],
      gtagConfig: {
        anonymize_ip: true,
      },
    }),
  ],
  debug: true,
});

analytics.ready(() => {
  growthbook.setAttributes({
    ...growthbook.getAttributes(),
    id: analytics.user().anonymousId,
  });
});

growthbook.loadFeatures({ autoRefresh: true });
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <AnalyticsProvider instance={analytics}>
    <GrowthBookProvider growthbook={growthbook}>
      <App />
    </GrowthBookProvider>
  </AnalyticsProvider>
);
