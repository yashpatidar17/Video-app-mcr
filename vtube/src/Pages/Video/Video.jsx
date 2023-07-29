import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { videoContext } from "../../Context/VideoContextProvider";
import "./video.css";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import { Modal } from "../Modals/NotesModal";
import { watchStatus } from "../../Utils/watchStatus";

export const Video = () => {
  const { ID } = useParams();
  const { video, watchLaterHandler, notesStore, setNotesStore, watchLater,watchLaterDeleteHandler } =
    useContext(videoContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const currentVideo = video.find((item) => item._id === parseInt(ID));

  const handlerOpenModal = () => {
    setModalOpen(true);
  };

  const handlerCloseModal = () => {
    setModalOpen(false);
  };

  const noteDeleteHandler = (item) => {
    setNotesStore((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="video-container">
      <div>
        <iframe width="700" height="315" src={currentVideo?.src} />
        <div>
          <div className="video-one">
            <div>
              <p>{currentVideo.title}</p>
            </div>
            <div className="icon-container">
              {watchStatus(watchLater, currentVideo) ? (
                <WatchLaterRoundedIcon onClick={()=> watchLaterDeleteHandler(currentVideo)}/>
              ) : (
                <WatchLaterOutlinedIcon
                  onClick={() => watchLaterHandler(currentVideo)}
                />
              )}

              <PlaylistAddRoundedIcon />
              <NotesRoundedIcon onClick={handlerOpenModal} />
              <Modal
                className="Modal-video"
                isOpen={isModalOpen}
                onClose={handlerCloseModal}
              />
            </div>
          </div>
        </div>
        <hr />

        <h2>My Notes</h2>
        <div>
          {notesStore.map((item) => (
            <div key={item.id}>
              <div className="notes-container">
                <p>{item.note}</p>
                <div>
                  <DeleteRoundedIcon onClick={() => noteDeleteHandler(item)} />
                  <EditRoundedIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
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
