import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote=()=>{
    const addNewQuoteHandler=(quote)=>{
        console.log(quote);
    }
    return (

        <QuoteForm onAddQuote={addNewQuoteHandler} />
    );
}

export default NewQuote;