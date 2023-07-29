import { useContext } from "react";
import { videoContext } from "../../Context/VideoContextProvider";
import { Link } from "react-router-dom";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";

export const WatchLater = () => {
  const { watchLater,watchLaterDeleteHandler } = useContext(videoContext);
  return (
    <div>
      <h1>Watch Later</h1>
      <div className="category-container">
        {watchLater.length === 0 ? (
          <p>Watch Later is empty</p>
        ) : (
          watchLater?.map((item) => (
            <div key={item._id} className="video-card">
            <div className="image-icon">
              <Link to={`/video/${item._id}`}>
                <img
                  src={item.thumbnail}
                  alt="thumb"
                  className="video-thumb-explore"
                />
              </Link>
              <WatchLaterRoundedIcon
                className="watchlaterIcon"
                onClick={() => watchLaterDeleteHandler(item)}
              />
            </div>
              <div>
                <p className="video-title">{item.title}</p>
                <p>{item.category}</p>
                <div>
                  <span>{item.views} Views </span>
                  <span> | </span>
                  <span>{item.creator}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
