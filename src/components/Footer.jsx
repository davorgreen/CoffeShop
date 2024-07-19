import { footer } from "../data/data"


function Footer() {
    return (
        <div>
            <div className="bg-green-300">
                <div className="w-10/12 m-auto">
                    <div className="flex justify-between py-14 gap-8">
                        {
                            footer.map((el, index) => {
                                return <> <div key={index} className="w-2/6">
                                    <h1 className="text-2xl mb-5  text-green-800 font-bold underline ">{el.header}</h1>
                                    <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">{el.content1}</p>
                                    <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl" >{el.content2}</p>
                                    <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">{el.content3}</p>
                                    <p className="hover:text-orange-500 focus:underline focus:decoration-orange-400 transition-all text-xl">{el.content4}</p>
                                </div> </>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer