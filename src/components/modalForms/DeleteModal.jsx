import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function DeleteModal({ handleStudentDelete, toggle, stId }) {
  return (
    <div>
      <ModalHeader toggle={toggle}>Delete?</ModalHeader>
      <ModalBody>Are you sure you wanna delete this student?</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            handleStudentDelete(stId);
            toggle(stId, "delete");
          }}
        >
          Delete
        </Button>
        <Button onClick={() => toggle(null, null)}>Cancel</Button>
      </ModalFooter>
    </div>
  );
}
