const AnnouncementForm = () => {
  return (
    <form>
      <div>
        <div>
          <label>
            <p>Title:</p>
            <input type="text" />
          </label>
          <label>
            <p>Answer:</p>
            <input type="answer" />
          </label>
          <label>
            <p>Date:</p>
            <input type="date" />
          </label>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};
export default AnnouncementForm;
