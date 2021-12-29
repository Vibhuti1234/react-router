
import React from "react";
import {
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
const DUMMY_QUOTES=[
  {id:"q1",author:"George Martin",text:"A song of ice and fire"},
  {id:"q2",author:"George Martin",text:"A song of ice and fire"},
  {id:"q3",author:"George Martin",text:"A song of ice and fire"}
  ];
const QuoteDetail=()=>{

    const params = useParams();
    
    const quote=DUMMY_QUOTES.find(quote => quote.id ===params.quoteId);
    if(!quote){
      return (<NoQuotesFound/>);
    }
    return (


        <><h1>Quote Detail Page</h1><p>{params.quoteId}</p>
        <HighlightedQuote text={quote.text} author={quote.author}/>
         <Switch>
        <Route path={`quotes/${params.quoteId}/comments`} >
          <Comments />
        </Route>
      </Switch>
        </>
    );
}

export default QuoteDetail;