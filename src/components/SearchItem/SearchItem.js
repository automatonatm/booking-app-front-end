import React from 'react';
import './SearchItem.scss'

const SearchItem = () => {
    return (
        <>
        <div className="search-item">
            <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/285914335.webp?k=fa5aa9ef20ec1880b1fbf35456258ad546c474700872ed2f6f9368925960a91a&o=&s=1"
                alt=""
                className="search-item__image"
            />

            <div className="search-item__description">
                <h1 className="search-item__title">Tower Street Apartments</h1>
                <span className="search-item__distance">500m from center</span>
                <span className="search-item__taxi-option">Free airport taxi</span>
                <span className="search-item__subtitle">
          Studio Apartment with Air conditioning
        </span>
                <span className="search-item__features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
                <span className="search-item__cancel">Free cancellation </span>
                <span className="search-item__cancel-subtitle">
          You can cancel later, so lock in this great price today!
         </span>

            </div>


            <div className="search-item__details">
                <div className="search-item__rating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="search-item__text">
                    <span className="search-item__text-price">$112</span>
                    <span className="search-item__text-tax">Includes taxes and fees</span>
                    <button className="search-item__button">See availability</button>
                </div>
            </div>

        </div>

        <div className="search-item">
            <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square200/285914335.webp?k=fa5aa9ef20ec1880b1fbf35456258ad546c474700872ed2f6f9368925960a91a&o=&s=1"
                alt=""
                className="search-item__image"
            />

            <div className="search-item__description">
                <h1 className="search-item__title">Tower Street Apartments</h1>
                <span className="search-item__distance">500m from center</span>
                <span className="search-item__taxi-option">Free airport taxi</span>
                <span className="search-item__subtitle">
          Studio Apartment with Air conditioning
        </span>
                <span className="search-item__features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
                <span className="search-item__cancel">Free cancellation </span>
                <span className="search-item__cancel-subtitle">
          You can cancel later, so lock in this great price today!
         </span>

            </div>

            <div className="search-item__details">
                <div className="search-item__rating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="search-item__text">
                    <span className="search-item__text-price">$112</span>
                    <span className="search-item__text-tax">Includes taxes and fees</span>
                    <button className="search-item__button">See availability</button>
                </div>
            </div>

        </div>
       </>
    );
};

export default SearchItem;
