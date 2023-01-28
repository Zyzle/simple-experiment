import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { useAnalytics } from "use-analytics";

import { SignupCta } from "../SignupCta";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const App = () => {
  const { track, page } = useAnalytics();
  const sticky = useFeatureIsOn("test-feature");
  // page view
  page();

  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-cyan-300 to-blue-600">
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
                Section 1
              </a>
            </li>
            <li>
              <a
                href="#s2"
                onClick={() => track("click", { type: "nav", to: "s2" })}
              >
                Section 2
              </a>
            </li>
            <li>
              <a
                href="#s3"
                onClick={() => track("click", { type: "nav", to: "s3" })}
              >
                Section 3
              </a>
            </li>
          </ul>
        </nav>
        <article className="col-span-6 bg-white shadow-xl shadow-slate-700/10 rounded-lg p-6 prose">
          <h2 id="s1">Section 1</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            iaculis, neque nec molestie tincidunt, leo nibh consectetur lacus,
            eget venenatis leo eros at odio. Curabitur eros ipsum, ullamcorper a
            leo vel, maximus iaculis erat. Fusce rutrum urna in volutpat
            dapibus. Nulla iaculis suscipit dolor, sit amet faucibus tellus
            tristique eu. In sem elit, sollicitudin eu magna vel, elementum
            molestie neque. Pellentesque sed consequat dui, sed auctor ante.
            Cras suscipit sit amet massa in finibus. Ut et cursus neque. Vivamus
            maximus neque nunc, in faucibus velit tempus in. Vestibulum cursus
            et diam vel egestas.
          </p>
          <p className="mb-2">
            Praesent pellentesque eros quis bibendum laoreet. Duis metus nibh,
            finibus dignissim imperdiet vel, scelerisque sit amet elit. Praesent
            sed convallis orci. Sed interdum erat non tempus faucibus. Nullam
            eget turpis sollicitudin, bibendum quam nec, scelerisque tortor.
            Morbi suscipit massa odio, non sagittis tellus suscipit non. In hac
            habitasse platea dictumst. Curabitur dapibus eleifend faucibus. Nunc
            et ligula elementum, suscipit purus at, sollicitudin ligula. Sed
            eget enim diam. Donec pretium vitae metus quis feugiat.
          </p>
          <p className="mb-2">
            Vestibulum eu nisl eu orci auctor pellentesque. Donec pulvinar metus
            vel feugiat pellentesque. Nam accumsan quis justo eget luctus. Duis
            suscipit porta nulla non commodo. Curabitur purus leo, hendrerit at
            ullamcorper vel, iaculis sit amet dui. Quisque bibendum, dolor sit
            amet imperdiet pharetra, sem elit gravida ipsum, et sollicitudin
            nulla mi ac risus. Aenean condimentum varius nibh vitae congue.
            Mauris ut consectetur quam. Suspendisse bibendum suscipit ipsum eget
            faucibus.
          </p>
          <p className="mb-2">
            Praesent arcu elit, volutpat et mauris quis, volutpat vestibulum
            felis. Nam semper et massa in lobortis. Suspendisse facilisis
            bibendum dolor, a aliquet lorem tincidunt vel. Proin eget posuere
            justo. Aenean egestas magna a magna faucibus, sit amet eleifend
            augue elementum. Curabitur rutrum ornare luctus. Duis vitae commodo
            velit, non porttitor ligula. Donec ac ipsum eget metus posuere porta
            id vel metus. Duis finibus lobortis lectus vitae convallis. Proin
            aliquam faucibus mauris, nec aliquet tortor blandit sit amet.
            Suspendisse eu arcu ac sapien malesuada vulputate. Donec ac justo at
            lorem tincidunt pretium lacinia sit amet erat. Curabitur vitae lorem
            nec orci bibendum varius at vel nulla. Donec sit amet scelerisque
            elit.
          </p>
          <p className="mb-2">
            Vestibulum metus ante, ornare sit amet felis ac, congue euismod
            diam. Pellentesque pharetra augue tincidunt ante sagittis feugiat.
            Vestibulum dignissim erat in libero hendrerit, faucibus imperdiet
            nibh blandit. Etiam eu nisi eget mauris aliquam imperdiet. Aenean
            pretium ante a risus aliquam viverra. Cras tempor blandit congue.
            Suspendisse malesuada sem augue, quis accumsan odio egestas sed. Nam
            viverra felis quis consectetur accumsan.
          </p>
          <h2 id="s2">Section 2</h2>
          <p className="mb-2">
            Vestibulum erat diam, volutpat sed enim nec, scelerisque sagittis
            ligula. Praesent fringilla molestie placerat. Aliquam eu metus ante.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec efficitur dui
            lorem, at venenatis orci interdum eu. Fusce diam lectus, molestie ut
            tellus sit amet, lacinia scelerisque erat.
          </p>
          <p className="mb-2">
            Donec pellentesque ligula augue, rutrum pharetra urna aliquet eget.
            Cras vestibulum sapien metus, nec placerat ante tempus eget. Vivamus
            et commodo quam, eget interdum elit. Phasellus sit amet ligula leo.
            Fusce maximus nisl quis dui egestas dignissim. Aenean imperdiet
            libero vitae congue bibendum. Duis suscipit hendrerit dolor, in
            lobortis elit auctor a. Sed ipsum orci, mattis ut hendrerit at,
            sagittis vitae leo. Vivamus tincidunt tempus dui in hendrerit.
            Aliquam interdum massa lectus, vitae tempor turpis ullamcorper vel.
            Aenean arcu turpis, efficitur ut sapien eget, accumsan pretium elit.
          </p>
          <p className="mb-2">
            Quisque nunc massa, tempor sit amet nunc in, congue bibendum eros.
            Morbi vel elit ac ex condimentum volutpat id sodales est. Aliquam
            finibus faucibus ex in iaculis. Duis fringilla ligula eu urna
            faucibus consectetur. Phasellus ante felis, tempus non feugiat
            tempor, porttitor id arcu. Mauris vitae purus ac erat congue
            porttitor ac efficitur lectus. Nam mattis nunc at viverra lobortis.
            Maecenas in nulla ut nulla faucibus pretium. In vel neque at erat
            finibus fermentum. Vestibulum semper magna neque, non viverra mauris
            semper sit amet. Morbi aliquam felis non fringilla elementum. Nam
            malesuada justo et sagittis suscipit. Morbi dapibus rhoncus lacinia.
          </p>
          <p className="mb-2">
            Praesent varius, lectus in sagittis eleifend, purus magna commodo
            lectus, a scelerisque ex nisi in quam. Pellentesque sit amet ligula
            sit amet enim consectetur malesuada. Nam sem risus, dignissim
            condimentum justo sed, tincidunt lobortis quam. Nam blandit dui non
            hendrerit volutpat. Proin nec elit urna. Vivamus malesuada velit non
            libero efficitur placerat. Praesent vel hendrerit ex. Aliquam erat
            volutpat. Phasellus a egestas neque. Cras placerat facilisis
            hendrerit. Suspendisse potenti. Pellentesque volutpat pretium urna
            sed luctus. Nulla in eros ac turpis accumsan pulvinar nec volutpat
            lectus. Aenean sem nulla, lacinia nec sem id, vestibulum fermentum
            orci. Aliquam tempor nibh vel ligula suscipit dapibus id at ex.
            Proin porta, neque sed aliquam consectetur, eros lectus dictum
            magna, interdum finibus arcu elit id odio.
          </p>
          <h2 id="s3">Section 3</h2>
          <p className="mb-2">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Quisque ut accumsan lorem. Sed tincidunt
            nisi augue, non euismod ipsum luctus et. Maecenas nec nisi a leo
            dictum fringilla. Integer egestas egestas efficitur. Nulla faucibus
            rutrum mi vel feugiat. Quisque scelerisque fermentum felis, a cursus
            sapien ultricies vitae. Fusce a varius ante. Suspendisse gravida
            orci sollicitudin ultricies auctor. Donec rhoncus elementum
            volutpat. Suspendisse vitae odio auctor, elementum tellus non,
            vehicula libero.
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
