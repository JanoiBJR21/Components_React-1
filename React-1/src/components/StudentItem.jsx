import React from "react";
import './StudentItem.css';
// function StudentItem(){//ฟังก์ชันแบบปกติ
// const StudentItem = () =>{ //ฟังก์ชันแบบแอโรฟังก์ชัน
function StudentItem(props){
    // const resulte = false;
    // const message1 = "Hi Apichat"
    // const message2 = "Bye Wongtala"

    // const arr1 = [1, 2, 3]

    // let isShow = true;
    // let hiMessage = "Hi Apichat"

    // let arr2 = ["Hello", "World"]
    // let arr3 = [""]

    // let title = "ApiCHAt"

        const name = props.name;
        const surname = props.surname;
        const age = props.age;
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
            </div>
        );
    }
export default StudentItem;