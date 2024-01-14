import { Card, CardBody } from "reactstrap";
import "../styles/alphaCardStyle.css";
import { alphabet } from "./alphabet";

const alphaCard = ({ alphabet }) => {
  return ( 
  <>
  {alphabet.map(letter => {
    return(
      <Card className="card">
        <CardBody className="letter">
          {letter}
        </CardBody>
      </Card>
    )
  })}
  
  
  </>
  );
};

export default alphaCard;
