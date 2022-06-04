import React from 'react';
import './Features.scss'


const Featured = () => {
    return (
        <div className="featured">
            <div className="featured__item">
                <img src="https://t-cf.bstatic.com/xdata/images/city/max500/619932.webp?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=" alt="" className="featured__img"/>
                <div className="featured__title">
                    <h1>Dublin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
            <div className="featured__item">
                <img src="https://t-cf.bstatic.com/xdata/images/city/max500/808081.webp?k=741722d4e7757b648faf551d5566d2259d3a0f31824f5893aab9f37f43fc7232&o=" alt="" className="featured__img"/>
                <div className="featured__title">
                    <h1>Austin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
            <div className="featured__item">
                <img src="https://t-cf.bstatic.com/xdata/images/city/max500/619932.webp?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=" alt="" className="featured__img"/>
                <div className="featured__title">
                    <h1>Reo</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
        </div>
    );
};

export default Featured;
