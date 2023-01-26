const SignupCta = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="prose">Sign up for our newsletter</div>
      <input type="text" placeholder="email" className="rounded-sm px-2" />
      <button className="rounded-full bg-slate-600 text-white px-2 py-1">
        Submit
      </button>
    </div>
  );
};

export default SignupCta;
