const { getEpisode } = require("@/app/characters/_actions")

const Card = async ({
    id,
    name,
    status,
    species,
    type,
    gender,
    location,
    image,
    episode
}) => {

    const episodeName = await getEpisode(episode[0])

    return (
        <article className="flex flex-col sm:flex-row w-full max-w-xl bg-[var(--card)] rounded-xl overflow-hidden shadow-lg text-[var(--white)]">
            <div className="w-full sm:w-1/3">
                <img
                    src={image}
                    alt={name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full sm:w-2/3 p-4 flex flex-col gap-4">
                <div>
                    <h2
                        className="text-xl font-bold"
                    >
                        {name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-300">
                        <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 align-middle"></span>
                        {status} {species}
                    </p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Last known location:</p>
                    {location?.name}
                </div>

                <div>
                    <p className="text-gray-400 text-sm">First seen in:</p>
                    {episodeName ?? ""}
                </div>
            </div>
        </article>
    )
}

export default Card;