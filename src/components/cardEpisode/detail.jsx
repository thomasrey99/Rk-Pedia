"use client";

import Link from "next/link";

const EpisodeCardDetail = ({ episode, characterList }) => {
    return (
        <div className="w-full lg:w-3/4 bg-[var(--space)] rounded-lg shadow-md border border-[var(--grey)]/30 p-3 sm:p-4 space-y-2">
            {/* Info del episodio */}
            <div className="space-y-1">
                <h1 className="text-lg sm:text-xl font-bold text-[var(--white)] truncate">{episode.name}</h1>
                <p className="text-xs sm:text-sm text-[var(--grey)]">{episode.episode}</p>
                <p className="text-xs sm:text-sm text-[var(--white)]">
                    Air Date: <span className="text-[var(--yellow-orange)]">{episode.air_date}</span>
                </p>
            </div>

            {/* Personajes */}
            <p className="text-sm sm:text-base font-semibold text-[var(--grey)] mt-3">Characters</p>

            <div className="flex flex-wrap gap-3 justify-center">
                {characterList.map((character) => {
                    const statusColor = {
                        Alive: "bg-[var(--green)]",
                        Dead: "bg-[var(--orange)]",
                        unknown: "bg-[var(--grey)]",
                    }[character.status] || "bg-[var(--grey)]";

                    return (
                        <Link
                            key={character.id}
                            href={`/characters/${character.id}`}
                            aria-label={`View details for ${character.name}`}
                            className="block w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)]"
                        >
                            <article
                                className="flex flex-col items-center text-center p-2 bg-[var(--space)] rounded-md shadow border border-[var(--grey)]/20 hover:shadow-lg hover:border-[var(--yellow-orange)]/50 transition-all duration-200"
                            >
                                <img
                                    src={character.image}
                                    alt={`Image of ${character.name}`}
                                    className="w-24 h-24 rounded-full object-cover mb-2"
                                />
                                <p
                                    title={character.name}
                                    className="text-xs sm:text-sm font-semibold text-[var(--white)] overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-full"
                                >
                                    {character.name}
                                </p>
                                <div className="flex items-center gap-1 text-xs text-[var(--grey)] mt-1">
                                    <span className={`w-2 h-2 rounded-full ${statusColor} inline-block animate-pulse`} />
                                    <span>{character.status}</span>
                                </div>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default EpisodeCardDetail;