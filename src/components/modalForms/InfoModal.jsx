import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

export default function InfoModal({
  toggle,
  fname,
  lname,
  avatar,
  country,
  company,
  age,
}) {
  return (
    <>
      <ModalHeader toggle={toggle}>
        Info about {fname} {lname}
      </ModalHeader>
      <ModalBody>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src={avatar} />
          <CardBody>
            <CardTitle tag="h5">
              {fname} {fname}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {age} years old
            </CardSubtitle>
            <CardText>Works in {company}</CardText>
          </CardBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => toggle(null, null)}>Close</Button>
      </ModalFooter>
    </>
  );
}
