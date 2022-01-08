import { useState } from "react";
import { connect } from "react-redux";
import { signIn } from '../../store/actions/authActions'
import { Navigate } from "react-router-dom";

const SignIn = ({ signIn, authError, auth }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const state = { email, password };
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(state);
    }
    if (auth.uid) return <Navigate to="/" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        {authError ?
                            <p>{authError}</p>
                            : null
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);