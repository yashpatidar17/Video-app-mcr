import { useContext } from "react";
import { videoContext } from "../../Context/VideoContextProvider";
import { Link } from "react-router-dom";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

import "./explore.css";
import { watchStatus } from "../../Utils/watchStatus";
export const Explore = () => {
  const { searchHandler, exploreData, watchLaterHandler,watchLater,watchLaterDeleteHandler } =
    useContext(videoContext);
  return (
    <div>
      <h1>Explore</h1>
      <input
        placeholder="search Video By Title"
        className="searchField"
        onChange={(e) => searchHandler(e)}
      />
      <div className="explore-card">
        {exploreData.map((item) => (
          <div key={item._id}>
            <div className="image-icon">
              <Link to={`/video/${item._id}`}>
                <img
                  src={item.thumbnail}
                  alt="thumb"
                  className="video-thumb-explore"
                />
              </Link>
              {watchStatus(watchLater, item) ? (
                <WatchLaterRoundedIcon
                  className="watchlaterIcon"
                  onClick={() => watchLaterDeleteHandler(item)}
                />
              ) : (
                <WatchLaterOutlinedIcon
                  className="watchlaterIcon"
                  onClick={() => watchLaterHandler(item)}
                />
              )}
            </div>
            <div>
              <p className="video-title">{item.title}</p>
              <p>{item.category}</p>
              <div>
                <span className="video-title">{item.views} Views </span>
                <span className="video-title"> | </span>
                <span className="video-title">{item.creator}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
