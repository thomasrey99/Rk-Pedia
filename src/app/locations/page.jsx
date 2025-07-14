import Pagination from "@/components/pagination";
import { getLocations } from "./_actions";
import LocationCard from "@/components/cardLocation";

export default async function Locations({ searchParams }) {
    const name = await searchParams.name || ""
    const page = await searchParams.page || ""
    const url = "https://rickandmortyapi.com/api/location";
    const locations = await getLocations(`${url}?name=${name}&page=${page}`)
    console.log(locations)
    return (
        <div className=" w-full max-w-[90%] mx-auto flex flex-wrap items-center justify-center">
            <div className="w-full px-5 font-bold">
                <h2 className="text-3xl text-[var(--white)] text-start">Locations</h2>
            </div>
            <div className="w-full grid gap-3 sm:grid-cols-1 lg:grid-cols-2 py-8">
                {
                    locations.body
                        ?
                        locations?.body?.map((location, i) => (
                            <LocationCard key={i} location={location} />
                        ))
                        :
                        ""
                }
            </div>
            <Pagination pages={locations?.info?.pages || 1} path={"/locations"} />
        </div>
    )
}