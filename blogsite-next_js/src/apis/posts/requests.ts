import { api } from "@src/lib";
import { useQuery } from "@tanstack/react-query";
import { GetPostsInput, GetPostsResponse } from "./dto";

export const useGetPosts = ({ limit, search }: GetPostsInput) => useQuery({
    queryKey: ["posts", limit, search],
    queryFn: async () => (await api.get<GetPostsResponse>(`/posts${search ? "/search" : ""}`, {
        params: { limit, q : search }
    })).data,
});
