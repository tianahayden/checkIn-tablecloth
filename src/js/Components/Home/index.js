import { connect } from 'react-redux';
import Home from './Home';

function mapStateToProps(store) {
    return {
        Home: store.Home.Home
    }
}

export default connect(mapStateToProps)(Home);