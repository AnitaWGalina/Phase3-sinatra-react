import "./App.css";
import RegistrationForm from "./Registration"
import Login from "./Login";
import Profile from "./Profile";
import { ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import UserForm from "./Form";


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
           </Route>
           <Route exact path="/Profile">
            <Profile />
            </Route>
           <Route exact path="/UserForm">
            <UserForm />
            </Route>
          </div>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
