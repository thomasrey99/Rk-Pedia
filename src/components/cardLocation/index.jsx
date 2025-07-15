import Link from "next/link";

export default async function LocationCard({ location }) {
  return (
    <article
      className="w-full max-w-[90%] sm:max-w-xl bg-[var(--space)] border border-[var(--grey)]/20 rounded-xl shadow-md p-4 sm:p-5 transition-all duration-300 hover:shadow-lg"
      aria-labelledby={`location-${location.id}-name`}
    >
      <Link
        href={`/locations/${location.id}`}
        className="flex flex-col gap-2"
      >
        <h2
          id={`location-${location.id}-name`}
          className="text-xl sm:text-2xl font-bold text-[var(--white)] hover:text-[var(--yellow-orange)] transition-colors truncate"
        >
          {location.name}
        </h2>

        <p className="text-sm sm:text-base text-[var(--grey)]">
          Type:{" "}
          <span className="text-[var(--white)] font-medium">
            {location.type || "Unknown"}
          </span>
        </p>

        <p className="text-sm sm:text-base text-[var(--grey)]">
          Dimension:{" "}
          <span className="text-[var(--white)] font-medium">
            {location.dimension || "Unknown"}
          </span>
        </p>
      </Link>
    </article>
  );
}
