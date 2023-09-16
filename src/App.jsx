import {BrowserRouter} from 'react-router-dom'
import Home from './components/home'
import Menu from './components/menu'
import Banner from './components/banner'
// import Nav from './components/nav'
import LeaderBoard from './components/leaderBoard'

function App() {
  return (
  <BrowserRouter>
    <Banner />
    <Menu />
    <Home />
    {/* <Nav /> */}
    <LeaderBoard />

  </BrowserRouter>
  );
}

export default App;
