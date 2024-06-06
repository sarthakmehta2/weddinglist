
export function Guest({guest}){
    let i = 0;

        const handlingconfirm= function(guestId){
            fetch("http://localhost:3002/confirmed", {
                method: "PUT",
                body: JSON.stringify({
                    guestid: guestId
                }),
                headers:{
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = res.json();
                alert("Guest updated");
            })
        }

        const handlingdelete = function(guestId){
            fetch("http://localhost:3002/delete", {
                method: "PUT",
                body: JSON.stringify({
                    guestid: guestId
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                alert("guest deleted")
            })
        }

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Departing from</th>
                        <th>Confirmed?</th>
                        <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {guest.map(function(guests){
                         i=i+1;
                        return(
                                             <tr>
                            <td>{i}</td>
                            <td>{guests.name}</td>
                            <td>{guests.age}</td>
                            <td>{guests.departure}</td>
                            <td><button id="confirmbtn" onClick={()=>handlingconfirm(guests._id)}>{guests.confirmed == true? "confirmed": "Mark as confirmd?"}</button></td>
                            <td><button id="deletebtn" onClick={()=>handlingdelete(guests._id)}>X</button></td>
                        </tr>
              
                           
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )

    

}