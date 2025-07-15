const LocationCardDetail = ({ location, residents }) => {
    return (
        <article className="w-full lg:w-3/4 bg-[var(--space)] rounded-lg shadow-md border border-[var(--grey)]/30 p-3 sm:p-4 space-y-4">
            {/* Info de la ubicación */}
            <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--white)]">
                    {location.name}
                </h2>
                <p className="text-base sm:text-lg text-[var(--white)]">
                    <span className="text-[var(--grey)]">Type:</span> {location.type || "Unknown"}
                </p>
                <p className="text-base sm:text-lg text-[var(--white)]">
                    <span className="text-[var(--grey)]">Dimension:</span> {location.dimension || "Unknown"}
                </p>
            </div>

            {/* Residents */}
            <p className="text-sm sm:text-base font-semibold text-[var(--grey)] mt-3">Residents</p>

            {residents.length === 0 ? (
                <p className="text-[var(--white)]">No known residents.</p>
            ) : (
                <div className="flex flex-wrap gap-3">
                    {residents.map((resident) => {
                        const statusColor = {
                            Alive: "bg-[var(--green)]",
                            Dead: "bg-[var(--orange)]",
                            unknown: "bg-[var(--grey)]",
                        }[resident.status] || "bg-[var(--grey)]";

                        return (
                            <div
                                key={resident.id}
                                className="flex flex-col items-center text-center p-2 bg-[var(--space)] rounded-md shadow border border-[var(--grey)]/20 w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)]"
                            >
                                <img
                                    src={resident.image}
                                    alt={resident.name}
                                    className="w-24 h-24 rounded-full object-cover mb-2"
                                />
                                <p
                                    title={resident.name}
                                    className="text-xs sm:text-sm font-semibold text-[var(--white)] overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-full"
                                >
                                    {resident.name}
                                </p>
                                <div className="flex items-center gap-1 text-xs text-[var(--grey)] mt-1">
                                    <span className={`w-2 h-2 rounded-full ${statusColor} inline-block animate-pulse`} />
                                    <span>{resident.status}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </article>
    );
};

export default LocationCardDetail;
