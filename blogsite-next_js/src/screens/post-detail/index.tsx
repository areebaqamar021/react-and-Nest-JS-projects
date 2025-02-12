"use client";
import React from 'react';
import { Card, Typography, Divider, Tag, Spin } from 'antd';
import { LikeOutlined, DislikeOutlined, EyeOutlined } from '@ant-design/icons';
import { useGetPostDetail } from '@src/apis';

type PostDetailScreenProps = {
  id: number;
};

function PostDetailScreen(props: PostDetailScreenProps) {
  const { id } = props;
  const { data: post, isLoading } = useGetPostDetail({ id });

  if (isLoading) {
    return (
      <div className="flex justify-center p-10">
        <Spin />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center p-10">
        <Typography.Text type="danger">Failed to load post details.</Typography.Text>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Card className="shadow-md bg-white p-6 rounded-lg">
        <Typography.Title level={2} className="mb-4">
          {post.title}
        </Typography.Title>

        <Divider />

        <Typography.Paragraph className="text-gray-700 text-lg">
          {post.body}
        </Typography.Paragraph>

        <Divider />

        <div className="flex gap-2 mb-4">
          {post.tags.map((tag: string) => (
            <Tag key={tag} color="blue" className="capitalize">
              {tag}
            </Tag>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <LikeOutlined />
              <Typography.Text>{post.reactions?.likes} Likes</Typography.Text>
            </div>
            <div className="flex items-center gap-1">
              <DislikeOutlined />
              <Typography.Text>{post.reactions?.dislikes} Dislikes</Typography.Text>
            </div>
            <div className="flex items-center gap-1">
              <EyeOutlined />
              <Typography.Text>{post.views} Views</Typography.Text>
            </div>
          </div>
          <Typography.Text>User ID: {post.userId}</Typography.Text>
        </div>
      </Card>
    </div>
  );
}

export default PostDetailScreen;
