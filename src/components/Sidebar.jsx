//icons
import { ImCross } from "react-icons/im";

function Sidebar({ isActive, closedSidebar }) {
    return (
        <div>
            <div>
                <div style={{ transform: `translateX(${isActive ? '0%' : '100%'})` }} className="fixed top-0 right-0 bg-white shadow-lg h-full transition-transform duration-300 ease-out">
                    <div className="border-b m-4">
                        <h1 className="text-3xl p-4">Your Cart</h1>
                    </div>
                    <div className="p-4">
                        <span className="absolute top-0 right-0 p-4" onClick={closedSidebar}>
                            <ImCross />
                        </span>
                        <div className="text-3xl font-bold uppercase">Empty Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar