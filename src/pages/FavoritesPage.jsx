import { useSelector } from "react-redux"


import CardComponent from "../components/CardComponent";



function FavoritesPage() {
    const { favoriteItems } = useSelector((state) => state.favoriteStore);
    return (
        <><div className="flex flex-col mt-4">
            {favoriteItems.map((item, index) => < CardComponent item={item} key={item.id} index={index} />
            )}
        </div>
        </>
    )
}

export default FavoritesPage