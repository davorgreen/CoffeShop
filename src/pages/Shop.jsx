import { useEffect, useState } from "react"
import base from "../services/ProductService";
import { ThreeCircles } from "react-loader-spinner";
import CardComponent from "../components/CardComponent";


function Shop() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true)
        base.get().
            then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(setLoading(false))
    }, []);



    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="container mx-auto">
                {data && data.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{data.map((item) => {
                    return <CardComponent key={item.id} item={item} />
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