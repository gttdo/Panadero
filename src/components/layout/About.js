import React, {Component} from 'react';
import hat from '../../assets/images/hat.jpg';

class About extends Component {
    render(){
        return(
            <div id="story" className="hero--story">
                <h2 className="hero--story-header">Welcome To Panadero</h2>
                <figure className="hero--story-figure">
                    <img className="hero--story-image" src={hat} alt="hat"/>
      </figure>
                <p className="hero--story-text"> 
                You have been crabby for one thousand days in a row! You have just set an all-time record! I knew you could do it! See? I've been keeping track on this calendar since Tuesday, December 8th 1959! Remember that day? You threw an apple core at me! Since then you have gone one thousand fays without failing once to be crabby! Let me shake your hand again! I'd also like to present you with this specially inscribed scroll commemorating this historical event. Again, may I say "Congratulations!" You are an inspiration to all crabby people in this world!  
                </p>
            </div>
        )
    }
}

export default About;