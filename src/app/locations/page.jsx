import Pagination from "@/components/pagination";
import { getLocations } from "./_actions";
import LocationCard from "@/components/cardLocation";
import Container from "@/components/container";
import EmptyContent from "@/components/emptyContent";

export default async function Locations({ searchParams }) {
    const name = searchParams.name || "";
    const page = searchParams.page || "";
    const url = "https://rickandmortyapi.com/api/location";

    const locations = await getLocations(`${url}?name=${name}&page=${page}`);
    const locationList = locations.body || [];

    return (
        <>
            <Container title="Locations" isWraper={true}>
                {locationList.length === 0 ? (
                    <EmptyContent />
                ) : (
                    locationList.map((location) => (
                        <LocationCard key={location.id} location={location} />
                    ))
                )}
            </Container>

            {locationList.length > 0 && (
                <Pagination pages={locations?.info?.pages || 1} path="/locations" />
            )}
        </>
    );
}
