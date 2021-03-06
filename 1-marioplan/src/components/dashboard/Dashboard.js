import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProjectList from "../projects/ProjectList";
import { Navigate } from "react-router-dom";


const Dashboard = ({ projects, auth }) => {




    if (!auth.uid) return <Navigate to="/signin" />


    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] }
    ])
)(Dashboard);
