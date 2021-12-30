import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";


const NewQuote=()=>{
    let history = useHistory();

    const addNewQuoteHandler=(quote)=>{
        console.log(quote);
        history.push('/quotes');
    }
    return (

        <QuoteForm onAddQuote={addNewQuoteHandler} />
    );
}

export default NewQuote;