"use server";
import Link from "next/link";
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
  const episodes = await fetchEpisodesByIds(character.episode);

  const getStatusColor = (status) =>
    ({
      Alive: "bg-[var(--green)]",
      Dead: "bg-[var(--orange)]",
      unknown: "bg-[var(--grey)]",
    }[status] || "bg-[var(--grey)]");

  return (
    <div className="w-full min-h-screen max-w-[90%] mx-auto flex justify-center items-start bg-[var(--background)] px-4 py-10">
      <div className="w-full bg-[var(--space)] rounded-3xl shadow-xl border border-[var(--grey)]/30 p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/3">
            <img
              src={character.image}
              width={300}
              height={300}
              alt={character.name}
              className="w-full h-64 object-cover rounded-xl border-2 border-[var(--yellow-orange)]/40 transition-all duration-300"
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--white)] leading-tight">
              {character.name}
            </h1>
            <div className="text-[var(--white)] text-base sm:text-lg flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full ${getStatusColor(character.status)} animate-pulse`}
              ></span>
              {character.status} – {character.species}
              {character.type && <span className="text-[var(--grey)]">({character.type})</span>}
            </div>
            <p className="text-base sm:text-lg text-[var(--white)]">
              Gender: <span className="font-semibold text-[var(--yellow-orange)]">{character.gender}</span>
            </p>
            <div>
              <p className="text-sm text-[var(--grey)] font-medium">Origin:</p>
              <p className="text-[var(--white)] text-base sm:text-lg">{character.origin?.name || "Unknown"}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--grey)] font-medium">Last known location:</p>
              <Link
                href={character.location?.url ? `/locations/${character.location.url.split("/").pop()}` : "#"}
                className={`text-base sm:text-lg font-semibold ${
                  character.location?.url
                    ? "text-[var(--yellow-orange)] hover:text-[var(--orange)]"
                    : "text-[var(--white)]"
                } transition-colors duration-200`}
              >
                {character.location?.name || "Unknown"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-lg sm:text-xl font-semibold text-[var(--grey)]">Appears in Episodes</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-h-96 overflow-y-auto custom-scrollbar">
            {episodes.map((episode) => (
              <Link
                key={episode.id}
                href={`/episodes/${episode.id}`}
                className="p-3 rounded-xl bg-[var(--space)]/60 text-[var(--white)] text-sm sm:text-base border border-[var(--grey)]/20 hover:bg-[var(--green)]/50 transition-all duration-200"
              >
                {episode.name} <span className="text-[var(--grey)]">({episode.episode})</span>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/characters"
          className="mt-8 inline-block text-base sm:text-lg font-semibold text-[var(--yellow-orange)] hover:text-[var(--orange)] transition-colors duration-200"
        >
          ← Back to Characters
        </Link>
      </div>
    </div>
  );
}
