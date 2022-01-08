import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOutt } from '../../store/actions/authActions'
const SignedInLinks = ({ signOut, profile }) => {
    return (
        <ul className="right">
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li><a onClick={signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>

        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOutt())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);