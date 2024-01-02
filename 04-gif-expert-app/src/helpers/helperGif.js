export const getGifsByCategory = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=EjxugpVJQ6hh0pa6zaNPmBkVrycwa5FJ`
    return fetch(url)
        .then(resp => resp.json())
        .then(({data}) => {
            const gifs = data.map(img => ({
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }))
            return gifs;
        })
}
