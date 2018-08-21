import {connect} from 'react-redux';
import Menu from '../components/Menu';


const mapStateToProps = (state) => ({appData: state.appData});

const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;
