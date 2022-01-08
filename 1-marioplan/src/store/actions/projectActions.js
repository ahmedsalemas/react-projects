import { addDoc, collection } from "firebase/firestore";

export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        addDoc(collection(getFirestore(), "projects"), {
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    }
};