import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Menu from './components/menu'
import Banner from './components/banner'
import Nav from './components/nav'
import LeaderBoard from './components/leaderBoard'


function App() {
  return (
  <div className='app'>
    <Banner />
    <Menu />
    <Home />
    <Routes>
      <Route path='/' element={<Nav />} />
      <Route path='/leader' element={<LeaderBoard />} />
    </Routes>


  </div>
  );
}

export default App;
