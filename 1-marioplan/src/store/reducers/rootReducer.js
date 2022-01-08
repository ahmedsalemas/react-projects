import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,   //sync firebase to store 
    firestore: firestoreReducer  //sync firestore to store 
})
export default rootReducer;