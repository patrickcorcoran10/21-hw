import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home.js'
import Saved from "./pages/Saved.js"


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/saved" component={Saved}/>
    </Switch>
    </Router>
  )
  
}

export default App;
