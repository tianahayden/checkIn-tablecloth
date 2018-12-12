import React from 'react';
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
                        <h1>Checked In As {clientData.firstName} {clientData.lastName}</h1>
                        <div className='checkIn'>
                            <a href={`https://storytentvisit.typeform.com/to/gu1NmX?clientid=${clientData.tableclothClientId}`} target='_blank'>Feeling Survey</a>
                        </div>
                        <div className='readingTests'>
                            <h3>Reading Tests</h3>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=Pre-K&word1=Where&word2=One&word3=See&word4=Play&word5=For`} target='_blank'>Pre K</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=K&word1=That&word2=Are&word3=Get&word4=Like&word5=Soon`} target='_blank'>K</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=1st&word1=Old&word2=Put&word3=Thank&word4=Of&word5=Every`} target='_blank'>1st</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=2nd&word1=Before&word2=Those&word3=Sing&word4=Use&word5=Best`} target='_blank'>2nd</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=3rd&word1=Myself&word2=Light&word3=six&word4=Laugh&word5=togehter`} target='_blank'>3rd</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=4th&word1=given&word2=known&word3=drawing&word4=allow&word5=itself`} target='_blank'>4th</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=5th&word1=heard&word2=post&word3=tub&word4=other&word5=skirt`} target='_blank'>5th</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=6th&word1=circumference&word2=past&word3=addressed&word4=improbable&word5=impatient`} target='_blank'>6th</a>
                            <a href={`https://storytentvisit.typeform.com/to/g4XfO7?clientid=${clientData.tableclothClientId}&gradelevel=7th&word1=dinner&word2=spend&word3=match&word4=throughout&word5=chief`} target='_blank'>7th</a>
                        </div>
                        <div className='checkOut'>
                            <a href={`https://storytentvisit.typeform.com/to/rRzNmu?clientid=${clientData.tableclothClientId}`} target='_blank' onClick={this.checkInOut}>Check Out</a>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div className='login'>
                <label>Enter Username</label>
                <input onChange={this.handleUsername} />
                <button className='button' onClick={this.checkInOut}>Enter</button>
            </div>
        )
    }
}

export default CheckIn;