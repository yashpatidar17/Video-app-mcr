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
        <Link to="/" className="sidebar-Link">
          <li className="list-unit">
            <CottageRoundedIcon />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/explore" className="sidebar-Link">
          <li className="list-unit">
            <ExploreRoundedIcon />
            <p>Explore</p>
          </li>
        </Link>

        <Link to="/playlist" className="sidebar-Link">
          <li className="list-unit">
            <PlaylistAddCheckRoundedIcon />
            <p>Playlists</p>
          </li>
        </Link>

        <Link to="/watchlater" className="sidebar-Link">
          <li className="list-unit">
            <WatchLaterRoundedIcon />
            <p>Watch Later</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};
