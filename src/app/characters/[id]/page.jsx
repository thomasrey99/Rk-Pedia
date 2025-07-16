"use server";

import { getCharactersById } from "../_actions";
import Container from "@/components/container";
import CharacterCardDetail from "@/components/card/detail";
import RedirectButton from "@/components/redirectButton";

async function fetchEpisodesByIds(episodeUrls) {
  const episodeIds = episodeUrls.map((url) => url.split("/").pop());
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [data];
}

export default async function Character({ params }) {
  const { id } = params;
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const character = await getCharactersById(url);
  const episodes = await fetchEpisodesByIds(character.episode);



  return (
    <Container title={`Character #${character.id}`}>
      <CharacterCardDetail character={character && character} episodes={episodes && episodes} />
      <RedirectButton path={"/characters"} text={"Back to characters"}/>
    </Container>

  );
}
