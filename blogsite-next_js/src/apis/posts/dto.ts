export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReaction;
    views: number;
    userId: number;
}

export interface IReaction {
    likes: number;
    dislikes: number;
}

export type GetPostsInput = {
    limit?: number;
    search?: string;
    tags?: string[];
};

export type GetPostsResponse = {
    posts: IPost[];
    limit: number;
    skip: number;
    total: number;
};

export type GetPostDetailInput = {
    id?: number;
};
