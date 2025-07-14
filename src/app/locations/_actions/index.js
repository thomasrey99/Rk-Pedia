import { customFetch } from "@/utils/customFetch"

export const getLocations = async (url) => {
    const response = await customFetch(url);
    return response;
}

export const getLocationById = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        return response;
    } catch (error) {
        throw new Error(error.message)
    }
}