import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { videoContext } from "../../Context/VideoContextProvider";
import "./videolisting.css";
export const VideoListing = () => {
  const { cat } = useParams();
  const { video } = useContext(videoContext);
  const videos = video.filter((item) => item.category === cat);
  console.log(videos);
  return (
    <div>
      <h1>{cat}</h1>
      <div className="category-container">
        {videos.map((item) => (
          <div key={item._id} className="video-card">
            <div>
              <Link to={`/video/${item._id}`}>
                <img src={item.thumbnail} alt="thumb" className="video-thumb" />
              </Link>
            </div>
            <div>
              <p className="video-title">{item.title}</p>
              <p>{item.category}</p>
              <div>
                <span>{item.views}  Views </span>
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
