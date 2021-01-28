import React, {useState} from 'react';
import '../styles/App.css';



export const LandingPage: React.FC = () => {
    const [imageOnPage, setImageOnPage] = useState<string>("https://cdn.pixabay.com/photo/2020/10/02/13/38/sea-5621150_960_720.jpg")
    


    return(
    <>
        <h1>Home</h1>
        <p>
            Welcome to the interactive playground. This application has been designed to act as a central point for just simply
            using tools <i>for the sake of using them</i>. A point of reference on how something has previously been done.
        </p>
        <div>
            <p>Change the value of this input box to the path of any image on the internet. Providing CORS is open, the image will display in the box below...</p>
            <input className="Image-Path-Input" value={imageOnPage} onChange={(e) => { setImageOnPage(e.target.value) }}></input>
            <br/><br/>
            <img src={imageOnPage} style={{width:"300px"}} alt={`Unable to show path of: ${imageOnPage}`}/>
        </div>
    </>
    )
}