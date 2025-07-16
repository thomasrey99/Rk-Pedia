"use server";
import { getCharacters } from "./_actions";
import Card from "@/components/card";
import Container from "@/components/container";
import EmptyContent from "@/components/emptyContent";
import Pagination from "@/components/pagination";


export default async function Characters({ searchParams }) {
  const { name, page, status, gender } = await searchParams;

  const params = new URLSearchParams();
  if (name) params.set("name", name);
  if (status) params.set("status", status);
  if (gender) params.set("gender", gender);
  if (page) params.set("page", page);

  const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;
  const characters = await getCharacters(url);
  const characterList = characters.body || [];

  return (
    <>
      <Container title={"Characters"} isWraper={true}>
        {characterList.length === 0 ? (
          <EmptyContent />
        ) : (
          characterList.map((character) => (
            <Card key={character.id} character={character} />
          ))
        )}
      </Container>
      {characterList.length > 0 && (
        <Pagination pages={characters?.info?.pages || 1} path={"/characters"} />
      )}
    </>
  );
}
