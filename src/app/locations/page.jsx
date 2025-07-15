import Pagination from "@/components/pagination";
import { getLocations } from "./_actions";
import LocationCard from "@/components/cardLocation";
import Container from "@/components/container";

export default async function Locations({ searchParams }) {
    const name = await searchParams.name || ""
    const page = await searchParams.page || ""
    const url = "https://rickandmortyapi.com/api/location";
    const locations = await getLocations(`${url}?name=${name}&page=${page}`)
    return (
        <>
            <Container title={"Locations"} isWraper={true}>
                {
                    locations.body
                        ?
                        locations?.body?.map((location, i) => (
                            <LocationCard key={i} location={location} />
                        ))
                        :
                        ""
                }
            </Container>
            <Pagination pages={locations?.info?.pages || 1} path={"/locations"} />
        </>
    )
}