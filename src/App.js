import React from "react";
import ReactDOM from "react-dom/client";

//header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-grp">
        <img
          src="data:image/jpeg;base64,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"
          alt="Hunger Banger Logo"
          className="logo"
        />
        <h2>HB</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//food card
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Logo image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>

      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "621593",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/2fdd8907-089d-4f55-bb09-b2a5a9385f81_621593.jpg",
      locality: "Kharar",
      areaName: "Amayra City Center",
      costForTwo: "₹300 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "772027",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/dfd8b2d0-03a2-430e-b6ef-a2f9f6efa82f_772027.JPG",
      locality: "Amayra Emporio",
      areaName: "Kharar",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "719627", 
      name: "Nik Bakers",
      cloudinaryImageId: "9224aa5efa8216354c4cc8a46659efcd",
      locality: "Kharar",
      areaName: "Amayra City",
      costForTwo: "₹700 for two",
      cuisines: ["Bakery", "Continental", "Pizzas", "Pastas", "Italian"],
      avgRating: 4.7,
      parentId: "10551",
      avgRatingString: "4.7",
      totalRatingsString: "529",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "626285",
      name: "Cheesecakes By CakeZone",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/006de265-6ae3-4e4a-8e91-c0a48deeeeae_626285.jpg",
      locality: "Sunny Enclavekharar",
      areaName: "Sector 125",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "348057",
      avgRatingString: "4.5",
      totalRatingsString: "194",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "693267",
      name: "Ovenfresh Cakes And Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/18/2a67c3f1-62a1-4e20-810b-0c8353382f4d_693267.JPG",
      locality: "S Nagar",
      areaName: "Sector 125",
      costForTwo: "₹200 for two",
      cuisines: [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Sweets",
        "Juices",
        "Bengali",
        "Pizzas",
      ],
      avgRating: 4.7,
      parentId: "1372",
      avgRatingString: "4.7",
      totalRatingsString: "799",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "707282",
      name: "Starbucks Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/7f330933-4d51-4bcc-bf4a-3e1f9c3e48e8_707282.JPG",
      locality: "Nirwana Square",
      areaName: "Chandigarh Ropar Road",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.5,
      parentId: "195515",
      avgRatingString: "4.5",
      totalRatingsString: "203",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "626278",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/2357155b-23ee-44f9-981a-0955b11621e9_626278.JPG",
      locality: "Sunny Enclavekharar",
      areaName: "Sector 125",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.6",
      totalRatingsString: "947",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "626273",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/357cf25d-b1a2-4d55-b382-fe41d4e1ae94_626273.JPG",
      locality: "Sunny Enclavekharar",
      areaName: "Sector 125",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.7,
      parentId: "7003",
      avgRatingString: "4.7",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "260739",
      name: "Cafe Coffee Day",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/684e92f0-0462-492a-ac07-4994d0d53378_260739.JPG",
      locality: "SUNNY ENCLAVE KHARAR MOHALI-PUNJAB",
      areaName: "Sunny Enclave",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.5,
      parentId: "1",
      avgRatingString: "4.5",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "659611",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_659611.JPG",
      locality: "Sector-60",
      areaName: "SAS Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Beverages",
        "Chaat",
        "Snacks",
        "Bakery",
        "Street Food",
        "healthy",
        "Home Food",
        "Maharashtrian",
        "Italian",
        "Desserts",
      ],
      avgRating: 4.5,
      parentId: "281782",
      avgRatingString: "4.5",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 10.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "10.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "594191",
      name: "Saladspoint",
      cloudinaryImageId: "cb1fac14fffef0e21a890726f20e7d78",
      locality: "Sahibzada Ajit Singh Nagar",
      areaName: "Phase 7 Mohali",
      costForTwo: "₹500 for two",
      cuisines: ["Salads", "Healthy food", "Juices", "Beverages"],
      avgRating: 4.6,
      parentId: "8786",
      avgRatingString: "4.6",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "64365",
      name: "Katani Vaishno Dhaba 3B2",
      cloudinaryImageId: "wkyhgrafwsszhjmxxzsd",
      locality: "Phase 3",
      areaName: "Phase 3 Mohali",
      costForTwo: "₹250 for two",
      cuisines: [
        "Punjabi",
        "Indian",
        "Street Food",
        "Snacks",
        "Beverages",
        "Sweets",
        "Chinese",
        "Thalis",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "659519",
      avgRatingString: "4.6",
      totalRatingsString: "49K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "593945",
      name: "Caterspoint",
      cloudinaryImageId: "px9vmgwdbdsvf353canj",
      locality: "Sahibzada Ajit Singh Nagar",
      areaName: "Phase 7 Mohali",
      costForTwo: "₹500 for two",
      cuisines: [
        "Salads",
        "Healthy food",
        "Snacks",
        "pastas",
        "Lebanese",
        "Mexican",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.5,
      parentId: "11011",
      avgRatingString: "4.5",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "50247",
      name: "Gopal's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/7/c5809893-26dc-4d3a-a598-4571d7c02024_50247.jpg",
      locality: "Sector 125",
      areaName: "Sector 125 Mohali",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Sweets",
        "Desserts",
        "Thalis",
        "Tandoor",
        "Fast Food",
        "Snacks",
        "Chinese",
        "Italian",
      ],
      avgRating: 4.5,
      parentId: "4539",
      avgRatingString: "4.5",
      totalRatingsString: "26K+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "775542",
      name: "FNP Cakes By Ferns N Petals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/51ab9268-d903-41b4-8236-e460dab7f3fd_775542.jpg",
      locality: "Phase-1",
      areaName: "Sec. 55",
      costForTwo: "₹499 for two",
      cuisines: [
        "Desserts",
        "Bakery",
        "Sweets",
        "Ice Cream",
        "Beverages",
        "North Indian",
        "Chinese",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "339638",
      avgRatingString: "4.4",
      totalRatingsString: "760",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 9.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "686383",
      name: "ITC Fabelle Chocolates",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/dd008382-c637-4521-952e-3742310fe38b_686383.jpg",
      locality: "Buddha Marg",
      areaName: "Sector 125",
      costForTwo: "₹600 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "471924",
      avgRatingString: "4.6",
      totalRatingsString: "34",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "46348",
      name: "Burger Point 70",
      cloudinaryImageId: "mqbffp1a8thnsq1pibk8",
      locality: "Sector 70",
      areaName: "Sector 70 Mohali",
      costForTwo: "₹200 for two",
      cuisines: [
        "Burgers",
        "Rolls & Wraps",
        "Pizzas",
        "American",
        "Fast Food",
        "Chinese",
        "rolls",
        "Italian",
        "Combos",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "391460",
      avgRatingString: "4.0",
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 60,
        lastMileTravel: 10.4,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "10.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Apoorva</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
