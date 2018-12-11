import { connect } from 'react-redux';
import CheckIn from './CheckIn';

function mapStateToProps(store) {
    return {
        clientId: store.CheckIn.clientId,
        clientData: store.CheckIn.clientData
    }
}

export default connect(mapStateToProps)(CheckIn);