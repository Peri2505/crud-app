import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DeleteModal from "./modalForms/DeleteModal";
import InfoModal from "./modalForms/InfoModal";
import AddStudentsModal from "./modalForms/AddStudentsModal";
import EditModal from "./modalForms/EditModal";

function AddModal({
  modal,
  toggle,
  handleStudentDelete,
  stId,
  modalAction,
  student,
  handleStudentAdd,
  handleStudentEdit,
}) {
  //   const [modal, setModal] = useState(false);

  //   const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {modalAction === "delete" && (
          <DeleteModal
            handleStudentDelete={handleStudentDelete}
            toggle={toggle}
            stId={stId}
          />
        )}
        {modalAction === "add" && (
          <AddStudentsModal
            toggle={toggle}
            handleStudentAdd={handleStudentAdd}
          />
        )}
        {modalAction === "edit" && (
          <EditModal
            student={student}
            toggle={toggle}
            handleStudentEdit={handleStudentEdit}
          />
        )}
        {modalAction === "info" && <InfoModal {...student} toggle={toggle} />}
      </Modal>
    </div>
  );
}

export default AddModal;
