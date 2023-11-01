import {
  useFeature,
  useFeatureIsOn,
  useFeatureValue,
} from "@growthbook/growthbook-react";
import { useAnalytics } from "use-analytics";

import { SignupCta } from "../SignupCta";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PARTNER_LIST = {
  base: " from-cyan-300 to-blue-600",
  partner1: " from-yellow-300 to-yellow-600",
  partner2: " from-pink-300 to-pink-600",
  partner3: " from-green-300 to-green-600",
};

const App = () => {
  const { track, page } = useAnalytics();
  const sticky = useFeatureIsOn("sticky-subscribe-cta");
  const partnerName = useFeatureValue("partner", "base");
  // page view
  page();

  return (
    <main
      className={classNames(
        ["h-screen flex flex-col bg-gradient-to-b"],
        PARTNER_LIST[partnerName]
      )}
    >
      <header className="w-full py-4 px-10 shadow-md bg-white z-10">
        <h1 className="prose prose-xl">An Awesome site</h1>
      </header>
      <div className="grid grid-cols-12 gap-6 p-8 flex-1 overflow-y-auto">
        <nav className="col-span-3">
          <ul>
            <li>
              <a
                href="#s1"
                onClick={() => track("click", { type: "nav", to: "s1" })}
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="#s2"
                onClick={() => track("click", { type: "nav", to: "s2" })}
              >
                Chat GPT 3.5
              </a>
            </li>
            <li>
              <a
                href="#s3"
                onClick={() => track("click", { type: "nav", to: "s3" })}
              >
                Bard
              </a>
            </li>
          </ul>
        </nav>
        <article className="col-span-6 bg-white shadow-xl shadow-slate-700/10 rounded-lg p-6 prose">
          <p className="mb-2">
            I needed some content here for the page so I asked 3 different AI's
            to write some for me. All three were given the same prompt; "write a
            summary of feature flags in software development", Notion only gave
            a single paragraph (although I had the option to ask for more)
            ChatGPT and Google Bard really went for it though
          </p>
          <h2 id="s1">Notion</h2>
          <p className="mb-2">
            Feature flagging is a best practice in software development that
            allows developers to control the activation or deactivation of
            specific features within an application or system. It enables teams
            to manage feature releases, perform A/B testing, and make
            data-driven decisions without deploying new code or impacting the
            infrastructure. Feature flag tools, such as LaunchDarkly,
            Rollout.io, and ConfigCat, provide platforms and SDKs that simplify
            the process of creating, managing, and monitoring feature flags.
            These tools offer intuitive dashboards, real-time analytics, and
            support for multiple programming languages, making it easier for
            developers to integrate feature flagging into their applications. By
            using feature flagging, teams can effectively control feature
            rollout, mitigate risks, and deliver a personalized and optimized
            user experience.
          </p>

          <h2 id="s2">Chat GPT 3.5</h2>
          <p className="mb-2">
            Feature flags, also known as feature toggles or feature switches,
            are a crucial technique in software development that enables teams
            to manage and control the release of new features or changes to
            their software applications. They offer a flexible way to introduce,
            test, and deploy new functionality while minimizing risks and
            ensuring a smoother development and release process. Here is a
            summary of feature flags in software development:
          </p>
          <ol>
            <li>
              <b>Introduction of Controlled Variability:</b> Feature flags allow
              developers to introduce variability in their codebase by
              incorporating conditional statements that determine whether a
              specific feature is active or inactive. This means that code for a
              feature can exist in the production environment but remain hidden
              or inactive until it's ready for release.
            </li>

            <li>
              <b>Gradual Rollouts:</b> With feature flags, teams can roll out
              new features gradually to a subset of users or a specific
              audience. This enables incremental testing, gathers feedback, and
              identifies potential issues or performance bottlenecks early in
              the development process.
            </li>

            <li>
              <b>A/B Testing and Experimentation:</b> Feature flags are
              instrumental in A/B testing, enabling developers to compare the
              performance and user satisfaction of different versions of a
              feature. By toggling flags for different user groups, teams can
              make data-driven decisions about which version is more effective.
            </li>

            <li>
              <b>Emergency Kill Switches:</b> In case a newly released feature
              causes unexpected problems or negatively impacts the application's
              stability, a feature flag can be used as an emergency kill switch
              to instantly deactivate the feature without requiring a new
              deployment.
            </li>

            <li>
              <b>
                Enabling Continuous Integration/Continuous Deployment (CI/CD):
              </b>
              Feature flags integrate seamlessly with CI/CD pipelines, allowing
              developers to push code changes to production without necessarily
              enabling new features immediately. This promotes a more frequent
              and automated release process.
            </li>

            <li>
              <b>Feature Rollbacks:</b> If a feature encounters critical issues
              post-release, feature flags simplify the process of rolling back
              to a stable version of the software by merely turning off the
              flag, reverting to the previous state.
            </li>

            <li>
              <b>User-Specific Customization:</b> Feature flags can be employed
              to customize the user experience based on individual preferences
              or user-specific settings, enhancing personalization within the
              application.
            </li>

            <li>
              <b>Reduced Risk and Increased Flexibility:</b> Feature flags
              reduce the risk associated with large-scale releases by
              compartmentalizing features and making it easier to manage their
              activation or deactivation. This flexibility also facilitates
              hotfixes and rapid response to user feedback.
            </li>

            <li>
              <b>Enhanced Collaboration:</b> Development teams can collaborate
              more effectively with product managers, designers, and QA teams by
              using feature flags to align on the state and behavior of a
              feature throughout its development lifecycle.
            </li>

            <li>
              <b>Versioning and Maintenance:</b> Feature flags can assist in
              versioning and maintaining multiple iterations of a feature,
              ensuring that code remains manageable and that older versions can
              be phased out gracefully.
            </li>
          </ol>

          <h2 id="s3">Bard</h2>
          <p className="mb-2">
            Feature flags, also known as feature toggles or feature switches,
            are a software development technique that allows developers to
            enable or disable features without deploying new code. This is done
            by adding a conditional statement to the code that checks the value
            of the feature flag. If the flag is enabled, the code is executed;
            if the flag is disabled, the code is skipped.
          </p>
          <p className="mb-2">
            Feature flags have a number of benefits for software development,
            including:
          </p>
          <ul>
            <li>
              Risk reduction: Feature flags allow developers to release new
              features gradually, reducing the risk of catastrophic failures.
            </li>
            <li>
              Experimentation and A/B testing: Feature flags can be used to run
              experiments and A/B tests by exposing a feature to a subset of
              users and comparing its performance against the existing solution.
            </li>
            <li>
              Continuous integration/continuous delivery (CI/CD): Feature flags
              facilitate CI/CD by decoupling feature development from
              deployment, enabling smaller and more frequent releases.
            </li>
            <li>
              Operational flexibility: Feature flags can be enabled or disabled
              on-the-fly, making it easier to respond to unforeseen issues or
              changing user requirements without a full redeployment.
            </li>
            <li>
              Customization: Feature flags can be used to customize the user
              experience based on user segments or configuration settings.
            </li>
          </ul>
          <p className="mb-2">
            Feature flags can be used for a variety of purposes, including:
          </p>
          <ul>
            <li>
              Rolling out new features gradually: Feature flags can be used to
              release new features to a small subset of users at first, and then
              gradually roll them out to more users over time. This allows
              developers to monitor the performance of the new features and fix
              any bugs before they are released to all users.
            </li>
            <li>
              Running A/B tests: Feature flags can be used to run A/B tests by
              showing different versions of a feature to different groups of
              users. This allows developers to compare the performance of
              different versions of the feature and identify which one works
              best.
            </li>
            <li>
              Enabling or disabling features on-the-fly: Feature flags can be
              enabled or disabled on-the-fly without having to deploy new code.
              This can be useful for responding to unforeseen issues or changing
              user requirements. For example, a developer could disable a
              feature if they discover a bug, or they could enable a new feature
              for a specific customer segment.
            </li>
            <li>
              Customizing the user experience: Feature flags can be used to
              customize the user experience based on user segments or
              configuration settings. For example, a developer could use feature
              flags to show different content to different users based on their
              location or their subscription type.
            </li>
          </ul>
          <p className="mb-2">
            Overall, feature flags are a powerful tool that can help software
            development teams to deliver better features to their users more
            quickly and safely.
          </p>
        </article>
        <aside
          className={classNames("col-span-3", sticky ? "fixed right-8" : "")}
        >
          <SignupCta />
        </aside>
      </div>
    </main>
  );
};

export default App;
