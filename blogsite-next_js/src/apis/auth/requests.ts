import { api } from "@src/lib";
import { IUser, LoginInput } from "./dto";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./actions";

export const loginApi = async (v: LoginInput) => (await api.post<IUser>("/auth/login", { ...v, expiresInMins: 30 })).data

export const useGetUser = () => useQuery({
    queryKey: ["user"],
    queryFn: getUser
})