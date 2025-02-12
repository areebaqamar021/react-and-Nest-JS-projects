import { api } from "@src/lib";
import { useQuery } from "@tanstack/react-query";
import { GetPostsInput, GetPostsResponse } from "./dto";

export const useGetPosts = ({ limit }: GetPostsInput) => useQuery({
    queryKey: ["posts", limit],
    queryFn: async () => (await api.get<GetPostsResponse>("/posts", {
        params: { limit }
    })).data,
});
