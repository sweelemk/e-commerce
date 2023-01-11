import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Input } from "../../../shared";
import Icon from "../../../shared/icons";
import { StyledSearch } from "./search.styled";

interface ISearch {
  placeholder?: string;
  disabled?: boolean;
  handleSubmit: (query: string) => void;
}

const Search: React.FC<ISearch> = ({ placeholder, disabled, handleSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const onClick = () => {
    handleSubmit(query);
  }

  return (
    <StyledSearch>
      <Input
        placeholder={placeholder}
        disabled={disabled}
        icon={<Icon name="search" />}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button label="Search" variant="primary" disabled={disabled} onClick={onClick} />
    </StyledSearch>
  );
};

export default Search;
