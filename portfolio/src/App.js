import React from 'react';
import './App.css';
import Header from './components/Header';


export default class App extends React.Component {

    constructor (props) {
      super (props)
    }

    render () {
        return (
            <div className="container-fluid">
                <Header/>
            </div>
        )
    }
}
