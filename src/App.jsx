import {HashRouter} from 'react-router-dom'
import Home from './components/home'
import Nav from './components/nav'
import Banner from './components/banner'

function App() {
  return (
  <HashRouter>
    <Banner />
    <Nav />
    <Home />
  </HashRouter>
  );
}

export default App;
