import { api } from "@src/lib";
import { useQuery } from "@tanstack/react-query";
import { GetPostDetailInput, GetPostsInput, GetPostsResponse, IPost } from "./dto";

export const useGetPosts = ({ limit, search }: GetPostsInput) => useQuery({
    queryKey: ["posts", limit, search],
    queryFn: async () => (await api.get<GetPostsResponse>(`/posts${search ? "/search" : ""}`, {
        params: { limit, q : search }
    })).data,
});

export const useGetPostDetail = ({id }: GetPostDetailInput) => useQuery({
    queryKey: ["single-post", id],
    queryFn: async () => (await api.get<IPost>(`/posts/${id}`)).data
})
