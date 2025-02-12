"use client";
import { useGetPosts } from "@src/apis"; 
import { PostCard } from "@src/components";
import { Empty, Spin, Typography, Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";

function PostsScreen() {
    const [search, setSearch] = useState("");
    const { data, isLoading } = useGetPosts({
        search: search === "" ? undefined : search,
    });
    const { Search } = Input;

    return (
        <div>
            <div className="relative w-full h-[50vh]">
                <Image
                    src="/images/banner.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Blog Banner"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Typography.Title level={1} className="text-2xl md:text-4xl text-white font-semibold">
                        Blog
                    </Typography.Title>
                    <p className="font-medium text-white">Home &gt; Blog</p>
                </div>
            </div>

            <div className="flex justify-center items-center px-5 my-3">
                <Search
                    placeholder="Search for posts"
                    onSearch={setSearch}
                    style={{ width: 300 }}
                />
            </div>

            <div className="p-8">
                {isLoading ? (
                    <div className="flex justify-center p-10">
                        <Spin />
                    </div>
                ) : !data?.posts.length ? (
                    <Empty description="No posts found" />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {data?.posts.map((post) => (
                            <PostCard post={post} key={post.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostsScreen;
