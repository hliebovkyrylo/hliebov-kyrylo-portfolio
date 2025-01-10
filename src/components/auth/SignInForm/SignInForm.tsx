import Link from "next/link";

export const SignInForm = () => {
  return (
    <div className="max-w-80 w-full">
      <form className="flex flex-col gap-2 bg-slate-800 p-3 rounded-xl">
        <input
          className="px-3 py-2 rounded-lg bg-slate-600"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-3 py-2 rounded-lg bg-slate-600"
          type="password"
          placeholder="Password"
        />
        <button className="h-11 bg-emerald-600 rounded-lg">Sign In</button>
      </form>
      <span>If you not admin, please back to</span>
      <Link href={"/"} className="ml-1 hover:underline text-emerald-600">
        home page
      </Link>
    </div>
  );
};
