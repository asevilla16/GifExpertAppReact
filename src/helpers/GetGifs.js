export const getGifs = async (category) => {
    const apiKey = 'br8rnQwaZPHBBDkdGQFKmTYyXQib6UGd';
    const limit = 10;

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const dbGifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });
    return dbGifs;
}