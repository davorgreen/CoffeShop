import employeecomments from "../data/employeecomments"

function OurTeam() {
    return (
        <div className="container mx-auto p-6 m-4 bg-green-100">
            <p className="text-center m-5 font-bold text-3xl text-green-800">Meet Our Team</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {employeecomments.map((el, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-2xl border border-green-500 transition-transform transform hover:scale-105">
                        <img src={el.image} alt={el.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-300 object-cover" />
                        <h3 className="text-2xl font-bold text-green-700 mb-2 text-center">{el.name}</h3>
                        <p className="text-xl font-medium underline text-green-600 mb-2 text-center">{el.position}</p>
                        <p className="text-lg font-semibold text-green-500 mb-4 text-center">{el.quote}</p>
                        <p className="text-base text-green-700 mb-2"><strong>Background:</strong> {el.background}</p>
                        <p className="text-base text-green-700 mb-2"><strong>Favorite Coffee:</strong> {el.favoriteDrink}</p>
                        <p className="text-base text-green-700 mb-2"><strong>Career Goals:</strong> {el.careerGoals}</p>
                        <p className="text-base text-green-700"><strong>Fun Fact:</strong> {el.funFact}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default OurTeam;