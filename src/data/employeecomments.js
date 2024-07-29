const employeecomments = [
    {
        id: 1,
        name: "Emily Johnson",
        position: "Barista",
        quote: "Working at GreenGo has been an amazing experience! The atmosphere is always welcoming, and I love interacting with our loyal customers daily.",
        image: "https://engineering.nd.edu/wp-content/uploads/2021/08/johnson-HS2-300x300.jpg",
        background: "Emily joined GreenGo two years ago and has quickly become a favorite among our regulars.",
        favoriteDrink: "Golden Sunrise",
        careerGoals: "Emily hopes to further her skills in coffee brewing and eventually manage her own GreenGo location.",
        funFact: "Emily once won a local latte art competition!"
    },
    {
        id: 2,
        name: "Michael Smith",
        position: "Store Manager",
        quote: "GreenGo is not just a coffee shop; it's a family. The support and encouragement I receive from my colleagues make every day enjoyable.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6xwbPZ6fdyr5xzc9H0_3zlhOZxpkiPt-Pw&s",
        background: "Michael has been with GreenGo for five years and has played a crucial role in our store's growth.",
        favoriteDrink: "Rainforest Rhapsody",
        careerGoals: "Michael aspires to expand his role into regional management and help other stores thrive.",
        funFact: "Michael is an avid home brewer and enjoys experimenting with different coffee blends."
    },
    {
        id: 3,
        name: "Sophia Lee",
        position: "Customer Service Representative",
        quote: "The best part of working at GreenGo is the vibrant environment and the chance to make someone's day better with our fantastic coffee.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWx_DvwU1dueXPsnuyQmNfRcdJLrcQQnTOm2FUZXZkvoi2eavTD-NXFwtO_bufagirhQ&usqp=CAU",
        background: "Sophia has been with us for a year and has a knack for making every customer feel special.",
        favoriteDrink: "Signature Blend",
        careerGoals: "Sophia is interested in growing her career in customer service management and training.",
        funFact: "Sophia loves organizing community events and is the mastermind behind our monthly coffee-tasting nights."
    },
    {
        id: 4,
        name: "David Brown",
        position: "Barista",
        quote: "Every day at GreenGo is a new adventure. I love experimenting with new coffee recipes and seeing the smiles on our customers' faces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DjA13WOT9TP7ZoeRybA6KWpPZ3bn9dmJww&s",
        background: "David has been with GreenGo for six months and is known for his creative coffee concoctions.",
        favoriteDrink: "Cold Brew",
        careerGoals: "David aims to become a coffee roaster and start his own line of specialty coffees.",
        funFact: "David's favorite hobby is woodworking, and he’s crafted some of our café’s unique furniture pieces."
    },
    {
        id: 5,
        name: "Olivia Martinez",
        position: "Assistant Manager",
        quote: "GreenGo has provided me with incredible growth opportunities. The team's dedication to excellence and customer satisfaction is truly inspiring.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DOk4J1NGAf3CuD67Z6Ni4MS2Gwx-mieb8A&s",
        background: "Olivia joined us two years ago and has significantly contributed to improving our operational processes.",
        favoriteDrink: "Wildfire",
        careerGoals: "Olivia plans to pursue further studies in business management and take on more leadership responsibilities.",
        funFact: "Olivia is a yoga enthusiast and leads weekly yoga sessions for our team."
    },
    {
        id: 6,
        name: "James Wilson",
        position: "Chef",
        quote: "I take great pride in preparing delicious treats for our customers. GreenGo's emphasis on quality and creativity makes my job very rewarding.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEyoSFLmfUGHPaV2iFEeFIKqv8QGyVZPRpA&s",
        background: "James brings ten years of culinary experience to GreenGo and is the creative force behind our popular menu items.",
        favoriteDrink: "Walnut Wonder",
        careerGoals: "James aspires to open his own bakery specializing in gourmet pastries and coffee pairings.",
        funFact: "James has traveled the world to learn different baking techniques and often shares his culinary adventures with the team."
    },
    {
        id: 7,
        name: "Ava Taylor",
        position: "Marketing Specialist",
        quote: "Working at GreenGo allows me to blend my passion for coffee with my creativity in marketing. It's a pleasure to be part of such a forward-thinking team.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqe3iXXQOe9yMyng8ISsApXMd-pV9j6xyMw&s",
        background: "Ava joined GreenGo a year ago and has played a key role in developing our social media presence and promotional campaigns.",
        favoriteDrink: "Signature Blend",
        careerGoals: "Ava aims to become a senior marketing strategist and help expand GreenGo’s brand globally.",
        funFact: "Ava is a talented graphic designer and creates our stunning promotional materials."
    },
    {
        id: 8,
        name: "Lucas Anderson",
        position: "Barista",
        quote: "GreenGo has a unique charm and a great team spirit. I enjoy the camaraderie with my colleagues and the satisfaction of serving great coffee.",
        image: "https://media.licdn.com/dms/image/C4E03AQFt5-P07sJAZQ/profile-displayphoto-shrink_200_200/0/1583252051637?e=2147483647&v=beta&t=8KoZw0wb3xIrrPufUruZMqPcP96g2pa4QOzmp4GNM-4",
        background: "Lucas is a relatively new member of the team but has quickly adapted to the GreenGo culture.",
        favoriteDrink: "Harvest Moon",
        careerGoals: "Lucas hopes to gain more experience and eventually move into a leadership role within the company.",
        funFact: "Lucas is a jazz musician and often performs at local events in his spare time."
    },
    {
        id: 9,
        name: "Mia Thompson",
        position: "Cashier",
        quote: "The friendly atmosphere at GreenGo makes every shift enjoyable. I love meeting new people and being part of a team that values customer care.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajyypGDjat6nAFTg7fYcugZwFl8gHLNQTdw&s",
        background: "Mia has been with GreenGo for a few months and has quickly become known for her warm and efficient service.",
        favoriteDrink: "Breezy Beans",
        careerGoals: "Mia is interested in pursuing a career in hospitality management and looks forward to learning more about the industry.",
        funFact: "Mia is a budding photographer and enjoys capturing candid moments at the café."
    },
];

export default employeecomments;
