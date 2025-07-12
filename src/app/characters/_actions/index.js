"use server"
import { customFetch } from "@/utils/customFetch";
const url = "https://rickandmortyapi.com/api/character";
export const getCharacters = async () => {
    const response = await customFetch(url);
    return response
};

export const getEpisode = async (url) => {
    try {
        const data = await fetch(url)
        const response = await data.json()
        return response.name ?? ""
    } catch (error) {
        throw new Error(error?.message)
    }

}