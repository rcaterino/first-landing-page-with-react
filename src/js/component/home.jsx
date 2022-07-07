import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";


const Home = () => {
	return (
		[<Navbar />,
    	<Jumbotron />,
		<Cards />,
		<Footer />]
	);
};

export default Home;
