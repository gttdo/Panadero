import React, {Component} from 'react';

//Styling
// import './App.css';
import './css/style.css';

//Assets
// import whiteBread from './assets/images/white-bread.jpg';
// import flatBread from './assets/images/flat-bread.jpg';
// import sourdough from './assets/images/sourdough.jpg';

//Layout
import Navigation from './components/layout/Navigation';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import Products from './components/layout/Products';

class App extends Component {
  render(){
   // console.log(this.state.items);
    return (
      <div className="App container">
        <Navigation/>
        <Hero/>
        <About/>
        <Products/>
        <div id="contact" className="contact">Contact Us</div>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

export default App;
