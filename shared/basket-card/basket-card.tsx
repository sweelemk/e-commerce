import Image from "next/image";
import { IItem } from "../../common/types";
import Icon from "../icons";
import {
  StyledBasketCard,
  BasketCardImage,
  BasketCardDetails,
} from "./basket-card.styled";

interface BasketCardOwnProps {
  handleRemove: (id: string) => void;
}

interface BasketCardProps extends BasketCardOwnProps, IItem {};

const BasketCard: React.FC<BasketCardProps> = ({ id, image, title, price, handleRemove }) => {
  return (
    <StyledBasketCard>
      <BasketCardImage>
        <Image src={image} alt={title} fill />
      </BasketCardImage>
      <BasketCardDetails>
        <div className="card-title">{title}</div>
        <div className="card-price">{`£${price}`}</div>
        <div className="card-clear" onClick={() => handleRemove(id)}>
          <Icon name="trash" />
        </div>
      </BasketCardDetails>
    </StyledBasketCard>
  );
};

export default BasketCard;
