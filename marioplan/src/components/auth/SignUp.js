import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { signUp } from '../../store/actions/authActions'
const SignUp = ({ auth, signUp, authError }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const state = { email, password, firstName, lastName }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(state);
    }
    if (auth.uid) return <Navigate to="/" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        id="firstName"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                        id="lastName"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName} />
                </div>
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
                    <button className="btn pink lighten-1 z-depth-0">SIGN UP</button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
