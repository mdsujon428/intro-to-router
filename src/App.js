import './App.css';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import About from './components/About/About';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Notfound from './components/Notfound/Notfound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Culture from './Culture/Culture';

function App() {
  return (
    <div className="App">
      <Router>
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            <Home>

            </Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends> </Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail> </FriendDetail>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/about/culture'>
                <Culture></Culture>
          </Route>
          <Route path="*">
            <Notfound> </Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
