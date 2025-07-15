import Link from "next/link";
const CharacterCardDetail = ({ character, episodes }) => {
    const getStatusColor = (status) =>
    ({
        Alive: "bg-[var(--green)]",
        Dead: "bg-[var(--orange)]",
        unknown: "bg-[var(--grey)]",
    }[status] || "bg-[var(--grey)]");
    return (
        <div className="w-full sm:w-3/4 bg-[var(--space)] rounded-lg shadow-md border border-[var(--grey)]/30 p-2 sm:p-8">
            {/* Imagen + Info */}
            <div className="flex flex-col sm:flex-row gap-2">
                {/* Imagen */}
                <div className="w-full sm:w-[200px] flex-shrink-0 mx-auto sm:mx-0">
                    <img
                        src={character.image}
                        alt={character.name}
                        width={200}
                        height={200}
                        className="w-[200px] h-[200px] object-cover rounded-md border border-[var(--yellow-orange)]/20"
                    />
                </div>

                {/* Info */}
                <div className="w-full sm:flex-1 flex flex-col justify-start gap-1.5 mt-2 sm:mt-0">
                    <h1 className="text-base sm:text-lg font-semibold text-[var(--white)] leading-tight">
                        {character.name}
                    </h1>

                    <div className="flex items-center gap-1 text-xs sm:text-sm text-[var(--white)]">
                        <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(character.status)} animate-pulse`} />
                        <span>{character.status}</span>
                        <span className="text-[var(--grey)]">–</span>
                        <span>{character.species}</span>
                        {character.type && (
                            <span className="text-[var(--grey)]">({character.type})</span>
                        )}
                    </div>

                    {/* Gender, Origin, Location justo debajo del status */}
                    <div className="text-xs sm:text-sm text-[var(--white)] space-y-1 mt-1">
                        <p>
                            Gender: <span className="font-semibold text-[var(--yellow-orange)]">{character.gender}</span>
                        </p>
                        <div>
                            <p className="text-[var(--grey)] text-[10px] sm:text-xs font-medium">Origin:</p>
                            <p>{character.origin?.name || "Unknown"}</p>
                        </div>
                        <div>
                            <p className="text-[var(--grey)] text-[10px] sm:text-xs font-medium">Last known location:</p>
                            <Link
                                href={character.location?.url ? `/locations/${character.location.url.split("/").pop()}` : "#"}
                                className={`font-semibold ${character.location?.url
                                    ? "text-[var(--yellow-orange)] hover:text-[var(--orange)]"
                                    : "text-[var(--white)]"
                                    } transition-colors duration-200`}
                            >
                                {character.location?.name || "Unknown"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Episodios */}
            <div className="mt-3">
                <h2 className="text-xs sm:text-sm font-semibold text-[var(--grey)] mb-1">
                    Appears in Episodes
                </h2>
                <div className="grid gap-1.5 sm:grid-cols-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {episodes.map((episode) => (
                        <Link
                            key={episode.id}
                            href={`/episodes/${episode.id}`}
                            className="bg-[var(--space)]/50 border border-[var(--grey)]/20 p-1.5 rounded-md text-[var(--white)] text-xs hover:bg-[var(--green)]/30 transition-all duration-150"
                        >
                            <span className="font-medium block truncate">{episode.name}</span>
                            <span className="text-[var(--grey)] text-[10px]">{episode.episode}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CharacterCardDetail;