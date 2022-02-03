import s from "./Feedback.css";

const Feedback = ({ click }) => (
  <>
    <div>
      <button id="good" type="button" onClick={click}>
        Good
      </button>
      <button id="neutral" type="button" onClick={click}>
        Neutral
      </button>
      <button id="bad" type="button" onClick={click}>
        Bad
      </button>
    </div>
  </>
);

export default Feedback;
