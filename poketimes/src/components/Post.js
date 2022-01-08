// import axios from "axios";
// import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Post = ({ deletePost }, props) => {
    console.log(props.match)


    const navigate = useNavigate();
    // const [post, setPost] = useState({});
    const { post_id } = useParams();
    const post = useSelector((state) => state.posts.find(post => post.id === post_id));
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
    //         .then(
    //             res => {
    //                 setPost(res.data);
    //             }
    //         )
    //     console.log('effect')
    // }, [])

    const handleClick = () => {
        deletePost(post.id);
        navigate('/');
    }


    return (

        <div className="container" >
            {
                post ? (
                    <div className="post">
                        <h4 className="center">{post.title}</h4>
                        <p>{post.body}</p>
                        <div className="center">
                            <button className="btn grey" onClick={handleClick}>
                                Delete Post
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="center">Loading post...</div>
                )
            }
        </div>
    );
}

// const mapStateToProps = (state, props) => {
//     // const { post_id } = useParams();

//     console.log(props.match)
//     return {
//         post: state.posts.find(post => post.id == 3)

//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(null, mapDispatchToProps)(Post);