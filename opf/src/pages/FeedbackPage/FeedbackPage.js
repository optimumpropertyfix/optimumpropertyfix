import React, {useState} from "react";
export function AdminFeedbackPage() {
  return (
    <div>
      <p>AdminPage</p>
    </div>
  );
}

export function StudentFeedbackPage() {
  const [ticketSelection, setticketSelection] = useState("");
  const [rate, setRate] = useState("");
  const [qOne, setqOne] = useState("");
  const [qTwo, setqTwo] = useState("");
  const [qThree,setqThree] = useState("");

  const selectionHandler = (e) => {
    setticketSelection(e.target.value);
  }

  const rateHandler = (e) => {
    setRate(e.target.value);
  }

  const qOneHandler = (e) => {
    setqOne(e.target.value);
  }

  const qTwoHandler = (e) => {
    setqTwo(e.target.value);
  }

  const qThreeHandler = (e) => {
    setqThree(e.target.value);
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    const feedbackForm = {ticketSelection, rate, qOne, qTwo, qThree};
    console.log(feedbackForm);
  }


  return (
    <div>
      <h1>Submit Feedback</h1>
      <br></br>
      <form onSubmit={submitHandler}>
        <p>Select your request.</p>
        <select 
        value="ticket" 
        onChange={selectionHandler}>
          <option value="ticket_id_1">12345</option>
          <option value="ticket_id_2">12346</option>
          <option value="ticket_id_3">12347</option>
          <option value="ticket_id_4">12348</option>
        </select>
      
    <h2>Questionairre</h2>
      <br></br>
      <p>Were you satisfied with your service?</p>
      <textarea value={qOne} onChange={qOneHandler}>
      </textarea>
      <br></br>
      <p>Did maintenance attend to your needs right away?</p>
      <textarea value={qTwo} onChange={qTwoHandler}>
      </textarea>
      <br></br>
      <p>Feedback for the facility?</p>
      <textarea value={qThree} onChange={qThreeHandler}>
      </textarea>
      <br></br>
      <button>Submit Feedback</button>
      </form>
    </div>
  );
}

export default {AdminFeedbackPage, StudentFeedbackPage};