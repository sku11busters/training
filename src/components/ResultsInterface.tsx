type TrainingProps = {
  training: {
    distance: number;
    date: string;
  };
  deleteDataSteps: (date: string) => void;
};
const ResultsInterface: React.FC<TrainingProps> = ({
  training,
  deleteDataSteps,
}) => {
  const date =
    (training.date && new Date(training.date).toLocaleDateString()) || "";

  return (
    <div className="formSteps">
      <div className="results_steps-item spanText">{date}</div>
      <div className="results_steps-item spanText">{training.distance}</div>

      <button
        className="content-btn delete"
        onClick={() => training.date && deleteDataSteps(training.date)}
      >
        delete
      </button>
    </div>
  );
};

export default ResultsInterface;
