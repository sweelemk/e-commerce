import classNames from "classnames";
import { StyledInputContainer, StyledInput } from "./input.styled";

type InputOwnProps = {
  size?: "large" | "medium" | "small";
  state?: "success" | "error" | "default";
  icon?: React.ReactNode;
};

type InputProps = InputOwnProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>;

const Input: React.FC<InputProps> = ({
  size = "medium",
  state = "default",
  icon,
  ...props
}) => {
  const containerClasses = classNames({
    [`input-preffix-${size}`]: size,
    [`input-preffix`]: icon,
  });
  const classes = classNames("input", {
    [`input-${size}`]: size,
    [`input-${state}`]: state,
  });
  return (
    <StyledInputContainer className={containerClasses}>
      {
        icon && <span className="icon">{icon}</span>
      }
      <StyledInput className={classes} {...props} />
    </StyledInputContainer>
  );
};

export default Input;
