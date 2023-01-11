import { Fragment, useState } from "react";
import styled from "styled-components";
import { IItem } from "../common/types";
import { Search } from "../modules/components";
import { CartActionKind } from "../modules/context/actions";
import { useAppContext } from "../modules/context/context";
import { useFetchCatalogItems } from "../modules/rest/services";
import { Card, Loader } from "../shared";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, isLoading } = useFetchCatalogItems(searchQuery);
  const { cartDispatch } = useAppContext();

  const handleAddToBasket = (item: IItem) => {
    cartDispatch({ type: CartActionKind.ADD_TO_CART, payload: item });
  };

  return (
    <Fragment>
      <HomeSearchBox>
        <Search placeholder="Search for items" handleSubmit={setSearchQuery} disabled={isLoading} />
      </HomeSearchBox>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
          <span>Loading...</span>
        </LoaderContainer>
      ) : (
        <HomeItems>
          {data?.items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              handleAdd={() => handleAddToBasket(item)}
            />
          ))}
        </HomeItems>
      )}
    </Fragment>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.units.unit10} 0;
  gap: 8px;
`;

const HomeItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const HomeSearchBox = styled.div`
  margin-bottom: ${({ theme }) => theme.units.unit3};
  position: sticky;
  top: 0;
  z-index: 1;
`;
