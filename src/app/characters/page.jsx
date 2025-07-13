"use server"
import Searchbar from "@/components/searchbar";
import { getCharacters } from "./_actions";
import Card from "@/components/card";
import Pagination from "@/components/pagination";
import ParticlesBackground from "@/components/background";

export default async function Characters({ searchParams }) {
    const name = await searchParams.name || ""
    const page= await searchParams.page || ""
    const url = "https://rickandmortyapi.com/api/character";
    const characters = await getCharacters(`${url}?name=${name}&page=${page}`)
    return (
        <div className=" w-full min-h-screen">
            <ParticlesBackground/>
            <Searchbar />
            <div className="w-full flex flex-wrap items-center justify-center gap-10 py-10">
                {
                    characters.body
                        ?
                        (
                            characters.body.map(({
                                id,
                                name,
                                status,
                                species,
                                type,
                                gender,
                                location,
                                image,
                                episode
                            }) => {
                                return (
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
                                )
                            })
                        )
                        :
                        ""
                }
            </div>
            <Pagination pages={characters?.info?.pages || 1}/>
        </div>
    )
}