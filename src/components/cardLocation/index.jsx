import Link from "next/link";


export default async function LocationCard({ location }) {

  return (
    <article
      className="bg-[var(--space)] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[var(--grey)]/20 transition-all duration-300 w-full"
      aria-labelledby={`location-${location.id}-name`}
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        <div>
          <Link
            href={`/locations/${location.id}`}
            className="text-2xl sm:text-3xl font-extrabold text-[var(--white)] hover:text-[var(--yellow-orange)] truncate tracking-tight"
          >
            <h2
              id={`location-${location.id}-name`}

            >
              {location.name}
            </h2>
          </Link>
          <p className="mt-2 text-base sm:text-lg text-[var(--white)]">
            Type: <span className="text-[var(--yellow-orange)] font-semibold">{location.type}</span>
          </p>
          <p className="text-base sm:text-lg text-[var(--white)] mt-1">
            Dimension: <span className="text-[var(--yellow-orange)] font-semibold">{location.dimension || "Unknown"}</span>
          </p>
        </div>
      </div>

    </article>
  );
}