import "./App.css";
import RegistrationForm from "./Registration"
import Login from "./Login";
import Profile from "./Profile";
import { ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";




function App() {
 
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/">
              <RegistrationForm />
            </Route>
            <Route exact path="/Login">
              <Login />
              <Profile />
            </Route>
          </div>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
