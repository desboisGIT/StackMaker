import PreviousButton from "../../Buttons/PreviousButton/PreviousButton";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import SelectButton from "../../Buttons/SelectButton/SelectButton"; // Reusing SelectButton component
import Separator from "../../Separator/Separator";
import "../steps.css";

interface StepFiveProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedChoice: string | undefined; // The currently selected operating system
  setSelectedChoice: (choice: string) => void; // Function to update the choice
  selectedChoices: string[]; // Array holding selections for all steps
}

function StepFive({
  setStep,
  selectedChoice,
  setSelectedChoice,
  selectedChoices,
}: StepFiveProps) {
  const options = [
    {
      label: "Ubuntu",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg",
    },
    {
      label: "Windows",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg",
    },
    {
      label: "MacOS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    },
    {
      label: "Arch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
    },
  ];

  const handleSubmit = (_event: React.MouseEvent<HTMLButtonElement>) => {
    // Log the entire selection array
    console.log("Full selection:", selectedChoices);

    // Log individual selections like this:
    selectedChoices.forEach((choice, index) => {
      console.log(`Step ${index + 1}: ${choice}`);
    });
  };

  return (
    <div className="step-card">
      <div className="step-content">
        <h1>Choose your Operating System</h1>
        <Separator />
        <div className="options">
          {options.map((option) => (
            <SelectButton
              key={option.label}
              label={option.label}
              icon={option.icon}
              isSelected={selectedChoice === option.label}
              onClick={() => setSelectedChoice(option.label)}
            />
          ))}
        </div>
      </div>
      <div className="button-section">
        <PreviousButton setStep={setStep} />
        <div className="current-step">
          <p>5/5</p>
        </div>
        <SubmitButton
          setStep={setStep}
          isDisabled={!selectedChoice}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default StepFive;
