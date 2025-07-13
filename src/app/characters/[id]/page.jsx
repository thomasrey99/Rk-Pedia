"use server";
import Link from "next/link";
import Image from "next/image";
import { getCharactersById } from "../_actions";

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

  // Fetch episode names
  const episodes = await fetchEpisodesByIds(character.episode);

  // Determine status color
  const getStatusColor = (status) =>
    ({
      Alive: "bg-[var(--green)]",
      Dead: "bg-[var(--orange)]",
      unknown: "bg-[var(--grey)]",
    }[status] || "bg-[var(--grey)]");

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full max-w-[90%] sm:max-w-4xl mx-auto py-8 sm:py-12">
        <div className="bg-[var(--space)]/80 rounded-2xl shadow-2xl p-6 sm:p-8 border border-[var(--grey)]/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-full sm:w-1/3">
              <img
                src={character.image}
                width={200}
                height={200}
                alt={`Image of ${character.name}`}
                className="object-cover w-full h-56 sm:h-64 rounded-lg border-2 border-[var(--yellow-orange)]/50 hover:border-[var(--green)] transition-colors duration-300"
              />
            </div>
            <div className="w-full sm:w-2/3 flex flex-col gap-4 sm:gap-6">
              <div>
                <h1
                  id={`character-${character.id}-name`}
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--white)] truncate tracking-tight"
                >
                  {character.name}
                </h1>
                <p className="mt-2 text-base sm:text-lg text-[var(--white)] flex items-center">
                  <span
                    className={`inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full ${getStatusColor(character.status)} mr-3 animate-pulse`}
                    aria-hidden="true"
                  ></span>
                  {character.status} - {character.species}
                  {character.type && <span className="text-[var(--grey)] ml-1"> ({character.type})</span>}
                </p>
                <p className="text-base sm:text-lg text-[var(--white)] mt-1">
                  Gender: <span className="text-[var(--yellow-orange)] font-semibold">{character.gender}</span>
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[var(--grey)] font-medium">Origin:</p>
                <p className="text-base sm:text-lg text-[var(--white)] truncate">
                  {character.origin?.name || "Unknown"}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-[var(--grey)] font-medium">Last known location:</p>
                <Link
                  href={character.location?.url ? `/locations/${character.location.url.split("/").pop()}` : "#"}
                  className={`text-base sm:text-lg truncate ${character.location?.url ? "text-[var(--yellow-orange)]" : "text-[var(--white)]"} font-semibold transition-colors duration-200`}
                >
                  {character.location?.name || "Unknown"}
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg sm:text-xl font-semibold text-[var(--grey)]">Appears in Episodes</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-4 max-h-96 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [::-webkit-scrollbar]:hidden">
              {episodes.map((episode) => (
                <Link
                  key={episode.id}
                  href={`/episodes/${episode.id}`}
                  className="bg-[var(--space)]/50 rounded-lg p-3 hover:text-[var(--yellow-orange)] text-[var(--white)] text-sm sm:text-base truncate transition-all duration-200 border border-[var(--grey)]/20"
                >
                  {episode.name} <span className="text-[var(--grey)]">({episode.episode})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link
          href="/characters"
          className="mt-6 inline-block text-base sm:text-lg font-semibold text-[var(--yellow-orange)] hover:text-[var(--orange)] transition-colors duration-200"
        >
          ← Back to Characters
        </Link>
      </div>
    </div>
  );
}