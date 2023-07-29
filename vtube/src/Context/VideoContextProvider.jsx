import { createContext, useState } from "react";
import { categories, videos } from "../DB/videoData";

export const videoContext = createContext();
export const VideoContextProvider = ({ children }) => {
  const [category, setCategory] = useState(categories);
  const [video, setVideo] = useState(videos);
  const [watchLater, setWatchLater] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState("");
  const [notesStore, setNotesStore] = useState([]);
  const [watchstatus, setWatchStatus] = useState(false);

  const watchLaterHandler = (item) => {
    setWatchLater((prev) => [...prev, item]);
    setWatchStatus(true);
    console.log("Watch");
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchOperation = () => {
    let newVideo = [...video];

    if (search.length > 0) {
      return (newVideo = newVideo.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ));
    }

    return newVideo;
  };
  const watchLaterDeleteHandler = (item) => {
    setWatchLater((prev) => prev.filter((i) => i._id !== item._id));
    setWatchStatus(false);
    console.log("NoWatch");
  };

  const exploreData = searchOperation();
  return (
    <div>
      <videoContext.Provider
        value={{
          item: 4,
          category,
          video,
          watchLater,
          setWatchLater,
          watchLaterHandler,
          searchHandler,
          exploreData,
          notes,
          setNotes,
          notesStore,
          setNotesStore,
          watchstatus,
          watchLaterDeleteHandler,
        }}
      >
        {children}
      </videoContext.Provider>
    </div>
  );
};
