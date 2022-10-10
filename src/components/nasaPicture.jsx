import { NasaAPI } from "../services/nasaApi.js";
import { useState, useEffect, useContext } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import DateContext from "../context/dateContext.jsx";

const NasaPicture = () => {
    const [pictureData, setPictureData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { date } = useContext(DateContext);

    useEffect(() => {
        setLoading(true);
        NasaAPI(date)
            .then((data) => {
                setPictureData(data);
            })
            .finally(() => {
                setLoading(false);
                console.log(pictureData)
            });
    }, [date]);

    return (
        loading ?
            <div className="spinner-container">
                <MoonLoader color='#ffffff'  />
            </div>
            :
            <>
                <div className="title-container">
                    <h1>{pictureData.title}</h1>
                </div>
                <div className="picture-data-container">
                    <div className="response-container">
                        {pictureData.media_type === "image" ? (
                            <img className="response-image" src={pictureData.url} alt={pictureData.title}/>
                        ) : (
                            <iframe className="response-video"
                                src={pictureData.url}
                                title={pictureData.title}
                                frameBorder="0"
                                allowFullScreen
                            />
                        )}
                    </div>
                    <div className="picture-explanation-container">
                        <h3 className="explanation-title">Explanation:</h3>
                        <p className="picture-explanation">{pictureData.explanation}</p>
                    </div>
                    
                </div>
            </>
    )
}

export default NasaPicture;