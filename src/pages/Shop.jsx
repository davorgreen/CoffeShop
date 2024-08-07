import { useEffect, useState } from "react"
import base from "../services/ProductService";
import { ThreeCircles } from "react-loader-spinner";
import CardComponent from "../components/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProductHandler } from "../slices/ProductSlice";


function Shop() {
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.productStore);

    const handleOpen = (productId) => {
        setModalOpen(productId);
    }

    const handleClose = () => {
        setModalOpen(null);
    }

    useEffect(() => {
        setLoading(true)
        base.get()
            .then((res) => dispatch(getProductHandler((res.data))))
            .catch((err) => setError(err.message))
    }, []);



    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="container mx-auto">
                {allProducts && allProducts.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{allProducts.map((item) => {
                    return <CardComponent key={item.id} item={item} handleOpen={handleOpen}
                        handleClose={handleClose}
                        modalOpen={modalOpen === item.id}
                        label="View Details" />
                })}</div>) : (<div className="flex items-center justify-center min-h-screen"><ThreeCircles
                    visible={loading}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /></div>)}
            </div>
        </div>
    )
}

export default Shop