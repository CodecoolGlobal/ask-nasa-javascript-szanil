import { NasaAPI } from "../services/nasaApi.js";
import { useState, useEffect, useContext } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import DateContext from "../context/dateContext.jsx";

const NasaPicture = () => {
    const [pictureData, setPictureData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { date } = useContext(DateContext);

}

export default NasaPicture;