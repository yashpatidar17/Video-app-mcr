import "./sidebar.css";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/">
          <li>
            <CottageRoundedIcon /> Home
          </li>
        </Link>
        <Link to="/explore">
          <li>
            <ExploreRoundedIcon /> Explore
          </li>
        </Link>

        <li>
          <Link to="/playlist">
            <PlaylistAddCheckRoundedIcon /> Playlists
          </Link>
        </li>
        <Link to="/watchlater">
          <li>
            <WatchLaterRoundedIcon /> Watch Later
          </li>
        </Link>
      </ul>
    </div>
  );
};
