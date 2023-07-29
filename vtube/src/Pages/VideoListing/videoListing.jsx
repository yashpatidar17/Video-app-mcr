import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { videoContext } from "../../Context/VideoContextProvider";
import "./videolisting.css";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

export const VideoListing = () => {
  const { cat } = useParams();
  const { video, watchLaterHandler, watchstatus, watchLaterDeleteHandler } =
    useContext(videoContext);
  const videos = video.filter((item) => item.category === cat);
  console.log(videos);
  return (
    <div>
      <h1>{cat}</h1>
      <div className="category-container">
        {videos.map((item) => (
          <div key={item._id} className="video-card">
            <div className="image-icon">
              <Link to={`/video/${item._id}`}>
                <img
                  src={item.thumbnail}
                  alt="thumb"
                  className="video-thumb-explore"
                />
              </Link>
              <WatchLaterOutlinedIcon
                className="watchlaterIcon"
                onClick={() => watchLaterHandler(item)}
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
        ))}
      </div>
    </div>
  );
};
