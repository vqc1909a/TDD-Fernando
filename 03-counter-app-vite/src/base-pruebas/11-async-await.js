
export const getImagen = async() => {

    try {


        throw new Error("No se encuentra el héroe")
        const apiKey = 'T5VK6Db2r1LZrk5P1DlEGcmYytxOtLCZ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (err) {
        // manejo del error
        // console.error(error)
        const message = err.message;
        return message
    }
    
    
    
}

 getImagen();



