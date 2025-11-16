import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="text-4xl">Hello Notes App</h1>
        <h2 className="text-2xl">Making landing page later</h2>
        <div className="flex gap-10">
          <Link href="/signup">
            <button className="bg-[#171717] border-2 border-white rounded-xl cursor-pointer px-3 py-2 hover:bg-white hover:text-[#171717] transition-all">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-[#171717] border-2 border-white rounded-xl cursor-pointer px-3 py-2 hover:bg-white hover:text-[#171717] transition-all">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
