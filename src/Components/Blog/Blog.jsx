import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks}) => {
    console.log(blog);
    const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-7' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                    <img className=' w-14 ' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={ () => handleAddToBookmarks(blog)} className='ml-2 text-2xl text-red-600 '><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-2xl">Title:  {title }</h1>
            <p className='flex gap-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func

}

export default Blog;