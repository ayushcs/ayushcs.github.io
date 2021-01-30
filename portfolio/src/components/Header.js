import React from 'react';
import logo from '../images/ayush.jpg';
import Typed from 'typed.js';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        var typed = new Typed('.typingelement', {
            strings: ["Developer & Designer", "Love to build the applications with JavaScript."],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            showCursor: false,
        });
    }

    render() { 
        return ( 
            <div className="row position-relative">
                <div className="col-12 p-0">
                    <div className="position-absolute text-white" style={{top:'150px',left: '100px'}}>
                        <h1>Hi, I'm Ayush Srivastava.</h1>
                        <h2 className="typingelement"></h2>
                    </div>
                    <div className="headerimg" style={{backgroundImage: `url(${logo})`, height: '600px'}} ></div>
                </div>
            </div>
        );
    }
}
 
export default Header;