import React, {useState} from 'react';
import "./Hotels.scss"
import {Footer, Header, MailList, Navbar, SearchItem} from "components";
import {useLocation} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {format}  from 'date-fns'
import {DateRange} from "react-date-range";

const Hotels = () => {

    const  location = useLocation()

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOption] = useState(location.state.options)
    const [showCalender, setShowCalender] = useState(true)
    const [showOptions, setShowOptions] = useState(false)

  /*  const [date, setDate] = useState([
        {
            startDate: location.state.date ? location.state.date[0].startDate : new Date(),
            endDate: location.state.date ? location.state.date[0].endDate : new Date(),
            key: 'selection'
        }
    ]);
*/




    return (
        <>
            <div>
                <Navbar />
                <Header type="hotels"/>
                <div className="list-container">
                    <div className="list-wrapper">
                        <div className="list-search">
                            <h1 className="list-search__title">Search</h1>
                            <div className="list-search__item">
                                <label>Destination</label>
                                <input type="text" placeholder="Where to?" onChange={(e) => setDestination(e.target.value)} defaultValue={destination}/>
                            </div>
                            <div className="list-search__item">
                                <label>Check-in Date</label>
                                <span onClick={() => setShowCalender(!showCalender)} className="list-search__item-calender">
                                    {`${format(date[0].startDate, 'MM/dd/yyyy')}`} to {`${format(date[0].endDate, 'MM/dd/yyyy')}`}
                                </span>
                                {
                                    showCalender && (
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            minDate={new Date()}
                                        />
                                    )
                                }


                            </div>
                            <div className="list-search__item">
                                 <label>Options</label>
                                <div className="list-item__options">
                                    <div className="list-option__item">
                                    <span className="list-option__item-text">
                                        Min Price <small>Per night</small>
                                    </span>
                                        <input type="number" className="list-option__item-input"/>
                                    </div>
                                    <div className="list-option__item">
                                    <span className="list-option__item-text">
                                        Max Price <small>Per night</small>
                                    </span>
                                        <input type="number" className="list-option__item-input"/>
                                    </div>

                                    <div className="list-option__item">
                                    <span className="list-option__item-text">
                                        Adult
                                    </span>
                                        <input type="number" min={1} className="list-option__item-input" placeholder={options.adult}/>
                                    </div>
                                    <div className="list-option__item">
                                    <span className="list-option__item-text">
                                        Children
                                    </span>
                                        <input  type="number" min={1} className="list-option__item-input" placeholder={options.children}/>
                                    </div>

                                    <div className="list-option__item">
                                    <span className="list-option__item-text">
                                        Room
                                    </span>
                                        <input type="number" min={1} className="list-option__item-input" placeholder={options.roomNumber}/>
                                    </div>

                                </div>


                            </div>
                             <button className="list-search-button">Search</button>
                        </div>

                        <div className="list-result">
                            <SearchItem/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <MailList />
                    <Footer/>
                </div>

            </div>
        </>
    );
};


export default Hotels;
