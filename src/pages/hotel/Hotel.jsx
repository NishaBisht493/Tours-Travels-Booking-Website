import './hotel.css';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faLocationDot, faCircleXmark, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from 'react';

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/435804104.jpg?k=91d25891536b18a76ff2e4d1f979d72b66d504a8ddebe00ae31ceb9847f8d768&o=&hp=1"
        },
        {
            src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359526018.jpg?k=ea7722112611bb4b1ea3b77cc4c310bb497b4cfb93f471fef302002cf0974056&o=&hp=1"
            
        },
        {
            src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/435804104.jpg?k=91d25891536b18a76ff2e4d1f979d72b66d504a8ddebe00ae31ceb9847f8d768&o=&hp=1"
        },
        {
            src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359523690.jpg?k=5d765ed076225513fd3272152b1890594eb6d486b125e4638ce0f55d50ef8944&o=&hp=1"
        },
        {
            src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337869989.jpg?k=4fbac7147b96be70dd73cec297cd495d75c03707824fa8bbd4f934683a0def14&o=&hp=1"
        },
        {
            src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359523690.jpg?k=5d765ed076225513fd3272152b1890594eb6d486b125e4638ce0f55d50ef8944&o=&hp=1"
        }   
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction === "l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        }else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber);  
    }

    return (
        <div>
            <Navbar />
            <Header type = "list" />
            <div className="hotelContainer">
            {open && <div className="slider">
                <FontAwesomeIcon icon = {faCircleXmark} className='close' onClick = {() => setOpen(false)} />
                <FontAwesomeIcon icon = {faCircleArrowLeft} className='arrow' onClick = {() => handleMove("l")} />
                <div className='sliderWrapper'>
                    <img src = {photos[slideNumber].src} alt = "" className='sliderImg'/>
                </div>
                <FontAwesomeIcon icon = {faCircleArrowRight} className='arrow' onClick = {() => handleMove("r")} />
            </div>}
                <div className="hotelWrapper">
                    <button className='bookNow'> Reserve or Book Now!</button>
                    <h1 className="hotelTitle">The Allure Grand Resort</h1>
                    <div className='hotelAddress'>
                        <FontAwesomeIcon icon = {faLocationDot} />
                        <span>A Riverside resort in Manali</span>
                    </div>
                    <span className='hotelDistance'>Excellent location - 500m from Hill Station</span>
                    <span className='hotelPriceHighlight'>
                        Book a stay over Rs.15000 at this location and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick = {() => {handleOpen(i)} } src={photo.src} alt="" className='hotelImg' />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Shimla</h1>
                            <p className='hotelDesc'>
                            The Allure Grand Resort offers a perfect getaway to all our guests with a breath-taking panoramic view of the snow-covered Pir Panjal range, the resort is inspired by the soul of the river front life and lush green valleys filled with forests that add to the serenity of our location.This river side resort spreads over 1.5 acres, having lush green gardens overlooking river beas and the premises is loaded with apple and apricots vegetation which make the lawns a perfect place to enjoy the tranquillity of this beautiful hill station. We invite you to explore our services and leave the noise of the hustling city life behind to discover the soul of the mountains. Our team shall leave to stone unturned to make your stay memorable and create a beautiful memory to take back home.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 5-night stay!</h1>
                            <span>Located in the real heart of Shimla, this property has an excellent score of 9.5!</span>
                            <h2>
                                <b>Rs. 15000</b> (5 nights stay)
                            </h2>
                            <button> Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel;