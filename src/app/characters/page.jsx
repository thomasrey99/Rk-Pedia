"use server"
import Searchbar from "@/components/searchbar";
import { getCharacters } from "./_actions";
import Card from "@/components/card";
import Pagination from "@/components/pagination";

export default async function Characters() {
    const characters = await getCharacters()
    return (
        <div className="bg-[var(--space)] w-full min-h-screen py-10">
            <Searchbar/>
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
                                        key={id}
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
            <Pagination pages={characters?.info?.pages}/>
        </div>
    )
}