import React from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { FiTrash2, FiSearch } from "react-icons/fi";

export const IconNames = [
  "close",
  "arrow-keyboard-down",
  "arrow-keyboard-up",
  "trash",
  "search",
] as const;

type IconName = typeof IconNames[number];

type IconProps = {
  name: IconName;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case "close":
      return <MdClose />;
    case "arrow-keyboard-down":
      return <MdKeyboardArrowDown />;
    case "arrow-keyboard-up":
      return <MdKeyboardArrowUp />;
    case "trash":
      return <FiTrash2 />;
    case "search":
      return <FiSearch />;
    default:
      return <span>There is no icon with this name</span>;
  }
};

export default Icon;
