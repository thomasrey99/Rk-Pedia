"use server";
import Link from "next/link";
import FavoriteButton from "../favoriteButton";
import { getEpisode } from "@/app/episodes/_actions";

const Card = async ({ character }) => {
  const { id, name, status, species, type, location, image } = character;
  const firstEpisode = await getEpisode(character?.episode[0])
  const statusColor = {
    Alive: "bg-[var(--green)]",
    Dead: "bg-[var(--orange)]",
    unknown: "bg-[var(--grey)]",
  }[status] || "bg-[var(--grey)]";

  return (
    <article
      className="relative bg-[var(--space)] flex flex-col sm:flex-row w-full max-w-[90%] sm:max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg text-[var(--white)] hover:shadow-xl transition-shadow duration-200"
      aria-labelledby={`character-${id}-name`}
    >
      {/* Botón Favorito - extremo superior derecho */}
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton characterId={id} />
      </div>

      <div className="w-full sm:w-1/3">
        <img
          src={image}
          alt={`Imagen de ${name}`}
          className="object-cover w-full h-40 sm:h-full"
        />
      </div>

      <div className="w-full sm:w-2/3 p-2 sm:p-4 flex flex-col gap-2 sm:gap-4">
        <div>
          <Link
            href={`/characters/${id}`}
            id={`character-${id}-name`}
            className="text-base hover:text-[var(--yellow-orange)] sm:text-xl font-bold truncate"
          >
            {name}
          </Link>
          <p className="mt-1 text-xs sm:text-sm text-[var(--white)] flex items-center">
            <span
              className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${statusColor} mr-2 animate-pulse`}
              aria-hidden="true"
            ></span>
            {status} - {species}
            {type && ` (${type})`}
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs sm:text-sm">Last known location:</p>
          <p className="text-xs sm:text-base truncate">{location?.name || "Desconocida"}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs sm:text-sm">First seen in:</p>
          <Link
            href={`/episodes/${firstEpisode?.id}`}
            className="text-xs hover:text-[var(--yellow-orange)] sm:text-base truncate"
          >
            {firstEpisode?.name || "Unknown"}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
