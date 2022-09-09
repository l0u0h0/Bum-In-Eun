import "./App.scss";
import "./css/Main.scss";
import "./css/Header.scss";
import "./css/Banner.scss";
import "./css/Search.scss";
import "./css/Crime.scss";
import "./css/Dictionary.scss";
import "./css/Statistic.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/Maincomponent";
import SearchComponent from "./components/SearchComponent";
import Crimemain from "./components/crime/CrimemainComponent";
import Crimeresult from "./components/crime/CrimeresultComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { store, history } from "./redux/store";
import Crimedetail from "./components/crime/CrimedetailComponent";
import DictionaryMain from "./components/dictionary/DicionarymainComponent";
import Dictionarydetail from "./components/dictionary/DictionarydetailComponent";
import Statisticmain from "./components/statistic/StatisticmainComponent";
import Statisticdetail from "./components/statistic/StatisticdetailComponent";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Routes>
            {/* MAIN */}
            <Route path="/" element={<MainComponent />} />
            {/* SEARCH */}
            <Route path="/search" element={<SearchComponent />} />
            {/* CRIME */}
            <Route path="/crime" element={<Crimemain />} />
            <Route path="/crime/result" element={<Crimeresult />} />
            <Route path="/crime/detail" element={<Crimedetail />} />
            {/* DICTIONARY */}
            <Route path="/dictionary" element={<DictionaryMain />} />
            <Route path="/dictionary/detail" element={<Dictionarydetail />} />
            {/* STATIC */}
            <Route path="/statistic" element={<Statisticmain />} />
            <Route path="/statistic/detail" element={<Statisticdetail />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
