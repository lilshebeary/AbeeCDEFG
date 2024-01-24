import { useState } from "react";
import { Card, CardBody} from "reactstrap";
import "../styles/alphaCardStyle.css";

const AlphaCard = ({ letters, cards }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(cards)

const handleClick = (cards) => {
  console.log(start)
  console.log(end)
  if(start + cards < 0){
    setStart(0)
  }
   if (end + cards < 5){
    setEnd(5)
   } else {
    setStart(start + cards)
  }
  if(end + cards > letters.length) {
    setEnd(letters.length)
  }else{
    setEnd(end + cards)
  }  
}

  return (
    <>
    <button onClick={() => handleClick(-cards)}>left</button>
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
      <button onClick={() => handleClick(cards)}>right</button>
    </>
  );
};

export default AlphaCard;
