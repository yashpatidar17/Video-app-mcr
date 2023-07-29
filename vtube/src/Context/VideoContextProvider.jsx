import { createContext, useState } from "react"
import { categories, videos } from "../DB/videoData";

export const videoContext = createContext();
export const VideoContextProvider = ({children}) =>{
    const [category,setCategory] = useState(categories);
    const [video,setVideo] = useState(videos);
    return(
        <div>
            <videoContext.Provider value={{item:4,category,video}}>
                {children}
            </videoContext.Provider>
        </div>
    )
}