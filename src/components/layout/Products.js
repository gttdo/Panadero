import React, {Component} from 'react';
import sourdough from '../../assets/images/sourdough.jpg';
import whiteBread from '../../assets/images/white-bread.jpg';
import flatBread from '../../assets/images/flat-bread.jpg';

class Products extends Component {
    render(){
        return(
            <div id="products" className="products">
                <div className="products--item">
                    <div className="products--item-image">
                        <img className="products--item-image-pic" src={sourdough}/>
                    </div>
                    <div className="products--desc">
                        <h3 className="products--desc-name">Sourdough</h3>
                        <p className="products--desc-text">
                            This is my depressed stance. When you're depressed, it makes a lot of difference how you stand. The worst thing you can do is straighten up and hold your head high because then you'll start to feel better.
                        </p>
                    </div>
                </div>

                <div className="products--item">
                    <div className="products--item-image">
                        <img className="products--item-image-pic" src={whiteBread}/>
                    </div>
                    <div className="products--desc">
                        <h3 className="products--desc-name">White Bread</h3>
                        <p className="products--desc-text">
                        t was a dark and stormy night. Suddenly, a shot rang out! A door slammed. The maid screamed. Suddenly, a pirate ship appeared on the horizon!
                        </p>
                    </div>
                </div>
                
                <div className="products--item">
                    <div className="products--item-image">
                        <img className="products--item-image-pic" src={flatBread}/>
                    </div>
                    <div className="products--desc">
                        <h3 className="products--desc-name">Flat Bread</h3>
                        <p className="products--desc-text">
                            This is my depressed stance. When you're depressed, it makes a lot of difference how you stand. The worst thing you can do is straighten up and hold your head high because then you'll start to feel better.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;