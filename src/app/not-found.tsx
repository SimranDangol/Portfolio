import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-zinc-100">404</h1>
      <p className="text-zinc-500 mt-2 text-sm">Page not found</p>
      <Link
        href="/"
        className="mt-6 text-sm text-zinc-400 hover:text-zinc-100 border border-zinc-800 rounded-md px-4 py-2"
      >
        Return Home
      </Link>
    </div>
  );
}
