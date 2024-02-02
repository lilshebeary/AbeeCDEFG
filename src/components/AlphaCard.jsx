import { useState } from "react";
import { Card, CardBody} from "reactstrap";
import "../styles/alphaCardStyle.css";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AlphaCard = ({ letters, cards }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(cards)

const handleClick = (cards) => {
  console.log(start)
  console.log(end)



  // if(start < 0){
  //   setStart(0)
  //   setEnd(start + cards) 
  // } else {
  //   setStart(start + cards)
  // }
  //  if (end + cards > letters.length - 1){
  //   setEnd(letters.length)
  //  } else {
  //   setStart(start + cards)
  // }
  // if(end > letters.length) {
  //   setEnd(end + cards)
  // }else{
  //   setEnd(end + cards)
  // }  
}

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
      <button onClick={() => handleClick(-cards)}><FontAwesomeIcon icon={faChevronLeft} size="6x"/></button>
      <button onClick={() => handleClick(cards)}><FontAwesomeIcon icon={faChevronRight} size="6x" /></button>
      </div>
    </>
  );
};

export default AlphaCard;
