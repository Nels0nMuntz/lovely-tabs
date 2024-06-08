import { ICONS } from "@/constants";
import { IconProps } from "./types";

export const Icon: React.FC<IconProps> = ({ name, ...iconProps }) => {
  return ICONS[name](iconProps);
};
