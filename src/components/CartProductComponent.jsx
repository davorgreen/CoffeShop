import { CiCircleRemove } from "react-icons/ci"
import { useSelector } from "react-redux";

function CartProductComponent({ item, index }) {
    const {
        id,
        name,
        description,
        price,
        region,
        weight,
        flavor_profil,
        grind_option,
        roast_level,
        image_url,
        quantity,
        totalPrice
    } = item
    return (
        <div><div className="grid grid-cols-4 place-items-center relative px-3"  >
            <div className="flex gap-4 items-center  ">
                <img src={image_url} alt={name} className="w-24 h-24 rounded-2xl object-cover" />

                <div className="gap-1 hidden lg:flex flex-col items-start justify-center">
                    <h2 className="text-mainBlue font-medium text-xl">{name}</h2>
                    <p className="text-textColor">{weight}g</p>
                </div>
            </div>
            <div>${price}</div>
            <div className="flex items-center">
                <button className="px-2 py-1 bg-slate-300 text-base" >+</button>
                <span className="px-2 py-1 bg-slate-300 text-base">{quantity}</span>
                <button className="px-2 py-1 bg-slate-300 text-base" >-</button>
            </div>
            <div>
                <p>${totalPrice}</p>
            </div>
            <CiCircleRemove size={25} color="C33131" className="absolute top-0 right-0 cursor-pointer" />
        </div></div>
    )
}

export default CartProductComponent;