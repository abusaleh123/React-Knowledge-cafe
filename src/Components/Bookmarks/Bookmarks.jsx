import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {

    return (
        <div className="md:1/3  bg-gray-300 ml-4 mt-2 rounded-xl">
            <h2 className="text-3xl text-center">Bookarked Blogs:  {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;