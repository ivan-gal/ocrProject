import './styles/App.scss';
import { Route, Switch, useLocation } from 'react-router';
import OcrComponent from './Components/OcrComponent';
import Navbar from './Components/Navbar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/about" exact></Route>
        <Route path="/api" exact></Route>
        <Route path="/" exact>
          <OcrComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
