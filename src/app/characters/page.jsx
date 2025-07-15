"use server"
import { getCharacters } from "./_actions";
import Card from "@/components/card";
import Container from "@/components/container";
import Pagination from "@/components/pagination";

export default async function Characters({ searchParams }) {
  const { name, page, status, gender } = await searchParams;

  // Construir los parámetros válidos dinámicamente
  const params = new URLSearchParams();

  if (name) params.set("name", name);
  if (status) params.set("status", status);
  if (gender) params.set("gender", gender);
  if (page) params.set("page", page);


  const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;

  const characters = await getCharacters(url);

  return (
    <>
      <Container title={"Characters"} isWraper={true}>
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
        ))}
      </Container>
      <Pagination pages={characters?.info?.pages || 1} path={"/characters"} />
    </>
  );
}
