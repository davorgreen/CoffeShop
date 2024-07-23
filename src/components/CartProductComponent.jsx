import { CiCircleRemove } from 'react-icons/ci'
import { useDispatch, } from 'react-redux';
import { removeProductHandler, setPriceHandler } from '../slices/CartSlice';

function CartProductComponent({ item, index }) {
    const dispatch = useDispatch()
    const { name,
        price,
        image_url,
        weight,
        count,
        cartTotal
    } = item;
    return (
        <div className="grid grid-cols-4 place-items-center relative px-3"  >
            <div className="flex gap-4 items-center  ">

                <img src={image_url} alt={name} className="w-24 h-24 rounded-2xl object-cover" />

                <div className="gap-1 hidden lg:flex flex-col">
                    <h2 className="text-mainBlue font-medium text-xl">{name}</h2>
                    <p className="text-textColor">{weight}g</p>
                </div>
            </div>
            <div>${price}</div>
            <div className="flex items-center">
                <button className="px-2 py-1 bg-slate-300 text-base" onClick={() => { dispatch(setPriceHandler({ increment: 1, index })) }}>+</button>
                <span className="px-2 py-1 bg-slate-300 text-base">{count}</span>
                <button className="px-2 py-1 bg-slate-300 text-base" onClick={() => { dispatch(setPriceHandler({ increment: -1, index })) }}>-</button>
            </div>
            <div>
                <p>${cartTotal}</p>
            </div>
            <CiCircleRemove size={25} color="C33131" className="absolute top-0 right-0 cursor-pointer" onClick={() => {
                dispatch(removeProductHandler(index))

            }} />
        </div>
    )
}

export default CartProductComponent