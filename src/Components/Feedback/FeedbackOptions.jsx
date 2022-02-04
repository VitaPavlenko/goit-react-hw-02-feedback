import s from "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <div>
      {options.map((item) => {
        return (
          <button
            key={item}
            name={item}
            type="button"
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </div>
  </>
);

export default FeedbackOptions;
