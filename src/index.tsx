import { Analytics } from "analytics";
import { createRoot } from "react-dom/client";

import mixpanelPlugin from "@analytics/mixpanel";
import { AnalyticsProvider } from "use-analytics";

import { App } from "./components/App";

const analytics = Analytics({
  app: "experiment-testing",
  plugins: [
    mixpanelPlugin({
      token: "b941888e0ba7beb2cc691a906a8fd6b3",
    }),
  ],
  debug: true,
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <AnalyticsProvider instance={analytics}>
    <App />
  </AnalyticsProvider>
);
