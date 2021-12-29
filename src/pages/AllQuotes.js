import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES=[
{id:"q1",author:"George Martin",text:"A song of ice and fire"},
{id:"q2",author:"George Martin",text:"A song of ice and fire"},
{id:"q3",author:"George Martin",text:"A song of ice and fire"}
];
const AllQuotes=()=>{
    return (

       <QuoteList quotes={DUMMY_QUOTES} />
    );
}

export default AllQuotes;