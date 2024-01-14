import { useCounter, useFetch } from "../hooks";
import { ErrorQuote, LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { handleAddCounter, counter } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    
    // console.log({data, isLoading, hasError});

    //Here we evaluate throught the value boolean of the data, so if the value is the false or true, the quote and author will be undefined and not will be any problems with the desetructuration, so simply we convert the value to a boolean assign to it "!!"
    const {quote, author} = !!data.length && data[0];

    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        
        {
            isLoading 
            ? 
            <LoadingQuote />
            :
            !hasError 
            ?
            <Quote quote={quote} author={author} />
            :
            <ErrorQuote />
        }

        <button aria-label="Next quote" className="btn btn-primary" onClick={() => handleAddCounter()} disabled={isLoading}>
            Next quote
        </button>

    </>

  )
}
