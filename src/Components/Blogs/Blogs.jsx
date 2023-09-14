import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBLogs] = useState([])
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBLogs(data));
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length} </h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}>
                    </Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func
}

export default Blogs;