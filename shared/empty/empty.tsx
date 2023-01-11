import { StyledEmpty } from "./empty.styled";

interface IEmpty {
  title: string;
}
const Empty: React.FC<IEmpty> = ({ title }) => {
  return <StyledEmpty>{title}</StyledEmpty>;
};

export default Empty;
