import { useState } from "react";
import { Card, CardBody } from "reactstrap";
import "../styles/alphaCardStyle.css";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AlphaCard = ({ letters, cards }) => {
	// set initial alphabet array using the data passed via 'letters'
	const [alphaArr, setAlphaArr] = useState(letters);

	// The following function creates a new array from current value of alphaArr where it shifts/rotates the existing items in the array
	// while maintaining their order relative to each other, ultimately repositioning their indecies by N amount.

	// More simply put, this function "paginates" (pseudo-paginates, really) through the data in the array by repositioning each subset or "page"
	// of data/items to be at the beginning of the array as the user clicks through. The reason/choice for this is related to simplifying the mapping of the cards in the component.

	function modifyAlphaArr(direction = 1) {
		// the direction parameter "direction" is a number (either 1 or -1) to determine how to shift the array (positive or negative cards value could have been passed in as the param to make the code more concise, but I think this is more clear)
		const sliceIndex = cards * direction;
		const updatedArr = [alphaArr.slice(sliceIndex), alphaArr.slice(0, sliceIndex)].flat(); // note: used non-destrucitve/mutative slice method as to not modify the current alphaArr value and then used the flat method which makes a new array (there are reasons why this important)

		setAlphaArr(updatedArr);
	}

	return (
		<>
			{alphaArr.slice(0, cards).map((letter) => {
				const { id, color } = letter;
				return (
					<Card className='card' key={id} style={{ backgroundColor: color }}>
						<CardBody className='letter'>
							<div>{id}</div>
						</CardBody>
					</Card>
				);
			})}
			<div className='button-container'>
				<button onClick={() => modifyAlphaArr(-1)}>
					<FontAwesomeIcon icon={faChevronLeft} size='6x' />
				</button>
				<button onClick={() => modifyAlphaArr(1)}>
					<FontAwesomeIcon icon={faChevronRight} size='6x' />
				</button>
			</div>
		</>
	);
};

export default AlphaCard;
