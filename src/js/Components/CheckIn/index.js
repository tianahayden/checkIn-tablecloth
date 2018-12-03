import { connect } from 'react-redux';
import CheckIn from './CheckIn';

function mapStateToProps(store) {
    return {
        clientId: store.CheckIn.clientId
    }
}

export default connect(mapStateToProps)(CheckIn);