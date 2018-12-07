import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className='cards'>
                <div className='card'>
                    <h1>Name</h1>
                    <label className='label'>picture</label>
                    <p>Description</p>
                    <button>like me</button>
                </div>
            </div>
        )
    }
}

export default Profile;