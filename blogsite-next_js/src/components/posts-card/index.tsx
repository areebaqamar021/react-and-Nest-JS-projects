"use client"
import React from 'react';
import { Card } from 'antd';
import { IPost } from '@src/apis';
import Link from 'next/link';

function PostCard({ post }: { post: IPost }) {
  return (
    <Card title={post.title}>
      <Card type="inner" title="Post Details" extra={<Link href={`/posts/${post.id}`}>More</Link>}>
        {post.body}
      </Card>
    </Card>
  );
}

export default PostCard;
