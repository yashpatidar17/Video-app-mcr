import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Home/Home'
import { Sidebar } from './sidebar/Sidebar'
import { VideoListing } from './Pages/VideoListing/videoListing'
import { Video } from './Pages/Video/Video'
import { WatchLater } from './Pages/WatchLater/WatchLater'
import { Explore } from './Pages/Explore/Explore'
import { PlayList } from './Pages/Playlist/Playlist'

function App() {
  

  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videolist/:cat" element={<VideoListing/>}/>
        <Route path="/video/:ID" element={<Video/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/playlist" element={<PlayList/>}/>
      </Routes>
    </div>
  )
}

export default App
