import { InputGroup, InputGroupText, Input, Button } from "reactstrap";
import React, { Component } from "react";
import Search from "./Search";

export default function Header({
  searchQuery,
  setSearchQuery,
  modalAction,
  setModalaction,
  toggle,
  modal,
  setModal,
}) {
  const handleAddBtnClick = () => {
    setModal(true);
    setModalaction("add");
  };

  return (
    <InputGroup className="w-50 my-2 mx-auto">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Button className="ms-2" color="primary" onClick={handleAddBtnClick}>
        Add New Student
      </Button>
    </InputGroup>
  );
}
