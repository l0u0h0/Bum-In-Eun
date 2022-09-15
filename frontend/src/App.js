import "./App.scss";
import "./css/Main.scss";
import "./css/Header.scss";
import "./css/Banner.scss";
import "./css/Search.scss";
import "./css/Crime.scss";
import "./css/Dictionary.scss";
import "./css/Statistic.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history } from "./redux/store";
import CrimeContainer from "./container/CrimeContainer";
import DictionaryContainer from "./container/DictionaryContainer";
import StatisticContainer from "./container/StatisticContainer";
import MainContainer from "./container/MainContainer";
import SearchContainer from "./container/SearchContainer";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes>
          {/* MAIN */}
          <Route path="/" element={<MainContainer />} />
          {/* SEARCH */}
          <Route path="/search" element={<SearchContainer />} />
          {/* CRIME */}
          <Route path="/crime" element={<CrimeContainer />} />
          <Route path="/crime/result" element={<CrimeContainer />} />
          <Route path="/crime/detail" element={<CrimeContainer />} />
          {/* DICTIONARY */}
          <Route path="/dictionary" element={<DictionaryContainer />} />
          <Route path="/dictionary/detail" element={<DictionaryContainer />} />
          {/* STATIC */}
          <Route path="/statistic" element={<StatisticContainer />} />
          <Route path="/statistic/detail" element={<StatisticContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
