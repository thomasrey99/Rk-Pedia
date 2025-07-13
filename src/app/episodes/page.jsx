import { getCharacters } from "../characters/_actions"
import Pagination from "@/components/pagination";
import EpisodeCard from "@/components/cardEpisode";

export default async function Episodes({ searchParams }) {
    const name = await searchParams.name || ""
    const page = await searchParams.page || ""

    const url = "https://rickandmortyapi.com/api/episode";
    const episodes = await getCharacters(`${url}?name=${name}&page=${page}`)

    return (
        <div className=" w-full max-w-[90%] mx-auto">
            <div className="grid py-10 gap-5 sm:grid-cols-1 lg:grid-cols-2 mt-3">
                {
                    episodes.body
                        ?
                        episodes.body.map((
                            {
                                id,
                                name,
                                air_date,
                                episode,
                                characters
                            },
                            i
                        ) => {
                            return (
                                <EpisodeCard
                                    key={i}
                                    id={id}
                                    name={name}
                                    air_date={air_date}
                                    episode={episode}
                                    characters={characters}
                                />
                            )
                        })
                        :
                        ""
                }
            </div>
            <Pagination pages={episodes?.info?.pages || 1} path={"/episodes"} />
        </div>
    )
}