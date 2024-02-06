import React from "react";
import "./StudentItem.css";
import StudentTag from "./StudentTag";
import { useState } from "react";
// function StudentItem(){//ฟังก์ชันแบบปกติ
// const StudentItem = () =>{ //ฟังก์ชันแบบแอโรฟังก์ชัน
function StudentItem(props) {
  const surname = props.surname;
  const age = props.age;
  const [name, setName] = useState(props.name);
  const nameHandler = () => {
    setName("Chenged");
  };
  // if (age > 30) {
  //     retired = "อายุเกิน ";
  // }
  // else{
  //     if (age == 30) {
  //         retired = "อายุพอดี ";
  //     }
  //     else{
  //         retired = "อายุไม่ถึง";
  //     }
  // }
  return (
    <div className="StudentItem">
      {/* <div>{resulte ? message1 : message2}</div> */}
      {/* <div>{arr1}</div> */}
      {/* <div>{isShow && hiMessage}</div> */}
      {/* <div>{arr2}</div> */}
      {/* <div>{arr3.length > 0 && arr3}</div> */}
      {/* <div>{5 + 5}</div> */}
      {/* <div>{title.toUpperCase()}</div> */}
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      {/* <div>{retired}</div> */}
      <StudentTag tagAge={age} />
      <button onClick={nameHandler}>Cheng</button>
    </div>
  );
}
export default StudentItem;
