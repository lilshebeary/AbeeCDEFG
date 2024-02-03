import React, { useState, useEffect } from "react";
import AlphaCard from "../components/AlphaCard";
import "../styles/homePageStyle.css";
import { upperAlpha } from "../components/alphabet";
const HomePage = () => {
	const [cards, setCards] = useState(5);

	useEffect(() => {
		function setScreenCards(screenWidth) {
			if (screenWidth >= 1100) {
				setCards(5);
			} else if (screenWidth >= 800) {
				setCards(4);
			} else if (screenWidth >= 600) {
				setCards(3);
			} else if (screenWidth >= 480) {
				setCards(2);
			} else {
				setCards(1);
			}
		}

		function handleResize(e) {
			const screenWidth = e.target.innerWidth;
			setScreenCards(screenWidth);
		}

		window.addEventListener("resize", handleResize);

		// set cards based on initial screen
		setScreenCards(window.innerWidth);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// cards will change responsively on screen resize. I don't know if the UI behaves as expected, but the card numbers should change accordingly.
	// console.log("CARDS", cards);

	return (
		<div className='container'>
			<div className='card-container'>
				<AlphaCard cards={cards} letters={upperAlpha} />
			</div>
		</div>
	);
};

export default HomePage;
