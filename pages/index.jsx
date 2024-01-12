import Link from "next/link";
import HeaderFooterUser from "@/components/HeaderFooterUser";

export default function Home() {
    return <HeaderFooterUser>
        <div className="h-full pb-10 flex justify-center items-center">
            <Link href={'/fundfood'}>
                <button className="border p-4 rounded-lg border-black active:bg-blue-100">Fund Food</button>
            </Link>
        </div>
    </HeaderFooterUser>
}