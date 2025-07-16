"use client";

import { useEffect, useState } from "react";
import FavoriteCharacterCard from "@/components/card/favorite";
import Container from "@/components/container";
import LoadingComponent from "@/components/loading";
import { getFavorites } from "@/utils/getFavorites";

export default function Favorites() {
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // inicializar en true
    const [hydrated, setHydrated] = useState(false);  // para esperar el localStorage

    // Leer localStorage una sola vez al montar
    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setFavoriteIds(parsed);
                }
            } catch (err) {
                console.error("Error parsing localStorage favorites:", err);
                setError("Error al leer favoritos");
            }
        }
        setHydrated(true); // marcar como "hidratado"
    }, []);

    const deleteFavorite=async (idDelete)=>{
        console.log("id a eliminar", idDelete)
        const updateFavoritesId = favoriteIds.filter((id) => id !== idDelete);
        setFavoriteIds(updateFavoritesId)
    }

    // Una vez que el localStorage fue leído
    useEffect(() => {
        const fetchData = async () => {
            if (!hydrated) return;

            setIsLoading(true);

            if (!favoriteIds.length) {
                setFavorites([]);
                setIsLoading(false);
                return;
            }

            try {
                const data = await getFavorites(favoriteIds);
                const favoritesData = Array.isArray(data?.body) ? data.body : [];
                setFavorites(favoritesData);
                setError(null);
            } catch (err) {
                console.error("Error fetching favorites:", err);
                setError("Error al cargar favoritos");
                setFavorites([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [favoriteIds, hydrated]);

    useEffect(()=>{

    },[favorites])

    return (
        <Container title="Your favorites ❤️" isWraper={true}>
            {isLoading ? (
                <LoadingComponent />
            ) : error ? (
                <div className="text-center text-red-500 font-medium">{error}</div>
            ) : favorites.length > 0 ? (
                favorites.map((character, i) => (
                    <FavoriteCharacterCard key={i} character={character} deleteFavorite={deleteFavorite}/>
                ))
            ) : (
                <div className="text-center text-gray-400 font-medium">
                    No tienes personajes favoritos aún.
                </div>
            )}
        </Container>
    );
}
