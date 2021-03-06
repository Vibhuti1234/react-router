import { BrowserRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
<Layout>
<Switch>
      <Route exact path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route exact path="/quotes">
        <AllQuotes />
      </Route>
      <Route exact path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>

    </Switch>
</Layout>




  );
}

export default App;
