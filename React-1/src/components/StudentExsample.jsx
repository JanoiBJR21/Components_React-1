import React from "react";
function StudentExsample(props) {
  // console.log("children",props.children)
  return (
    <div>
      <h3>StudentExsample = </h3>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          style: { color: "green", fontSize: "25px" },
        })
      )}
    </div>
  );
}
export default StudentExsample;
