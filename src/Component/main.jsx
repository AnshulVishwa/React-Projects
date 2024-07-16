import React, { useState, useEffect } from 'react';

export default function Main() {
    const todaysDate = new Date();
    const [newdate, setnewDate] = useState(new Date());
    const [dateArray, setDateArray] = useState([]);
    const [Events, setEvents] = useState([]);
    const [whichEvent, setwhichEvent] = useState("");
    const [selectedDate, setSelectedDate] = useState(newdate.getDate());
    const [showClickOption, setshowClickOption] = useState(false);
    const [ showInput , setshowInput ] = useState(false)
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = monthNames[newdate.getMonth()];

    function leftArrow() {
        setnewDate(new Date(newdate.getFullYear(), newdate.getMonth() - 1, newdate.getDate()));
    }

    function rightArrow() {
        setnewDate(new Date(newdate.getFullYear(), newdate.getMonth() + 1, newdate.getDate()));
    }

    useEffect(() => {
        const newDate = new Date(newdate.getFullYear(), newdate.getMonth() + 1, 0).getDate();
        const arr = [];
        for (let i = 1; i <= newDate; i++) {
            let gap = 0;
            const a = new Date(newdate.getFullYear(), newdate.getMonth(), i);
            if (i === 1) {
                gap = a.getDay();
                for (let j = 0; j < gap; j++) {
                    arr.push("");
                }
            }
            arr.push(`${i}:${a.getMonth()}:${a.getDay()}`);
        }
        setDateArray(arr);
    }, [newdate]);

    function handleDateClick(nowDate) {
        setSelectedDate(nowDate);
    }

    function buttonClicked(eve) {
        setshowClickOption(false);
        setshowInput( true )
        setwhichEvent(eve);
    }

    function saveEvent() {
        setEvents([...Events, { date: selectedDate, event: whichEvent }]);
        setshowInput( false )
        setwhichEvent("");
    }

    useEffect( ()=>{
        setshowClickOption(false);
        setshowInput( false )
    } , [selectedDate] )

    return (
        <div className='mainContent'>
            <div className='upperSection'>
                <span className='leftArrow' onClick={leftArrow}>
                    <i className="fa-solid fa-chevron-left"></i>
                </span>
                <div className='mid'>
                    <span className="todaysDate">{selectedDate} </span>
                    <span className="todaysMonth" >{month} </span>
                    <span className="todaysYear">{newdate.getFullYear()} </span>
                </div>
                <span className='rightArrow' onClick={rightArrow}>
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>
            <div className="middleSection">
                <div className="dates">
                    {days.map((d, index) => (
                        <span key={index} className='Days'>{d}</span>
                    ))}
                    {dateArray.map((v, index) => {
                        const [date, month , day] = v.split(":");
                        return (
                            <span key={index} className={(date == todaysDate.getDate() && month == todaysDate.getMonth()) ? `allDate today ${ day == 0 ? "yes" : "no" }` : `allDate ${ day == 0 ? "yes" : "no" }`} id={(date == selectedDate) ? "color" : "normal"} onClick={() => handleDateClick(date)}>
                                {date}
                                {console.log(date,day,month)}
                                {Events.filter(event => event.date == date).map((event, i) => (
                                    <span key={i} style={{ color: "chocolate" }}>.</span>
                                ))}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="bottomSection">
                <div className="tags">
                    <span>Tags & Events</span>
                    <span className='addEvent' onClick={() => setshowClickOption(!showClickOption)}>Add Event +</span>
                </div>
                <div className="events">
                <div className='availableEvents'>
                        {Events.filter(event => event.date == selectedDate).length > 0 ? (
                            Events.filter(event => event.date == selectedDate).map((v, i) => (
                                <span key={i}>{v.event} on {v.date}</span>
                            ))
                        ) : (
                            <span>No Available Events</span>
                        )}
                    </div>
                        <div className='Options' style={{ display: showClickOption ? "flex" : "none" }}>
                            <button onClick={() => buttonClicked("Birthday")} className='options Birthday'>Birthday</button>
                            <button onClick={() => buttonClicked("Anniversary")} className='options Anniversary'>Anniversary</button>
                            <button onClick={() => buttonClicked("Meeting")} className='options Meeting'>Meeting</button>
                            <button onClick={() => buttonClicked("Other")} className='options Other'>Other</button>
                        </div>
                        <div style={ { display : (showInput) ? "flex" : "none" } } className='showInput'>
                            <input
                                className='nameInput options'
                                type="text"
                                value={whichEvent}
                                onChange={(e) => setwhichEvent(e.target.value)}
                                placeholder='Enter Your Event'
                            />
                            <button className='options' onClick={saveEvent}>Save Event</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}
