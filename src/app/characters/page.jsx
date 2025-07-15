"use server"
import { getCharacters } from "./_actions";
import Card from "@/components/card";
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
  console.log("📦 Request URL:", url);

  const characters = await getCharacters(url);

  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-wrap items-center justify-center">
      <div className="w-full px-5 font-bold">
        <h2 className="text-3xl text-[var(--white)] text-start">Characters</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 py-8">
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
      </div>
      <Pagination pages={characters?.info?.pages || 1} path={"/characters"} />
    </div>
  );
}
