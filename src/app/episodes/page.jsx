import { getCharacters } from "../characters/_actions"
import Pagination from "@/components/pagination";
import EpisodeCard from "@/components/cardEpisode";
import Container from "@/components/container";

export default async function Episodes({ searchParams }) {
    const name = await searchParams.name || ""
    const page = await searchParams.page || ""

    const url = "https://rickandmortyapi.com/api/episode";
    const episodes = await getCharacters(`${url}?name=${name}&page=${page}`)

    return (
        <>
            <Container title={"Episodes"} isWraper={true}>
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
            </Container>
            <Pagination pages={episodes?.info?.pages || 1} path={"/episodes"} />
        </>

    )
}