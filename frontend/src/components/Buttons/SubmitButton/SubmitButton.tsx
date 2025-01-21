// SubmitButton.tsx
import React from "react";

interface SubmitButtonProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isDisabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled, onClick }) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className="button">
      Submit
    </button>
  );
};

export default SubmitButton;
