// when you put the sentece async in the function, it mean that the function return a promise, so, you can use the sentence await for get the result of the promise or use the .then() method
const getImage = async () => {
    return "https://www.google.com"
}

getImage().then(console.log)


const getImageAsyncAwait = async () => {// when you put the sentece async in the function, it mean that the function return a promise, so, you can use the sentence await for get the result of the promise or use the .then() method
const getImage = async () => {
    return "https://www.google.com"
}

getImage().then(console.log)


const getImageAsyncAwait = async () => {
    
    const apiKey = 'EjxugpVJQ6hh0pa6zaNPmBkVrycwa5FJ';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    try{
        //if the variable res is of type Response, it mean, res return a promise  
        const res = await fetch(url);
        const {data} = await res.json();

        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.appendChild(img);
    }catch(err){
        console.error(err)

    }
}
//i don't that this function will returned me some value, so i just run the function
getImageAsyncAwait()

    
    const apiKey = 'EjxugpVJQ6hh0pa6zaNPmBkVrycwa5FJ';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    try{
        //if the variable res is of type Response, it mean, res return a promise  
        const res = await fetch(url);
        const {data} = await res.json();

        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.appendChild(img);
    }catch(err){
        console.error(err)

    }
}
//i don't that this function will returned me some value, so i just run the function
getImageAsyncAwait()
