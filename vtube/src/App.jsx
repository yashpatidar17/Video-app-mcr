import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Home/Home'
import { Sidebar } from './sidebar/Sidebar'
import { VideoListing } from './Pages/VideoListing/videoListing'
import { Video } from './Pages/Video/Video'

function App() {
  

  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videolist/:cat" element={<VideoListing/>}/>
        <Route path="/video/:ID" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
