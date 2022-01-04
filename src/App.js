
// import logo from './logo.svg';
import './App.css';
// import User from './User';
import { useState } from 'react';
function App() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [intrest, setIntrest] = useState("");
    function getFormData(e) {
        console.log(name,tnc,intrest);
        e.preventDefault()
    }
    return (
        <div className='App'>
            <h1>Handl Form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='enter name'   onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                <select onChange={(e)=>setIntrest(e.target.value)}>
                    <option>select option</option>
                    <option>Marvel</option>
                    <option>Dc</option>
                </select> <br /><br />
                <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /> <span> Accept Term and conditions</span>
                <br /><br />
                <button type="submit" >submit</button>
            </form>
        </div>


    );
}







export default App;
