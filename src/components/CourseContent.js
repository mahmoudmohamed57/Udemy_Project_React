import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Content from './Content';

function CourseContent(props) {
  const items = props.content[1].map((obj) => (
    <Content item={obj} key={Math.random()}></Content>
  ));

  return props.isExpand ? (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>{props.content[0]}</Accordion.Header>
        <Accordion.Body>{items}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ) : (
    <Accordion>
      <Accordion.Item eventKey={props.index}>
        <Accordion.Header>{props.content[0]}</Accordion.Header>
        <Accordion.Body>{items}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CourseContent;
