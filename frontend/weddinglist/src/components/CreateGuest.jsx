import { useState } from "react"

export function CreateGuest({list}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [departure, setDeparture] = useState("");

    return (
        <div> 
            <input type="text" placeholder="name" onChange={(e)=>{
                const value = e.target.value;
                setName(value);
            }}></input><br></br>

            <input type="text" placeholder="age" onChange={(e)=>{
                const value = e.target.value;
                setAge(value);
            }}></input><br></br>

            <input type="text" placeholder="Departure" onChange={(e)=>{
                const value = e.target.value;
                setDeparture(value);
            }}></input><br></br>

            <button id="addbtn" onClick={()=>{
                fetch("http://localhost:3002/list",{
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        age: age,
                        departure: departure
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                .then(async function(res){
                    const json = res.json();
                    alert("Guest Added");
                })
            }}>Add Guest</button><br></br>
        </div>
    )
}