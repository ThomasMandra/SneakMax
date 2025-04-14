import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./components/Catalog/Catalog";
import AboutUs from "./components/AboutUs";

import SliderBlock from "./components/SliderBlock";
import OurTeam from "./components/OurTeam";
import Questions from "./components/Questions";
import Contacts from "./components/Contacts";
import FeedBack from "./components/FeedBack";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header className="bcgBlue" style={{ zIndex: "4" }}>
          <div className="container whiteSpace">
            <Header />
          </div>
        </header>
        <main>
          <div className="container whiteSpace " id="catalog">
            <Catalog />
          </div>
          <div className="bcgBlue" id="aboutUs">
            <div className="container whiteSpace">
              <AboutUs />
            </div>
          </div>
          <div className="container whiteSpace" id="sliderBlock">
            <SliderBlock />
          </div>
          <div className="bcgBlue" id="ourTeam">
            <div className="container whiteSpace">
              <OurTeam />
            </div>
          </div>
          <div className="container whiteSpace" id="quest">
            <Questions />
          </div>
          <div className="bcgGray" id="contacts">
            <div className="container whiteSpace">
              <Contacts />
            </div>
          </div>
          <div className="container whiteSpace">
            <FeedBack />
          </div>
        </main>
        <footer>
          <div className="bcgBlackGray">
            <div className="container">
              <Footer />
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
