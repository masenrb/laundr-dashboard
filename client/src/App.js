import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Customers from "./components/Users";
import Orders from "./components/Orders";
import Subscriptions from "./components/Subscription";
import { useAuth0 } from '@auth0/auth0-react';
import history from "./utils/history";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <BrowserRouter history={history}>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Dashboard} exact/>
        <Route path="/Customers" component={Customers}/>
        <Route path="/Orders" component={Orders}/>
        <Route path="/Subscriptions" component={Subscriptions}/>
        <Route path="/logout" component={SignOut}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
