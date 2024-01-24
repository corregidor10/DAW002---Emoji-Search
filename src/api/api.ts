const BASE_URL = 'https://api.api-ninjas.com/v1/emoji';

const API_KEY = '47vsJpfCmeD02ejFnBtK8Q==nHOuszQVIByg7sYi';

//creame un metodo que use el fetch para hacer la peticion a la api y añada el API KEY en este header

export const getEmojisByName = async (name: string) => {
    const url = `${BASE_URL}?name=${name}`;
    const response = await fetch(url, {
        headers: {
            'X-Api-Key': API_KEY,
        },
    });
    const data = await response.json();
    return data;
};
