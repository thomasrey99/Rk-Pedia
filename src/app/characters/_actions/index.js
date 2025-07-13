"use server"
import { customFetch } from "@/utils/customFetch";

export const getCharacters = async (url) => {
    const response = await customFetch(url);
    return response
};

export const getCharactersById = async (url) => {
    try {
        const data = await fetch(url)
        const response = await data.json()
        return response
    } catch (error) {
        throw new Error(error.message)
    }
}
