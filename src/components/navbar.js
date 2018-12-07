import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <h1>His-Date-Her!</h1>
                <label className='logo'>logo</label>
                <div className="nav-buttons">
                    <button className="nav-button">nav button</button>
                    <button className="nav-button">nav button</button>
                    <button className="nav-button">nav button</button>
                </div>
            </div>

        )
    }
}

export default Navbar;