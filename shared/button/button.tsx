import React from "react";
import classNames from "classnames";
import { Loader } from "../loader";
import { ButtonStyled } from "./button.styled";

type ButtonOwnProps = {
  label: string | React.ReactElement;
  variant?: "primary" | "text" | "link" | "default";
  size?: "large" | "medium" | "small";
  loading?: boolean;
  block?: boolean;
  icon?: React.ReactElement;
  onlyIcon?: boolean;
};

type ButtonProps = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "medium",
  loading,
  block,
  icon,
  onlyIcon,
  label,
  ...props
}) => {
  const classes = classNames("btn", {
    [`btn-${size}`]: size,
    [`btn-${variant}`]: variant,
    [`btn-block`]: block,
    ["btn-loading"]: loading,
    ["btn-icon"]: icon,
    ["btn-icon-only"]: onlyIcon,
  });

  return (
    <ButtonStyled className={classes} {...props}>
      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : null}
      {
        !loading && icon ? <span className='icon'>{icon}</span> : null
      }
      {!onlyIcon ? <span>{label}</span> : null}
    </ButtonStyled>
  );
};

export default Button;
