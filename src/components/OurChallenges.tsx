import CaseStudyImg from "../assets/challenges/case-study-trip-pro-our-challenges.png";
import Button from "./shared/Button";
import ChallengeCard, { ItemProp } from "./shared/ChallengeCard";
import { useAllPosts } from "../hooks/post-hook";
import Typography from "./shared/Typography";

const OurChallenges = () => {
  const { data, isLoading, isError } = useAllPosts();

  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="container">
        <div className="grid md:mt-0 grid-cols-1 md:grid-cols-2">
          <div></div>
          <div>
            <Typography
              variant="title"
              className="inline-block">
              OUR
            </Typography>
            <Typography
              variant="title"
              className="text-blue-950 inline-block ml-2">
              CHALLENGES
            </Typography>
          </div>
        </div>
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center my-5">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={CaseStudyImg}
              className="w-[65%] md:w-[90%] mb-5"
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
