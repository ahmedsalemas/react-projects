//import axios from "axios";
//import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import pokeball from '../pokeball.png'


const Home = ({ posts }) => {

    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             setPosts(res.data.slice(0, 10))
    //         })


    // }, []);

    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {posts.length ? (
                posts.map(
                    post => {
                        return (
                            <div className="post card" key={post.id}>
                                <img src={pokeball} alt="a pic" />
                                <div className="card-content">
                                    <Link to={`/${post.id}`}>
                                        <span className="card-title red-text">{post.title}</span>
                                        <p>{post.body}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                )
            ) : (
                <div className="center">No posts yet</div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Home);
