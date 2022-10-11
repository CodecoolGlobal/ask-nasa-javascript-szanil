import { useState } from 'react';
import DateSelector from "../components/dateSelector";
import NasaPicture from "../components/nasaPicture.jsx";
import DateContext from '../context/dateContext';
import format from 'date-fns/format';

const Home = () => {
    const [date, setDate] = useState(format(new Date(Date.now()), 'yyyy-MM-dd'))

    return (
        <DateContext.Provider value={{ date, setDate }}>
            <div className="image-container">
                <div className="menu">
                    <p className="menu-text"><h3>Learn about the universe!</h3><br />
                        <div className="menu-explanation">
                            Every day we provide a fresh image or video about the cosmos, with a brief explanation from a professional astronomer.
                        </div>
                    </p>
                    <div className="date-selector">
                        <DateSelector />
                    </div>
                </div>
                <div className="main">
                    <NasaPicture />
                </div>
            </div>
        </DateContext.Provider>
    )
}

export default Home