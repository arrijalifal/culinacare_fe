import Link from "next/link";
import React from "react";
import HeaderFooterUser from "@/components/HeaderFooterUser";

export default function FoodFundList() {
  return <HeaderFooterUser>
    {
      Array.from({ length: 5 }).map((_, idx) => {
        return <React.Fragment key={idx}>
          <Link href={`/checkout/${idx}`}>
            <div className="p-2 my-2 border border-black rounded hover:bg-slate-500">
              <h1>Nasi Kotak</h1>
              <h2>Restoran {idx + 1}</h2>
              <p>(Koin) {idx + 1}00</p>
            </div>
          </Link>
        </React.Fragment>
      })
    }
  </HeaderFooterUser>
}