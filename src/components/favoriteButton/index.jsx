"use client";
import { useState, useEffect } from "react";

const FavoriteButton = ({ characterId, deleteFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        const favorites = stored ? JSON.parse(stored) : [];
        setIsFavorite(favorites.includes(characterId));
    }, [characterId]);

    const toggleFavorite = () => {
        const stored = localStorage.getItem("favorites");
        let favorites = stored ? JSON.parse(stored) : [];

        if (favorites.includes(characterId)) {
            favorites = favorites.filter((id) => id !== characterId);
            if (deleteFavorite) {
                deleteFavorite(characterId)
            }
            setIsFavorite(false);
        } else {
            favorites.push(characterId);
            setIsFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    return (
        <button
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="text-[var(--yellow-orange)] hover:text-[var(--orange)] transition-colors"
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            {isFavorite ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21C12 21 4.5 14.7 4.5 9.75C4.5 6.8 7.3 5 9.75 5C11.25 5 12 6.75 12 6.75C12 6.75 12.75 5 14.25 5C16.7 5 19.5 6.8 19.5 9.75C19.5 14.7 12 21 12 21Z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21C12 21 4.5 14.7 4.5 9.75C4.5 6.8 7.3 5 9.75 5C11.25 5 12 6.75 12 6.75C12 6.75 12.75 5 14.25 5C16.7 5 19.5 6.8 19.5 9.75C19.5 14.7 12 21 12 21Z"
                    />
                </svg>
            )}
        </button>
    );
};

export default FavoriteButton;
