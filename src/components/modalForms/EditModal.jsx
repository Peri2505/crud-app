import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Button,
  ModalHeader,
  ModalBody,
} from "reactstrap";

export default function EditModal({ toggle, student, handleStudentEdit }) {
  const initialValues = { ...student };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // name = "fname"
    // value = "A"
    setValues({
      ...values,
      [name]: value, // fname: "A"
    });
  };

  //   obj = {
  //     name: "Alex",
  //     age: 10
  //   }
  // Object.keys(obj) => ["name", "age"]
  // Object.values(obj) => ["Alex", 10]

  const shallowEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys2) {
      if (object1[key] !== object2[key]) {
        // student.fname OR student["fname"] !== values["fname"]
        // student["lname"] !== values["lname"]
        // student["age"] !== values["age"]
        // ...
        return false;
      }
    }

    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const { fname, lname, age, company, country } = values;
    // if (fname.trim() !== '' && lname.trim() !== '' ) {
    // ["", "", ""....]
    if (!shallowEqual(student, values)) {
      handleStudentEdit(values);
    } else {
      alert("Nothing's changed!");
    }
    toggle(null, null);
  };

  const { fname, lname, age, company, country } = values;

  return (
    <>
      <ModalHeader toggle={toggle}>Edit Student?</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup row>
            <Label sm={2}>First Name *</Label>
            <Col sm={10}>
              <Input
                value={fname}
                onChange={handleInputChange}
                name="fname"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Last Name *</Label>
            <Col sm={10}>
              <Input
                value={lname}
                onChange={handleInputChange}
                name="lname"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Country *</Label>
            <Col sm={10}>
              <Input
                value={country}
                onChange={handleInputChange}
                name="country"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Company *</Label>
            <Col sm={10}>
              <Input
                value={company}
                onChange={handleInputChange}
                name="company"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Age *</Label>
            <Col sm={10}>
              <Input
                value={age}
                onChange={handleInputChange}
                name="age"
                type="number"
              />
            </Col>
          </FormGroup>
          <FormGroup className="d-flex justify-content-end">
            <Button className="me-3" color="primary">
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={() => toggle(null, null)}>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </>
  );
}
