import Image from "next/image";
import { IItem } from "../../common/types";
import { Button } from "../button";
import { StyledCard, CardImage, CardDetails, CardFooter } from "./card.styled";

interface ICardOwn {
  handleAdd: () => void;
}

interface ICard extends IItem, ICardOwn {};

const Card: React.FC<ICard> = ({ image, title, description, price, handleAdd }) => {
  return (
    <StyledCard>
      <CardImage>
        <Image src={image} alt={title} fill />
      </CardImage>
      <CardDetails>
        <div className="card-title">{title}</div>
        {description && <div className="card-description">{description}</div>}
        <CardFooter>
          <Button label="Add to cart" size="small" variant="primary" onClick={handleAdd} />
          <div className="card-price">{`£${price}`}</div>
        </CardFooter>
      </CardDetails>
    </StyledCard>
  );
};

export default Card;
