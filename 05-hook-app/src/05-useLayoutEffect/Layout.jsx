import { useCounter, useFetch } from "../hooks";
import { ErrorQuote, LoadingQuote, QuoteLayoutEffect } from "../03-examples";

export const Layout = () => {

    const { handleAddCounter, counter } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);    
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
            <QuoteLayoutEffect quote={quote} author={author} />
            :
            <ErrorQuote />
        }

        <button className="btn btn-primary" onClick={() => handleAddCounter()} disabled={isLoading}>
            Next quote
        </button>

    </>

  )
}
