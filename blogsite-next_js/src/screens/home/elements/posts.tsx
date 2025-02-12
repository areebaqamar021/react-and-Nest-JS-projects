import { Button, Typography, Spin, Empty } from "antd";
import Link from "next/link";
import { PostCard } from "@src/components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useGetPosts } from "@src/apis";

export default function PostsSection() {
    const { data, isLoading } = useGetPosts({
        limit: 6
    });

    return (
        <div className="py-8 px-32">
            <div className="flex justify-between items-center mb-4">
                <div />
                <Typography.Title level={3}>Blog Posts</Typography.Title>
                <Link href="/posts">
                    <Button icon={<ArrowRightOutlined />} iconPosition="end">
                        Show More
                    </Button>
                </Link>
            </div>
            {isLoading ? (
                <div className="flex justify-center p-10">
                    <Spin />
                </div>
            ) : !data?.posts?.length ? (
                <Empty description="No posts" />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {data?.posts?.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
