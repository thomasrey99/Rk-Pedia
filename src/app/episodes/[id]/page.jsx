
import { getCharactersById } from "@/app/characters/_actions";
import { getEpisode } from "../_actions";
import Card from "@/components/card";
import Container from "@/components/container";
import EpisodeCardDetail from "@/components/cardEpisode/detail";

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

    return (
        <Container title={`Episode #${episode.id}`}>
            <EpisodeCardDetail episode={episode} characterList={characterList} />
        </Container>

    );
}