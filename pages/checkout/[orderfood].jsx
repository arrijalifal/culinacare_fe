import { useRouter } from "next/router";
import HeaderFooterUser from "@/components/HeaderFooterUser";
import { useEffect } from "react";

export default function OrderFoodPage() {
    const router = useRouter();
    const foodselected = Number(router.query.orderfood);

    useEffect(() => {
        console.log(typeof (foodselected));
    })

    return <HeaderFooterUser>
        <div>
            <h1>Choose Funding Destination</h1>
            <select name="location" id="location" className="border border-black p-1 active:bg-green-400">
                <option value="location_default">Default Location</option>
                <option value="location_0">Location A</option>
                <option value="location_1">Location B</option>
                <option value="location_2">Location C</option>
            </select>
        </div>
        <div >
            <h1 className="text-xl font-bold">Nasi Kotak</h1>
            <h2>Restoran {foodselected + 1}</h2>
            <div className="flex justify-between mt-1">
                <p>Total</p>
                <p>(Koin){foodselected + 1}00</p>
            </div>
        </div>
        <div className="text-center mt-80">
            <button className="border border-black p-2 rounded">
                Continue Payment
            </button>
        </div>
    </HeaderFooterUser>
}