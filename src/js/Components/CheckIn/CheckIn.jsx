import React from 'react';
// import { Link } from 'react-router-dom'
import { updateUsername, checkInOut } from './actions';

class CheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.checkInOut = this.checkInOut.bind(this);
    }

    handleUsername(e) {
        const { dispatch } = this.props;
        dispatch(updateUsername(e.target.value))
    }

    checkInOut(e) {
        const { dispatch, clientId } = this.props;
        console.log(clientId)
        console.log('in button event')
        dispatch(checkInOut(clientId))
    }


    render() {
        return (
            <div>
                <label>Enter Username</label>
                <input onChange={this.handleUsername}/>
                <button onClick={this.checkInOut}>Enter</button>
            </div>
        )
    }
}

export default CheckIn;