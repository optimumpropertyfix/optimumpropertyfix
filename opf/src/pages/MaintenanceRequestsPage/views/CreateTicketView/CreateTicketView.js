import React, {useState} from "react";
export function AdminCreateTicketView() {
  return (
    <div>
      <p>CreateTicketView</p>
    </div>
  );
}

export function StudentCreateTicketView() {
  //first state is content passing in empty string, second is ticket
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [building, setBuilding] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticket = {title, description, building, notes};
    console.log(ticket);
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleBuilding = (e) => {
    setBuilding(e.target.value);
  }
  
  const handleNotes = (e) => {
    setNotes(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Submit a New Maintenance Ticket.</h1>
     <label>
       Title 
       </label>
       <br></br>
       <input 
       type="title" 
       value={ title }  
       onChange={handleTitle}/>
      <p>Ticket Description</p>
      <textarea value ={ description } onChange={handleDescription}></textarea>
      <label>
        <br></br>
        Building 
        <br></br>
        </label>
       <select
       value={building}
       onChange={handleBuilding}
       >
         <option value="argenta">Argenta Hall</option>
         <option value="canada">Canada Hall</option>
         <option value="canyon">Canyon Flats</option>
         <option value="greatbasin">Great Basin Hall</option>
         <option value="juniper">Juniper Hall</option>
         <option value="manzanita">Manzanita Hall</option>
         <option value="llc">The Nevada LLC</option>
         <option value="nye">Nye Hall</option>
         <option value="uncommon">Uncommon</option>
         <option value="peavine">Peavine Hall</option>
         <option value="sierra">Sierra Hall</option>
      </select>
      
      <p>Additional Notes</p>
      <textarea value={notes} onChange={handleNotes}></textarea>
      <br></br>
      <button>Submit Ticket!</button>
    </form>
  );
}

export default { AdminCreateTicketView, StudentCreateTicketView };
