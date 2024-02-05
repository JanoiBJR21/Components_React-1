import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentItem from './components/StudentItem'
import StudentItem2 from './components/StudentItem2'

function App() {
// const student1 = {name: "Jar", surname: "nofy", age: 27};
// const student2 = {name: "dar", surname: "goty", age: 30};
// const student3 = {name: "mor", surname: "city", age: 45};
// const student4 = {name: "fer", surname: "nika", age: 30};

const studentList = [
  {name: "Jar", surname: "nofy", age: 27}, //studentList[0]
  {name: "dar", surname: "goty", age: 30}, //studentList[1]
  {name: "mor", surname: "city", age: 45}, //studentList[2]
  {name: "fer", surname: "nika", age: 30}  //studentList[3]
]

  return (
      <div className="App">
        <h1>Vite + React</h1>
        {/* <StudentItem name={student1.name} surname={student1.surname} age={student1.age}/>
        <StudentItem name={student2.name} surname={student2.surname} age={student2.age}/>
        <StudentItem name={student3.name} surname={student3.surname} age={student3.age}/>
        <StudentItem name={student4.name} surname={student4.surname} age={student4.age}/> */}

        <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}/>
        <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}/>
        <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}/>
        <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}/>
      </div>
  );
}
export default App;
