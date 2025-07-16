import { getCharacters } from "../characters/_actions"
import Pagination from "@/components/pagination"
import EpisodeCard from "@/components/cardEpisode"
import Container from "@/components/container"
import EmptyContent from "@/components/emptyContent"


export default async function Episodes({ searchParams }) {
    const name = searchParams.name || ""
    const page = searchParams.page || ""

    const url = "https://rickandmortyapi.com/api/episode"
    const episodes = await getCharacters(`${url}?name=${name}&page=${page}`)

    const episodeList = episodes.body || []

    return (
        <>
            <Container title={"Episodes"} isWraper={true}>
                {episodeList.length === 0 ? (
                    <EmptyContent />
                ) : (
                    episodeList.map(({ id, name, air_date, episode, characters }) => (
                        <EpisodeCard
                            key={id}
                            id={id}
                            name={name}
                            air_date={air_date}
                            episode={episode}
                            characters={characters}
                        />
                    ))
                )}
            </Container>
            {episodeList.length > 0 && (
                <Pagination pages={episodes?.info?.pages || 1} path={"/episodes"} />
            )}
        </>
    )
}
