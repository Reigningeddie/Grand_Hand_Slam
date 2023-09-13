import {HashRouter} from 'react-router-dom'
import Home from './components/home'
import Menu from './components/menu'
import Banner from './components/banner'

function App() {
  return (
  <HashRouter>
    <Banner />
    <Menu />
    <Home />
  </HashRouter>
  );
}

export default App;
