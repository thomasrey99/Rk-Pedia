import Link from "next/link";
import Image from "next/image";
import { getCharactersById } from "@/app/characters/_actions";
import { getEpisode } from "../_actions";
import Card from "@/components/card";

export default async function Episode({ params }) {
    const { id } = params;

    // Fetch episode data
    const episode = await getEpisode(`https://rickandmortyapi.com/api/episode/${id}`);

    // Extract character IDs and fetch character data
    const characterIds = episode.characters.map((url) => url.split("/").pop());
    const characters = await getCharactersById(
        `https://rickandmortyapi.com/api/character/${characterIds.join(",")}`
    );
    // Normalize single character vs. multiple characters response
    const characterList = Array.isArray(characters) ? characters : [characters];

    // Determine status color for each character
    const getStatusColor = (status) =>
    ({
        Alive: "bg-[var(--green)]",
        Dead: "bg-[var(--orange)]",
        unknown: "bg-[var(--grey)]",
    }[status] || "bg-[var(--grey)]");

    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="w-full max-w-[90%] mx-auto py-6 sm:py-10">
                <div className="rounded-xl shadow-lg p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[var(--white)] truncate">
                        {episode.name}
                    </h1>
                    <p className="text-sm sm:text-base text-[var(--grey)] mt-1">{episode.episode}</p>
                    <p className="text-sm sm:text-base text-[var(--white)] mt-2">
                        Air Date: <span className="text-[var(--yellow-orange)]">{episode.air_date}</span>
                    </p>
                    <div className="mt-6">
                        <p className="text-base sm:text-lg font-semibold text-[var(--grey)]">Characters</p>
                        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 mt-3">
                            {characterList.map(({
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
                    </div>
                </div>
                <Link
                    href="/episodes"
                    className="mt-6 inline-block text-sm sm:text-base font-semibold text-[var(--yellow-orange)] hover:text-[var(--orange)] transition-colors duration-200"
                >
                    ← Back to Episodes
                </Link>
            </div>
        </div>
    );
}