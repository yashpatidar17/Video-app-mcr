import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { videoContext } from "../../Context/VideoContextProvider";
import "./video.css";
export const Video = () => {
  const { ID } = useParams();
  const { video } = useContext(videoContext);
  const currentVideo = video.find((item) => item._id === parseInt(ID));
  console.log(currentVideo);
  return (
    <div className="video-container">
      <div>
        <iframe width="700" height="315" src={currentVideo?.src} />
        <div>
          <p>{currentVideo.title}</p>
        </div>
        <hr />
      </div>

      <div>
        <p>More Videos:</p>
        <div className="video-main-container">
          {video.map((item) => (
            <div key={item._id} className="moreVideo-container">
              <div>
                <Link to={`/video/${item._id}`}>
                  <img src={item?.thumbnail} className="video-image" />
                </Link>
              </div>
              <div className="video-info">
                <p>{item.title}</p>
                <p>{item.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
