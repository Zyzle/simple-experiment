import { useState } from "react";
import { useAnalytics } from "use-analytics";
import { SignupModal } from "../SignupModal";

const SignupCta = () => {
  const { track } = useAnalytics();

  const [signedUp, setSignedUp] = useState(false);

  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="prose">Sign up for our newsletter</div>
      <input type="text" placeholder="email" className="rounded-sm px-2" />
      <SignupModal
        disabled={signedUp}
        signedUp={() => {
          track("click", { type: "subscribe" });
          setSignedUp(true);
        }}
      />
    </div>
  );
};

export default SignupCta;
