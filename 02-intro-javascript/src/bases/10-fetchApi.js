const apiKey = 'EjxugpVJQ6hh0pa6zaNPmBkVrycwa5FJ';

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);
peticion.then(res => {
    return res.json();
}).then(res => {
    const data = res.data;
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
}).catch(err => {
    console.error(err);
})

