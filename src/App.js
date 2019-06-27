import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Nav는 항상 이자리에 있어야하므로 고정 */}
        <Nav />
        {/* 페이지가 전환되는 컴포넌트들은 Switch로 묶는다 */}
        <Switch>
          {/* Route의 path는 주소지정이며 exact는 /가 사용될 경우 혼란 방지위해 component는 위에서 import한 컴포넌트 */}
          <Route path="/" exact component ={Home} />
          <Route path="/about" component ={About} />
          <Route path="/shop" exact component ={Shop} />
          {/* shop에서 항목 클릭 시 shop/ ~~ 로 해당하는 주소로 보낸다 */}
          <Route path ="/shop/:id" component ={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}
//디폴트
const Home = () =>(
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;
