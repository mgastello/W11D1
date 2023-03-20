import Form from "./form";
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello From App</h1>
      <Link to='/form'>Form</Link>

      <Switch>
        <Route path='/form' component={Form} />
      </Switch>
    </div>
  );
}

export default App;
