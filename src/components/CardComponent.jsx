
import Modal from "./Modal";




function CardComponent({ item, label, handleOpen, handleClose, modalOpen, handleRemoveFavorite, index }) {
    const {
        id,
        name,
        description,
        image_url,
    } = item;

    const handleClick = () => {
        if (label === 'View Details') {
            handleOpen(id);
        } else if (label === 'Remove From Favorites') {
            handleRemoveFavorite(id);
        }
    };


    return (
        <div className="gap-4 mt-10 p-5 md:flex-row justify-center items-center bg-green-200 shadow-2xl rounded-lg overflow-hidden m-4 relative">
            {/* Left side */}
            <div className="flex justify-center items-center">
                <img src={image_url} alt={name} className="w-80 h-80 object-cover" />
            </div>
            {/* Right side */}
            <div className="flex flex-col p-4 gap-2 justify-between text-center items-center h-full" style={{ height: '300px' }}>
                <div className=" flex flex-col gap-4">
                    <div className="text-xl text-green-800 font-bold underline">{name}</div>
                    <div className="text-gray-700 font-bold">{description}</div>
                </div>
                <button className="px-4 py-2 text-white font-bold bg-green-700 rounded-xl cursor-pointer hover:text-green-700 hover:bg-transparent hover:font-bold hover:underline" onClick={handleClick}>{label}</button>
            </div>
            {label === 'View Details' && (
                <Modal modalOpen={modalOpen} handleClose={handleClose} item={item} />
            )}
        </div>

    )
}

export default CardComponent;