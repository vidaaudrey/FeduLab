// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';

import { GALLERY_SECTION_IDEAS } from 'src/utils/appUtils';

export function ImageCover({ image, title }: { image: string, title: string }) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: '100%',
        height: 200,
        overflow: 'hidden',
        lineHeight: 0,
        backgroundSize: 'cover',
        backgroundImage: `url(${image})`,
      }}
      src={image}
      alt={title}
    />
  );
}

export default function PastIdeas() {
  return (
    <div className="PastIdeas bg-light text-xs-center p-y-3">
      <h2 className="font-xl font-weight-200">Past Ideas</h2>
      <p className="font-weight-200 m-b-1">
        Inspiration from past Make-a-thons.
        <Link
          to="gallery"
          className="text-secondary d-inline-block p-x-1s font-style-italic font-sm"
        >
          More
        </Link>
      </p>

      <Row gutter={0} className="m-b-3">
        <QueueAnim>
          {GALLERY_SECTION_IDEAS.map(({ featureImageUrl, title, link, id }) => (
            <Col key={id} xs={12} sm={6} lg={4}>
              {link && (
                <a href={link} title={title} target="_blank" rel="noopener noreferrer">
                  <ImageCover image={featureImageUrl} title={title} />
                </a>
              )}
              {!link && <ImageCover image={featureImageUrl} title={title} />}
            </Col>
          ))}
        </QueueAnim>
      </Row>
    </div>
  );
}
