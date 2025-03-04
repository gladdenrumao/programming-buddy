import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Programming Buddy</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/learn" className="hover:underline">Learn</Link>
      </div>
    </nav>
  );
}
