

function CardComponent({ item }) {
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
    } = item;

    return (
        <div className="flex flex-col gap-4  mt-10 p-5 md:flex-row justify-center items-center bg-green-200 shadow-2xl rounded-lg overflow-hidden m-4">
            {/* Left side */}
            <div className="flex justify-center items-center">
                <img src={image_url} alt={name} className="w-80 h-80 object-cover " />
            </div>
            {/* Right side */}
            <div className="flex flex-col p-4 gap-2">
                <div className="text-xl text-green-800 font-bold underline">{name}</div>
                <div className="text-gray-700 font-bold">{description}</div>
                <div className="text-gray-900 text-base">Price: <span className="font-bold">${price}</span> </div>
                <div className="text-gray-700 "><span className="border-b-4 border-lime-900">Region: </span><span className="font-bold">{region}</span></div>
                <div className="text-gray-700 u">Weight: {weight}g</div>
                <div className="text-gray-700 ">Grind Option: {grind_option}</div>
                <div className="text-gray-700 ">Roast Level: <span className="font-bold">{roast_level}</span></div>
            </div>
        </div>
    )
}

export default CardComponent