import {PlanetsResponse} from "@/features/planets/data/dto";
import Link from "next/link";

export default async function Page() {
    const result  = await fetch('https://dragonball-api.com/api/planets')

    const data : PlanetsResponse = await result.json()

    console.log(data)

    return <div>
        {data.items.map((item) => (
            <Link key={item.id} href={`planets/${item.id}`}>
                <h2>{item.name}</h2>
            </Link>
        ))}
    </div>
}
