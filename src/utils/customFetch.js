"use server"
export const customFetch = async (url) => {
    try {
        const data = await fetch(url)
        if (!data.ok) {
            return {
                status: 400,
                error: true,
                message: data.status,
                info: {
                    count: null,
                    pages: null,
                },
                body: []
            }
        }
        const { info = {}, results = [] } = await data.json();
        return {
            status: 200,
            error: false,
            message: "Solicitud procesada con exito",
            info: {
                count: info?.count ?? null,
                pages: info?.pages ?? null,
            },
            body: results
        }

    } catch (error) {
        return {
            status: 500,
            error: true,
            message: error.message,
            info: {
                count: null,
                pages: null,
            },
            body: []
        }
    }
}