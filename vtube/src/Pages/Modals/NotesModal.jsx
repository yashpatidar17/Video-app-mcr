import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./modal.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { videoContext } from "../../Context/VideoContextProvider";
import { v4 as uuid } from "uuid";

export const Modal = ({ isOpen, onClose }) => {
  const {
    notes,
    setNotes,

    setNotesStore,
  } = useContext(videoContext);

  const notesSaveHandler = () => {
    setNotesStore((prev) => [...prev, { id: uuid(), note: notes }]);
  };
  if (!isOpen) return null;

  return (
    <div className="modalNotes">
      <CloseRoundedIcon className="cross" onClick={onClose} />
      <input
        placeholder="New Notes"
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={notesSaveHandler}> Add New Note</button>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
