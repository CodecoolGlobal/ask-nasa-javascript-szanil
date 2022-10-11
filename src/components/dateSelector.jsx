import { useContext, useState } from "react";
import DatePicker from 'react-date-picker';
import DateContext from "../context/dateContext.jsx";

const DateSelector = () => {
    const { date } = useContext(DateContext);
    const { setDate } = useContext(DateContext);
    return (
        <div>
            <p>Select a date:</p>
            <DatePicker
                clearIcon={null}
                minDate={new Date("2000-01-01")}
                maxDate={new Date(Date.now())}
                onChange={(newDate) => {
                    setDate(newDate);
                }}
                value={date} />
        </div>
    )
}

export default DateSelector