import { useDispatch, useSelector } from "react-redux"
import CardComponent from "../components/CardComponent";







function FavoritesPage() {
    const { favoriteItems, removeFavorite } = useSelector((state) => state.favoriteStore);
    const dispatch = useDispatch();

    function handleRemoveFavorite(id) {
        dispatch(removeFavorite(id));
    }

    return (
        <><div className="flex flex-col mt-4">
            {favoriteItems.map((item, index) => <CardComponent item={item} key={item.id} index={index} handleRemoveFavorite={handleRemoveFavorite} label='Remove From Favorites' />
            )}
        </div>
        </>
    )
}

export default FavoritesPage