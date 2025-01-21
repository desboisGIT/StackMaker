// PreviousButtonProps.tsx
import "../Buttons.css";

interface PreviousButtonProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function PreviousButton({ setStep }: PreviousButtonProps) {
  return (
    <div
      onClick={() => setStep((prevStep) => prevStep - 1)}
      className="button-back"
    >
      &lt; Back
    </div>
  );
}

export default PreviousButton;
