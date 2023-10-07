import { Analytics, AnalyticsInstance } from "analytics";
import { createRoot } from "react-dom/client";
import amplitudePlugin from "@analytics/amplitude";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { AnalyticsProvider } from "use-analytics";

import { App } from "./components/App";

let analytics: AnalyticsInstance;

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-moFjHQypBadgSE5t",
  enableDevMode: true,
  // trackingCallback: (experiment, result) => {
  //   analytics.track("$experiment_started", {
  //     "Experiment name": experiment.key,
  //     "Variant name": result.variationId,
  //     $source: "growthbook",
  //   });
  // },
});

analytics = Analytics({
  app: "experiment-testing",
  plugins: [
    // amplitudePlugin({
    //   apiKey: "23f53bd94cd4b9bfcca056067a7fdaea",
    //   // See options at https://bit.ly/3dRdZnE
    //   options: {
    //     trackingOptions: {
    //       ip_address: false,
    //     },
    //   },
    // }),
    // mixpanelPlugin({
    //   token: "b941888e0ba7beb2cc691a906a8fd6b3",
    //   options: {
    //     loaded: (mx) => {
    //       growthbook.setAttributes({
    //         ...growthbook.getAttributes(),
    //         id: mx.get_distinct_id(),
    //       });
    //     },
    //   },
    // }),
  ],
  debug: true,
});

analytics.ready(() => {
  // growthbook.setAttributes({
  //   ...growthbook.getAttributes(),
  //   id: analytics.user().anonymousId,
  // });
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
