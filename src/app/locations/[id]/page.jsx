import Link from "next/link";
import { getLocationById, getCharactersById } from "../_actions";
import Card from "@/components/card";

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
        <div className="w-full min-h-screen flex justify-center items-start px-4 py-10">
            <div className="w-full rounded-3xl shadow-xl p-6 sm:p-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--white)] mb-4">Location: <span className="text-[var(--yellow-orange)]">{location.name}</span></h2>
                <p className="text-[var(--white)] text-base sm:text-lg">
                    <span className="text-[var(--grey)]">Type:</span> {location.type || "Unknown"}
                </p>
                <p className="text-[var(--white)] text-base sm:text-lg mb-6">
                    <span className="text-[var(--grey)]">Dimension:</span> {location.dimension || "Unknown"}
                </p>

                <p className="text-lg sm:text-xl font-semibold text-[var(--grey)] mb-3">Residents</p>

                {residents.length === 0 ? (
                    <p className="text-[var(--white)]">No known residents.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {residents?.map(({
                            id,
                            name,
                            status,
                            species,
                            type,
                            gender,
                            location,
                            image,
                            episode
                        }) => (
                            <Card
                                key={name}
                                id={id}
                                name={name}
                                status={status}
                                species={species}
                                type={type}
                                gender={gender}
                                location={location}
                                image={image}
                                episode={episode}
                            />
                        ))}
                    </div>
                )}

                <Link
                    href="/locations"
                    className="mt-8 inline-block text-base sm:text-lg font-semibold text-[var(--yellow-orange)] hover:text-[var(--orange)] transition-colors duration-200"
                >
                    ← Back to Locations
                </Link>
            </div>
        </div>
    );
}
