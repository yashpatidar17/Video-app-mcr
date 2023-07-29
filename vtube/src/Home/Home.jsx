import { useContext } from "react"
import { videoContext } from "../Context/VideoContextProvider"
import "./home.css"
import { Link } from "react-router-dom"
export const Home = () =>{
    const {category} = useContext(videoContext)
    
    return(
        <div>
            <h2>Categories</h2>
            <div className="category-container">
            {category.map((item)=>(
                <div key={item._id} className="category-card">
                <Link to={`/videolist/${item.category}`}>
                <img src={item.thumbnail} alt="thinb"/>
                </Link>
                    
                    <p>{item.category}</p>
                </div>
            ))}
            </div>
        </div>
    )
}