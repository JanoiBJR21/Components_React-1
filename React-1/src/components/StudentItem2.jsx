import React from "react";
import './StudentItem.css';
class StudentItem extends React.Component{//ฟังก์ชันแบบคลาส
    render(){
        let name = "Apichat";
        let surname = "Wongtala";
        let age = "27";
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
                <div>class components</div>
            </div>
        );
    }
}
export default StudentItem;