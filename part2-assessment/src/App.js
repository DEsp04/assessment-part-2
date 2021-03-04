import './App.css';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <div className="navLinks">
        <nav>
          <NavLink
            exact
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={"/cat"}
          >
            Cat
          </NavLink>   
          <NavLink
            exact
            to={"/dog"}
          >
            Dog 
          </NavLink>            
        </nav>
      </div>

      <main>
        <Switch>
          <Route exact path={"/"}>
            <Home  />
          </Route>
          <Route exact path={"/cat"}>
            <Cat />
          </Route>
          <Route exact path={"/dog"}>
            <Dog />
          </Route>
        </Switch>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
