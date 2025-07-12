"use client"
const { useState } = require("react")

const Searchbar = () => {

    const [name, setName] = useState("")

    const handleSubmit = () => {

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex items-center gap-4 max-w-xl mx-auto relative"
        >
            <input
                type="text"
                placeholder="Buscar personaje..."
                className="w-full rounded-xl pl-4 pr-28 py-3 bg-[var(--white)]/5 backdrop-blur border border-[var(--white)]/10 text-[var(--white)] placeholder-[var(--grey)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                type="submit"
                className="absolute right-4 -translate-y-1/2 bg-[var(--green)]/60 hover:bg-[var(--green)] text-[var(--white)] px-6 py-2 rounded-lg font-semibold text-sm transition-all"
            >
                Buscar
            </button>
        </form>
    )
}

export default Searchbar