import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBLogs] = useState([])
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBLogs(data));
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;