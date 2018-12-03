import React from 'react';
// import { Link } from 'react-router-dom'
import { updateUsername } from './actions';

class CheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(e) {
        const { dispatch } = this.props;
        dispatch(updateUsername(e.target.value))
    }


    render() {
        return (
            <div>
                <label>Enter Username</label>
                <input onChange={this.handleUsername}/>
                <button>Enter</button>
            </div>
        )
    }
}

export default CheckIn;