import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


// const HomePage = props => {
//   console.log(props);
//   return (
//     <div>
//     <button onClick={() => props.history.push('/topics')}>Topics</button>
//     <h1>HOME PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = () => {
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//     </div>
//   );
// };

// const TpoicDetail = props => {
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
//     </div>
//   )
// }

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
