import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function App() {
  const [name, setname] = useState("amel");
  const [counter, setcounter] = useState(0);
  const [person, setperson] = useState({
    name:"youssef",
    age:3,
  })
  const [students, setstudents] = useState([
    {
      name:"amel",age:30,img:"a.jpg"},]);

const [show, setshow] = useState(false);
      return (
    <div className="App">
     {name}
     <button onClick={()=> setname("amal")}>click</button>
     <br></br>
    {counter}<br></br>
    <button onClick={()=> setcounter(counter+1)}>+</button>
    
    <button onClick={()=> setcounter(counter-1)}>-</button>

<h1>{person.name}</h1>
<input type="text" onChange={(e)=>setperson({...person, name:e.target.value})}/>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

   <button className='btn' onClick={()=>setshow(!show)}> click to show amel</button>
   {show? <div className="box">
    {students.map((el)=> (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.age}
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
   </div>:null}
    </div>

  );
}

export default App;
