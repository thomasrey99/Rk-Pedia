import { getEpisode } from "@/app/episodes/_actions";
import Link from "next/link";


const Card = async ({
  id,
  name,
  status,
  species,
  type,
  gender,
  location,
  image,
  episode,
}) => {
  const episodeName = await getEpisode(episode[0]);

  // Determinar el color del indicador de estado
  const statusColor = {
    Alive: "bg-[var(--green)]",
    Dead: "bg-[var(--orange)]",
    unknown: "bg-[var(--grey)]",
  }[status] || "bg-[var(--grey)]";

  return (
    <article
      className="flex flex-col sm:flex-row w-full max-w-[90%] sm:max-w-xl mx-auto bg-[var(--space)]/80 rounded-xl overflow-hidden shadow-lg text-[var(--white)] hover:shadow-xl transition-shadow duration-200"
      aria-labelledby={`character-${id}-name`}
    >
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
          <Link href={`/episodes/${episodeName.id}`} className="text-xs hover:text-[var(--yellow-orange)] sm:text-base truncate">{episodeName?.name || "Desconocido"}</Link>
        </div>
      </div>
    </article>
  );
};

export default Card;