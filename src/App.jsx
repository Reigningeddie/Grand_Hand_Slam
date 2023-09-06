import {HashRouter} from 'react-router-dom'
import Home from './components/home'
import Nav from './components/nav'

function App() {
  return (
  <HashRouter>
    <Nav />
    <Home />
  </HashRouter>
  );
}

export default App;
