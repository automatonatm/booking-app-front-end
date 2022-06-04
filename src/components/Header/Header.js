import React, {useState} from 'react';
import './Header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";

import { DateRange } from 'react-date-range';

import {format}  from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {useNavigate} from "react-router-dom"; // theme css file

const Header = ({type}) => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [showCalender, setShowCalender] = useState(false)
    const [showOptions, setShowOptions] = useState(false)

    const [destination, setDestination] = useState("")

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        roomNumber: 1
    })

    const navigate = useNavigate()

    const handleOptionHandler = (name, operation) => {

        setOptions((prev) =>   {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleSearchHandler = () => {
        navigate('/hotels', {
            state: {destination, date, options}
        })
    }


    return (
        <div className="header">
            <div className={type === 'hotels' ? 'header__container list-mode' : 'header__container'}>
            <div className="header__list">
                <a className="header__list-item active" href="#">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </a>

                <a className="header__list-item" href="#">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </a>
                <a className="header__list-item" href="#">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </a>
                <a className="header__list-item" href="#">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </a>
                <a className="header__list-item" href="#">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </a>
            </div>
                {type !== 'hotels' && (
                    <>
                        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
                        <p className="header__description">
                            Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account
                        </p>
                        <a className="header-btn" href="#">Sign / Register</a>
                        <div className="header__search">
                            <div className="header__search-item">
                                <FontAwesomeIcon icon={faBed}  className="header__icon"/>
                                <input type="text" onChange={(e) =>  setDestination(e.target.value)} placeholder="Where are you going?" className="header__search-input"/>
                            </div>
                            <div className="header__search-item">
                                <FontAwesomeIcon icon={faCalendarDays}  className="header__icon"/>
                                <span className="header__search-text" onClick={() => setShowCalender(!showCalender)}>{format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}</span>
                                {
                                    showCalender && (
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            minDate={new Date()}
                                            className="header__calender"
                                        />
                                    )
                                }

                            </div>
                            <div className="header__search-item">
                                <FontAwesomeIcon icon={faPerson}  className="header__icon"/>
                                <span className="header__search-text" onClick={() => {
                                    setShowOptions(!showOptions)
                                }}>{options.adult} adults . {options.children} children . {options.roomNumber} rooms</span>
                                {showOptions && (
                                    <div className="options">
                                        <div className="options__item">
                                            <div className="option__text">Adult</div>
                                            <div className="options__toggle">
                                                <button className="options__button" onClick={() => handleOptionHandler('adult', 'd')} disabled={options.adult <= 1}>-</button>
                                                <span>{options.adult}</span>
                                                <button className="options__button" onClick={() => handleOptionHandler('adult', 'i')}>+</button>
                                            </div>
                                        </div>
                                        <div className="options__item">
                                            <div className="option__text">Children</div>
                                            <div className="options__toggle">
                                                <button className="options__button" onClick={() => handleOptionHandler('children', 'd')} disabled={options.children <= 1}>-</button>
                                                <span>{options.children}</span>
                                                <button className="options__button" onClick={() => handleOptionHandler('children', 'i')}>+</button>
                                            </div>
                                        </div>
                                        <div className="options__item">
                                            <div className="option__text">Room</div>
                                            <div className="options__toggle">
                                                <button className="options__button" onClick={() => handleOptionHandler('roomNumber', 'd')} disabled={options.roomNumber <= 1}>-</button>
                                                <span>{options.roomNumber}</span>
                                                <button className="options__button" onClick={() => handleOptionHandler('roomNumber', 'i')}>+</button>
                                            </div>
                                        </div>


                                    </div>
                                )}

                            </div>
                            <div className="header__search-item">
                                <button className="header-btn" onClick={handleSearchHandler}>Search</button>
                            </div>
                        </div>
                    </>
                )}


            </div>

        </div>
    );
};

export default Header;
