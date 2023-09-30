import React from "react";
import Typography from "./Typography";

export interface ItemProp {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const ChallengeCard = ({ item }: { item: ItemProp }) => {
  return (
    <div
      className={`flex bg-gradient-to-r w-[100%] md:mb-3 md:p-3 ${
        item.id === 1 ? "from-blue-950 to-lime-950" : ""
      } py-2 px-4 shadow-lg`}>
      <div
        className={`${
          item.id === 1 ? "text-blue-50" : "text-blue-950"
        } opacity-80 mr-3 text-3xl font-bold`}>
        0{item.id}
      </div>
      <Typography
        variant="description"
        className={`${item.id === 1 ? "text-white" : ""}`}>
        {item.title.length > 60
        ? item.title.slice(0, 60) + '...' // Truncate the title if it's longer than 100 characters
        : item.title}
      </Typography>
    </div>
  );
};

export default ChallengeCard;
