import { useSelector } from "react-redux"


import CardComponent from "../components/CardComponent";



function FavoritesPage() {
    const { favoriteItems } = useSelector((state) => state.favoriteStore);
    return (
        <div>{favoriteItems.map((item, index) => < CardComponent item={item} key={item.id} />
        )}</div>
    )
}

export default FavoritesPage