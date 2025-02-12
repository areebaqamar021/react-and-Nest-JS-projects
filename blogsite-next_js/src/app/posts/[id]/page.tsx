import { PostDetailScreen } from '@src/screens';
import React from 'react';

type PostDetailScreenProps = {
  params: Promise<{
    id: number;
  }>;
};

async function ProductDetailPage(props: PostDetailScreenProps) {
  const params = await props.params;
  return <PostDetailScreen {...params} />;
}

export default ProductDetailPage;
