export function Guest({guest}){
    return(
        <div>
            {
                guest.map(function(guests){
                    return(
                        <div>
                    <p>Name: {guests.name}</p>
                    <p>Age: {guests.age}</p>
                    <p>Departing from: {guests.departure}</p>
                    <button onClick={()=>{
                        fetch("http://localhost:3002/confirmed", {
                            method: "PUT",
                            body: JSON.stringify({
                                guestid: guests._id
                            }),
                            headers:{
                                "content-type":"application/json"
                            }
                        })
                        .then(async function(res){
                            const json = res.json();
                            alert("Status updated");
                        })
                    }}>{guests.confirmed == true? "confirmed":"Mark as confirmed"}</button>
                    </div>
                    )
                })
            }
            

        </div>
    )
}