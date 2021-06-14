import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { StylesProvider } from '@material-ui/core/styles';

// Components
import Header from './components/header'
import Footer from './components/footer'
import ImageLoader from './components/image-loader'

// Pages
import About from './pages/about'
import Prices from './pages/prices'
import BookNow from './pages/book-now'
import GetYourQuote from './pages/get-your-quote'
import ManAndVan from './pages/man-and-van'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <div className="App">
          <header className="App-header">
            <Header/>
          </header>
          <Switch>
            <Route path="/prices">
              <Prices />
            </Route>
            <Route path="/book-now">
              <BookNow />
            </Route>
            <Route path="/get-your-quote">
              <GetYourQuote />
            </Route>
            <Route path="/man-and-van">
              <ManAndVan />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
          <ImageLoader/>
        </div>
        <Footer/>
      </StylesProvider>
    </Router>
  );
}

export default App;
