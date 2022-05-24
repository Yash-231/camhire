import { Card } from 'antd';
import { Photographers_card } from './photographers-card';

const { Meta } = Card;

export const Photographers_card_2 = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);