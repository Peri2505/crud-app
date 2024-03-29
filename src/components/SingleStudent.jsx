import React from "react";
import { Button } from "reactstrap";
export default function SingleStudent({
  index,
  avatar,
  id,
  fname,
  lname,
  age,
  country,
  handleStudentDelete,
  toggle,
}) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>
        <img src={avatar} alt="" />
      </td>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{age}</td>
      <td>{country}</td>

      <td>
        <Button onClick={() => toggle(id, "edit")}>
          <i className="fa fa-pencil"></i>
        </Button>
        <Button color="danger" className="mx-2">
          <i className="fa fa-trash" onClick={() => toggle(id, "delete")}></i>
        </Button>
        <Button color="primary" onClick={() => toggle(id, "info")}>
          <i className="fa fa-info"></i>
        </Button>
      </td>
    </tr>
  );
}
