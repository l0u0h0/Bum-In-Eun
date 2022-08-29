import "./App.scss";
import "./css/Main.scss";
import "./css/Header.scss";
import "./css/Banner.scss";
import "./css/Search.scss";
import "./css/Crime.scss";
import "./css/Dictionary.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/Maincomponent";
import SearchComponent from "./components/SearchComponent";
import Crimemain from "./components/crime/CrimemainComponent";
import Crimeresult from "./components/crime/CrimeresultComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crimedetail from "./components/crime/CrimedetailComponent";
import DictionaryMain from "./components/dictionary/DicionarymainComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/crime" element={<Crimemain />} />
          <Route path="/crimeresult" element={<Crimeresult />} />
          <Route path="/crimedetail" element={<Crimedetail />} />
          <Route path="/dictionary" element={<DictionaryMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
