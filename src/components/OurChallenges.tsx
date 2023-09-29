import CaseStudyImg from "../assets/challenges/case-study-trip-pro-our-challenges.png";
import Button from "./shared/Button";
import ChallengeCard, { ItemProp } from "./shared/ChallengeCard";
import { useAllPosts } from "../hooks/post-hook";

const OurChallenges = () => {
  const { data, isLoading, isError } = useAllPosts();

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="container">
        <div className="grid md:mt-0 mt-40 grid-cols-1 md:grid-cols-2">
          <div></div>
          <div>
            <span className="text-3xl md:text-6xl">OUR</span>
            <span className="text-3xl md:text-6xl text-blue-950">
              {" "}
              CHALLENGES
            </span>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center my-5">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={CaseStudyImg}
              className="w-[90%]"
              alt=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-start">
            {data?.slice(0, 5).map((item) => (
              <ChallengeCard
                key={item.id}
                item={item}
              />
            ))}

            <Button text="view more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChallenges;
