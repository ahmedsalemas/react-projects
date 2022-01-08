import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="content">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <BlogList blogs={blog} title='All Blogs' />}

        </div>
    );
}

export default Home; 