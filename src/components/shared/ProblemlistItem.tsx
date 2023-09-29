import React from "react";
import Arrow from "../../assets/challenges/arrow-pointing-to-right.png";
import { BsArrowRight } from "react-icons/bs";
export interface ListItemProp {
  id: number;
  description: string;
}
const ProblemListItem = ({ item }: { item: ListItemProp }) => {
  return (
    <div className="flex items-start justify-start mb-5">
      <BsArrowRight className="text-4xl mr-2" />
      <span className="">{item.description}</span>
    </div>
  );
};

export default ProblemListItem;
