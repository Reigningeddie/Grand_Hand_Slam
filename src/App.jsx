import {HashRouter} from 'react-router-dom'
import Home from './components/home'
import Menu from './components/menu'
import Banner from './components/banner'
import Nav from './components/nav'

function App() {
  return (
  <HashRouter>
    <Banner />
    <Menu />
    <Home />
    <Nav />
  </HashRouter>
  );
}

export default App;
