import { useEffect, useState } from 'react'

export default function useDate(minutes) {
    const [dateTime, setDateTime] = useState({});

    useEffect(()=>{
        const date = new Date();
        const dateTime={
            date : date.toLocaleDateString().replaceAll('/','-'),
            time: date.toLocaleString([],{hour:'2-digit', minute:'2-digit'})
        }
        setDateTime(dateTime);
    },[minutes])

  return  dateTime;
}
