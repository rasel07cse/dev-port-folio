import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>MD. RAFIUJJAMAN RASEL</b> and I have been working as a web developer for the past year. In that time, I have gained experience in both back-end and front-end development. I have worked on Several Ecommerce Websites. I have also worked on more than fourteen projects, from small, simple websites to large, complex ones. My skills include HTML5, CSS3, Bootstrap, Tailwind, Daisy UI, JavaScript, React, and Nodejs, MongoDB, ExpressJs (MERN). </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;