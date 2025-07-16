export const getFavorites = async (ids) => {
    const url = `https://rickandmortyapi.com/api/character/${ids.join(", ")}`
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
        const results = await data.json();
        console.log(results)
        return {
            status: 200,
            error: false,
            message: "Solicitud procesada con exito",
            info: {
                count: results.length || 0,
                pages: null,
            },
            body: Array.isArray(results) ? results : [results]
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