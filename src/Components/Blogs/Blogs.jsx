import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmarks}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json() )
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 ">
          
          {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}

          <div className="mt-14">
          {
            blogs.map(blog => <Blog key={blog.id} handleAddToBookmarks= {handleAddToBookmarks} blog = {blog}></Blog>)
          }
          </div>
        </div>
    );
};
Blogs.propTypes = {
  handleAddToBookmarks : PropTypes.func
}
export default Blogs;