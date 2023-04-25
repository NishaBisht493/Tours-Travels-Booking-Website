import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className = "fpItem">
                <img src = "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className="fpImg"></img>
                <span className="fpName">Aparthotel Stare Misato</span>
                <span className="fpCity">Delhi</span>
                <span className="fpPrice">Starting from Rs. 15000</span>
                <div className = "fpRating">
                    <button>8.5</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className = "fpItem">
                <img src = "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className="fpImg"></img>
                <span className="fpName">Aparthotel Stare Misato</span>
                <span className="fpCity">Delhi</span>
                <span className="fpPrice">Starting from Rs. 15000</span>
                <div className = "fpRating">
                    <button>8.5</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className = "fpItem">
                <img src = "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className="fpImg"></img>
                <span className="fpName">Aparthotel Stare Misato</span>
                <span className="fpCity">Delhi</span>
                <span className="fpPrice">Starting from Rs. 15000</span>
                <div className = "fpRating">
                    <button>8.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties;