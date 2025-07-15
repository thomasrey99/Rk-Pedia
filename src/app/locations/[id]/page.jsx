import { getLocationById } from "../_actions";
import Container from "@/components/container";
import LocationCardDetail from "@/components/cardLocation/detail";

async function fetchResidents(residentsUrls) {
    const ids = residentsUrls.map((url) => url.split("/").pop()).join(",");
    const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [data];
}

export default async function Location({ params }) {
    const { id } = params;
    const url = "https://rickandmortyapi.com/api/location";
    const location = await getLocationById(`${url}/${id}`);
    const residents = await fetchResidents(location.residents);

    return (
        <Container title={`Location #${location.id}`}>
            <LocationCardDetail location={location} residents={residents}/>
        </Container>
    );
}
