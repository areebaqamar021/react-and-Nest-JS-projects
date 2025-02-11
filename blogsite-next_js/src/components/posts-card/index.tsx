import React from 'react';
import { Card } from 'antd';

const PostCard = () => (
  <Card title="Card title">
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
  </Card>
);

export default PostCard;