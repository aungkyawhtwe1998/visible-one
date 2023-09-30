import React from "react";
import Arrow from "../../assets/challenges/arrow-pointing-to-right.png";
import { BsArrowRight } from "react-icons/bs";
import Typography from "./Typography";
export interface ListItemProp {
  id: number;
  description: string;
}
const ProblemListItem = ({ item }: { item: ListItemProp }) => {
  return (
    <div className="flex items-start justify-start mb-2 md:mb-5">
      <BsArrowRight className="text-4xl mr-2" />
      <Typography variant="description">{item.description}</Typography>
    </div>
  );
};

export default ProblemListItem;
