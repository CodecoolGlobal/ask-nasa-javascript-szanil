import { useContext, useState } from "react";
import DatePicker from 'react-date-picker';
import DateContext from "../context/dateContext.jsx";
import format from 'date-fns/format';

const DateSelector = () => {
    const [dateValue, setDateValue] = useState(new Date(Date.now()));
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
                    setDateValue(newDate);
                    setDate(format(newDate, 'yyyy-MM-dd'));
                }}
                value={dateValue} />
        </div>
    )
}

export default DateSelector