import axios from 'axios'

export const searchImages = async (query, page) => {
    const accessKey = "Wp5edUFQK-wcedPUVqPrQYhJ0paaqJwxMkh9KvGFV3g";
    const queryResult = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: query,
            page: page,
            per_page: 20,
            client_id: accessKey,
            orientation: "landscape"
        }
    });
    return queryResult.data;
}