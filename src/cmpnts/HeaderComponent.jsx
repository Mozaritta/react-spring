import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                        <div><a href= "http://google.com" className= "navbar-brand">Employee Maagement App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;