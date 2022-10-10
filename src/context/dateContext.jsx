import { createContext } from "react";

const DateContext = createContext({
    date: new Date(Date.now()),
    setDate: () => { }
});

export default DateContext