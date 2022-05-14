import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import CountriesList from './pages/CountriesList/CountriesList';
import CountryDetail from './pages/CountryDetail/CountryDetail';
import './App.scss';
// import Container from './components/layout/Container';

function App() {
  return (

    <Router>
      <Header/>

        <Routes>
          <Route path='/' element={<CountriesList />}></Route>
          <Route path='/countrydetail/:name' element={<CountryDetail />}></Route>
        </Routes>

    </Router>
  );
}

export default App;
