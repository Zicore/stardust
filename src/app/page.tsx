import Link from "next/link";
import Calculator from "./_components/calculator";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#20C0C6] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Calculator></Calculator>
      </div>
      <Link href={`https://github.com/Zicore/`}>By Zicore</Link>
    </main>
  );
}
