"use server"
import { getCharacters } from "./_actions";
import Card from "@/components/card";
import Pagination from "@/components/pagination";

export default async function Characters({ searchParams }) {
    const name = await searchParams.name || ""
    const page = await searchParams.page || ""
    const url = "https://rickandmortyapi.com/api/character";
    const characters = await getCharacters(`${url}?name=${name}&page=${page}`)
    return (
        <div className="w-full max-w-[90%] mx-auto flex flex-wrap items-center justify-center">
            <div className="w-full px-5 font-bold">
                <h2 className="text-3xl text-[var(--white)] text-start">Characters</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2  py-8">
                {characters.body.map(({
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
            <Pagination pages={characters?.info?.pages || 1} path={"/characters"} />
        </div>
    )
}