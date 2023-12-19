// when you put the sentece async in the function, it mean that the function return a promise, so, you can use the sentence await for get the result of the promise or use the .then() method
export const getImage = async () => {
    return "https://www.google.com"
}

export const getImageAsyncAwait = async () => {// when you put the sentece async in the function, it mean that the function return a promise, so, you can use the sentence await for get the result of the promise or use the .then() method
    
    const apiKey = 'EjxugpVJQ6hh0pa6zaNPmBkVrycwa5FJ';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    try{
        //if the variable res is of type Response, it mean res return a promise  

        //Jest is a JavaScript testing framework that runs in a Node.js environment, so, if you use versions below 18, probably you need to set additional configures in the file jest.config.js because not recognized me the sentence fetch in versions below 18 to the execute the tests, otherwise is not neccesary to configure nothing
        const res = await fetch(url);
        const {data} = await res.json();
        const urlImage = data.images.original.url;
        return urlImage;
    }catch(err){
        return err.message
    }
}


export const getImageAsyncAwaitError = async () => {// when you put the sentece async in the function, it mean that the function return a promise, so, you can use the sentence await for get the result of the promise or use the .then() method
    
    const apiKey = 'EjxugpVJQ6hh0pa6zaNPmBkVrycwa5FJ';
    const url = `https://api.giphy.com/v1/gifs/ram?api_key=${apiKey}`;
    try{
        const res = await fetch(url);
        const {data} = await res.json();
        const urlImage = data.images.original.url;
        return urlImage;
    }catch(err){
        return "No se encontro la imagen"
    }
}
