import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_times,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4">
      <img src={cover} alt={`cover picture of title ${title}`} />
      <div className="flex justify-between p-6 ">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p className="text-slate-600">{posted_date}</p>
          </div>
        </div>
        <div className="text-slate-600">
          <span>{reading_times} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="pl-2 text-red-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="text-slate-600">
        {hashtags.map((hash, idx) => (
          <span className="ml-4" key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button className="text-purple-600 font-bold underline"
      onClick={() => handleMarkAsRead(reading_times)}
      >Mark As Read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
