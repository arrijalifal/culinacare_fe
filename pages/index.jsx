import Link from "next/link";
import React from "react";

export default function Home() {
  return <main className="w-screen h-screen">
    <section className="flex justify-between py-5">
      <h1>Hello, User!</h1>
      <h2>(Koin)500</h2>
    </section>
    <hr className="border-black" />
    <section className="mt-10">
      {
        Array.from({ length: 5 }).map((_, idx) => {
          return <React.Fragment key={idx}>
            <Link href={`/checkout/${idx}`}>
              <div className="p-2 m-2 border border-black rounded hover:bg-slate-500">
                <h1>Nasi Kotak</h1>
                <p>(Koin) {idx + 1}00</p>
              </div>
            </Link>
          </React.Fragment>
        })
      }
    </section>
  </main>
}