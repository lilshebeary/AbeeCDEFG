import { useState } from "react";
import { Card, CardBody } from "reactstrap";
import "../styles/alphaCardStyle.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AlphaCard = ({ letters, cards}) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(cards);

  
  const previous = () => {
    console.log(start);
    console.log(end);
    if ((start < 0) || (start - cards < 0)) {
      return;
    } else {
      setStart(start - cards);
      setEnd(end - cards);
    }
  };
  const next = () => { 
    console.log(window.innerWidth)
    console.log(start);
    console.log(end);
    if((start > letters.length - 1) || (start + cards > letters.length - 1)){
      return
    } else{
      setStart(start + cards)
      setEnd(end + cards)
    }
  };

  return (
    <>
      {letters.slice(start, end).map((letter) => {
        const { id, color } = letter;
        return (
          <Card className="card" key={id} style={{ backgroundColor: color }}>
            <CardBody className="letter">
              <div>{id}</div>
            </CardBody>
          </Card>
        );
      })}
      <div className="button-container">
        <button onClick={() => previous()}>
          <FontAwesomeIcon icon={faChevronLeft} size="6x" />
        </button>
        <button onClick={() => next()}>
          <FontAwesomeIcon icon={faChevronRight} size="6x" />
        </button>
      </div>
    </>
  );
};

export default AlphaCard;


