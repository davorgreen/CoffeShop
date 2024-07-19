
import Slider from "react-slick";
import image1 from '../imgSlider/36533230_image9624.jpg';
import image2 from '../imgSlider/0fe8a99a97b75c68dcb98f993e5eaf95.jpg';
import image3 from '../imgSlider/COBA22-FACEBOOK-SLIDESHOW-1-1130x650.jpg';
import image4 from '../imgSlider/Coffee-Shop -in-Dubai-by-Amer-Shawa-001.jpg';
import image5 from '../imgSlider/Coffee-Shop -in-Dubai-by-Amer-Shawa-010.jpg';
import image6 from '../imgSlider/Coffee-Shop -in-Dubai-by-Amer-Shawa-011.jpg';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="mt-32 mb-40">
            <div className="slider-container mx-auto w-3/4">
                <Slider {...settings}>


                    <img src={image1} alt="aaa" className="w-3/4 h-[400px] object-cover" />


                    <img src={image2} alt="aaa" className="w-3/4 h-[400px] object-cover" />


                    <img src={image3} alt="aaa" className="w-3/4 h-[400px] object-cover" />


                    <img src={image4} alt="aaa" className="w-3/4 h-[400px] object-cover" />


                    <img src={image5} alt="aaa" className="w-3/4 h-[400px] object-cover" />

                    <img src={image6} alt="aaa" className="w-3/4 h-[400px] object-cover" />


                </Slider>
            </div>
        </div>

    );
}



