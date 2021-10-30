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
import PrivateRoute from './utilities/PrivateRoute';
import Footer from './components/Footer/Footer';

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

            <PrivateRoute path="/myOrders/:id">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/manageOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <PrivateRoute path="/addNewServices">
              <AddNewServices></AddNewServices>
            </PrivateRoute>

            <Route path="/Login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter >
      </AuthProvider>
    </div>
  );
}

export default App;
