import { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateProject = ({ createProject, auth }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const state = { title, content };
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createProject(state);
        navigate("/");

    }

    if (!auth.uid) return <Navigate to="/signin" />

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        id="title"
                        onChange={e => setTitle(e.target.value)}
                        value={title} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content"

                        className="materialize-textarea"
                        onChange={e => setContent(e.target.value)}
                        value={content} >

                    </textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);