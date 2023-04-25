import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = () =>{
    const navigate = useNavigate();
    const changePage = () => {
        navigate("/hotels/:id");
    }

    return(
        <div className="searchItem">
            <img src ="https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_3600,h_2025,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/renest-river-country-resort-manali/Renest_Manali_00014_tmou4p" alt = "" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Sita Cottage</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21 meter square 1 full bed
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.5</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">Rs. 12300</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={changePage}>Check availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;