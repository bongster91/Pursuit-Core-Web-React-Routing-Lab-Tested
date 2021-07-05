import "./App.css";
import { Link, Route, Switch} from 'react-router-dom';
import Dogs from './Dogs';
import Cats from './Cats';
import Home from './Home';

const NotFound = () => {
  return <h1>404: Not Found</h1>;
};

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/cat' component={Cats} />
        <Route exact path='/dog' component={Dogs} />
        <Route exact path='/' component={Home} />
        <Route render={() => <h1>404: Nothing here</h1>} />
      </Switch>
    </div>
  );
};

export default App;
