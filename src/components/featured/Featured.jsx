import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src = "https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Austin" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Nainital</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src = "https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "Austin" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Almora</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src = "https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Austin" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Dehradun</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured;