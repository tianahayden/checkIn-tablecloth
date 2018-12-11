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
        dispatch(checkInOut(clientId))
    }


    render() {
        const { clientData } = this.props;
        if (clientData) {
            if (clientData.currentlyCheckedIn == true) {
                return (
                    <div>
                        <h1>Checked In</h1>
                    </div>
                )
            }
            else {
                <h1>Yo</h1>
            }
        }
        else {
            return (
                <div>
                    <label>Enter Username</label>
                    <input onChange={this.handleUsername} />
                    <button onClick={this.checkInOut}>Enter</button>
                </div>
            )
        }
    }
}

export default CheckIn;