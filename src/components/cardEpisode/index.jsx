import Link from "next/link";

const EpisodeCard = ({ id, name, air_date, episode, characters }) => {
    return (
        <article
            className="flex flex-col w-full max-w-[90%] sm:max-w-xl mx-auto bg-[var(--space)]/80 rounded-xl overflow-hidden shadow-lg text-[var(--white)] hover:shadow-xl transition-shadow duration-200"
            aria-labelledby={`episode-${id}-name`}
        >
            <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
                <div>
                    <h2
                        id={`episode-${id}-name`}
                        className="text-lg sm:text-xl font-bold truncate"
                    >
                        {name}
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-[var(--grey)]">
                        {episode}
                    </p>
                </div>
                <div>
                    <p className="text-[var(--grey)] text-xs sm:text-sm">Air Date:</p>
                    <p className="text-sm sm:text-base truncate">{air_date}</p>
                </div>
                <div>
                    <p className="text-[var(--grey)] text-xs sm:text-sm">Characters:</p>
                    <p className="text-sm sm:text-base">{characters.length} characters</p>
                </div>
                <Link
                    href={`/episodes/${id}`}
                    className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--yellow-orange)] hover:text-[var(--orange)] font-semibold transition-colors duration-200"
                >
                    View Episode Details
                </Link>
            </div>
        </article>
    );
};

export default EpisodeCard;