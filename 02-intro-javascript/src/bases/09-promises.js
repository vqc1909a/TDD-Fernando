import { getHeroeById } from "./08-imp-exp"

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //if is not present the callback (resolve or reject) resolve, the promise will not be resolved, it mean, it not return a value
            console.log("2 segundos después")

            const heroe = getHeroeById(id)
            
            if(heroe){
                resolve(heroe)
            }else{
                //if return a reject and in the promise not caught the reject value trought sentence catch, in the console navigator will show you the error message "Uncaught (in promise)". Then you know the solution for this problem is to caught the reject value in the promise
                reject("No se pudo encontrar el héroe")
            }
        }, 2000)
    })
}

// getHeroeByIdAsync(1000)
// .then(console.log)
// .catch(console.error)

( async () => {
    try{
        const heroe = await getHeroeByIdAsync(1000);
        console.log("Heroe", heroe)
    }catch(err){
        console.error("Err", err)
    }
})();






