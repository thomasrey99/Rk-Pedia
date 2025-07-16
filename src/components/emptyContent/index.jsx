import Image from "next/image";

const EmptyContent = () => {
    return (
        <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-6 pb-10 px-4">
            <div className="flex items-center justify-center p-6 rounded-xl shadow-md">
                <Image
                    src="/empty.png"
                    width={260}
                    height={260}
                    alt="empty content"
                    className="opacity-80"
                />
            </div>
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[var(--white)]">
                It&apos;s empty
            </h2>
            <p className="text-center text-sm sm:text-base text-[var(--grey)] max-w-md">
                Nothing to show here yet. Try modifying your search or filters.
            </p>
        </div>
    );
};

export default EmptyContent;
