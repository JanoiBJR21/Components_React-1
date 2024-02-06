import React, { useState } from "react";
import "./NewStudentItem.css";

const NewStudentItem = () => {
  const [curNam, setCurNam] = useState("");
  const [curSurname, setCurSurname] = useState("");
  const [curAge, setCurAge] = useState("");

  const nameChangHandler = (event) => {
    setCurNam(event.target.value);
  };
  const surnameChangHandler = (event) => {
    setCurSurname(event.target.value);
  };
  const ageChangHandler = (event) => {
    setCurAge(event.target.value);
  };
  const submitHanler = (event) => {
    event.preventDefault();
    // console.log("submitHandler");
    const newStudent = {
      name: curNam,
      surname: curSurname,
      // age: curAge, //ยังไม่แปลงเป็น number
      age: Number(curAge), //แปลงเป็น number
    };
    console.log(newStudent);
    setCurNam("");
    setCurSurname("");
    setCurAge("");
  };

  return (
    <form onSubmit={submitHanler}>
      <div className="NewStudentContainer">
        <div className="StudentInput">
          <label>Name</label>
          <input value={curNam} onChange={nameChangHandler} type="text" />
        </div>
        <div className="StudentInput">
          <label>Surname</label>
          <input
            value={curSurname}
            onChange={surnameChangHandler}
            type="text"
          />
        </div>
        <div className="StudentInput">
          <label>Age</label>
          <input
            value={curAge}
            onChange={ageChangHandler}
            type="number"
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>
      <div className="SubmitButton">
        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};
export default NewStudentItem;
