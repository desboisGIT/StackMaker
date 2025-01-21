// NextButton.tsx
import "../Buttons.css";

interface NextButtonProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isDisabled?: boolean;
}

function NextButton({ setStep, isDisabled = false }: NextButtonProps) {
  return (
    <button
      onClick={() => setStep((prevStep) => prevStep + 1)}
      className="button"
      disabled={isDisabled} // Works correctly with a button
    >
      Next
    </button>
  );
}

export default NextButton;
