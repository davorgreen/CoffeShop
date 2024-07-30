
import reviews from '../data/reviews.js'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from '@mui/material';

const CommentSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className="container mx-auto mt-10 mb-10  text-center w-2/3 bg-green-200 rounded-lg shadow-2xl">
            <h3 className="text-center m-5 font-bold text-3xl text-green-800">What Our Customer Says</h3>
            <Slider {...settings}>
                {reviews.map((el, index) => (
                    <div
                        key={index}
                        className="p-6  max-w-sm mx-auto">
                        < img src={el.profileImage} alt={el.username} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-300 object-cover" />
                        <p className="text-2xl font-bold text-green-700 mb-2 text-center">{el.username}</p>
                        <p className="text-lg font-semibold text-gray-700 mb-4 text-center">{el.review}</p>
                        <p>
                            <Rating name="half-rating-read" defaultValue={el.rating} precision={0.5} readOnly /></p>
                    </div>
                ))
                }
            </Slider >
        </div >
    );
};

export default CommentSlider;
