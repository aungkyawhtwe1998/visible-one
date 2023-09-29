import { useQuery, useQueryClient, useMutation } from "react-query";
import postService from "../service/post-service";
import { ItemProp } from "../components/shared/ChallengeCard";
const useAllPosts = () => {
  return useQuery<ItemProp[]>("posts", () =>
    postService.getAllPosts().then((response) => response.data)
  );
};

export { useAllPosts };
