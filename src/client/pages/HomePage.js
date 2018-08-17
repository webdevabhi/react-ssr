import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>I'm the <b><i>BEST</i></b> home component</div>
                <button onClick={() => console.log('Hi There !')}>Press Me !</button>
            </div>
        );
    }
}

export default {
    component: Home
};