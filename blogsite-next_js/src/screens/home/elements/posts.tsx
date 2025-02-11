import { Button, Typography, Spin, Empty } from "antd";
import Link from "next/link";
import { PostCard } from "@src/components";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function PostsSection() {
    // const { data, isLoading } = useGetProducts({
    //     limit: 8
    // });

    return (
        <div className="py-8 px-32">
            <div className="flex justify-between items-center mb-4">
                <div />
                <Typography.Title level={3}>Blog Posts</Typography.Title>
                <Link href="/products">
                    <Button icon={<ArrowRightOutlined />} iconPosition="end">
                        Show More
                    </Button>
                </Link>
            </div>
            {isLoading ? (
                <div className="flex justify-center p-10">
                    <Spin />
                </div>
            ) : !data?.products?.length ? (
                <Empty
                    description="No products"
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data?.products?.map((product) => (
                        <PostCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
}