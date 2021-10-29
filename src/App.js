import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import MyOrders from './components/MyOders/MyOders';
import ManageAllOrders from './components/ManageAllOders/ManageAllOders';
import AddNewServices from './components/AddNewService/AddNewServices';
import Login from './components/Login/Login';
import AuthProvider from './utilities/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/myOrders/:id">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/addNewServices">
              <AddNewServices></AddNewServices>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter >
      </AuthProvider>
    </div>
  );
}

export default App;
