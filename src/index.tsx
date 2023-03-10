import { Analytics, AnalyticsInstance } from "analytics";
import { createRoot } from "react-dom/client";

import mixpanelPlugin from "@analytics/mixpanel";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { AnalyticsProvider } from "use-analytics";

import { App } from "./components/App";

let analytics: AnalyticsInstance;

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-moFjHQypBadgSE5t",
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
  app: "experiment-testing",
  plugins: [
    mixpanelPlugin({
      token: "b941888e0ba7beb2cc691a906a8fd6b3",
      options: {
        loaded: (mx) => {
          growthbook.setAttributes({
            ...growthbook.getAttributes(),
            id: mx.get_distinct_id(),
          });
        },
      },
    }),
  ],
  debug: true,
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
