import "./propertyList.css";

const PropertyList = () => {
    return(
        <div className="pList">
            <div className = "pListItem">
                <img src = "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "pListImg"></img>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
            <div className = "pListItem">
                <img src = "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "pListImg"></img>
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
            <div className = "pListItem">
                <img src = "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "pListImg"></img>
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
            <div className = "pListItem">
                <img src = "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "pListImg"></img>
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
            <div className = "pListItem">
                <img src = "https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "pListImg"></img>
                <div className="pListTitles">
                    <h1>Restaurants</h1>
                    <h2>123 Hotels</h2>
                </div>
            </div>
        </div>
    )
}
export default PropertyList;