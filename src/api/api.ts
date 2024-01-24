const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const getEmojisByName = async (name: string) => {
    const url = `${BASE_URL}?name=${name}`;
    const response = await fetch(url, {
        headers: {
            'X-Api-Key': import.meta.env.VITE_API_KEY,
        },
    });
    const data = await response.json();
    return data;
};
