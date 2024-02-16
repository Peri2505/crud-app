import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AddModal({modal,toggle,handleStudentDelete, stId}) {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
Are you sure you wanna delete this student?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={()=>{
            handleStudentDelete(stId);toggle()
          }}>
            Delete
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddModal;