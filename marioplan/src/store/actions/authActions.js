import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

export const signIn = (credentials) => {
    return (dispatch, getState, { getAuth }) => {
        // make async call to database
        signInWithEmailAndPassword(
            getAuth(),
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
};

export const signOutt = () => {
    return (dispatch, getState, { getAuth }) => {
        // make async call to database
        signOut(
            getAuth()
        ).then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
};


export const signUp = (newUser) => {
    return (dispatch, getState, { getAuth, getFirestore }) => {
        // make async call to database
        createUserWithEmailAndPassword(
            getAuth(),
            newUser.email,
            newUser.password
        ).then((resp) => {
            return setDoc(doc(getFirestore(), "users", resp.user.uid), {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        });
    }
};