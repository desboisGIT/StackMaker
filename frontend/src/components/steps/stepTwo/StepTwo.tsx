import NextButton from "../../Buttons/NextButton/NextButton";
import PreviousButton from "../../Buttons/PreviousButton/PreviousButton";
import SelectButton from "../../Buttons/SelectButton/SelectButton"; // Use the reusable SelectButton component
import Separator from "../../Separator/Separator";
import "../steps.css";

interface StepTwoProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedChoice: string | undefined; // The currently selected choice
  setSelectedChoice: (choice: string) => void; // Function to update the choice
}

function StepTwo({ setStep, selectedChoice, setSelectedChoice }: StepTwoProps) {
  const options = [
    {
      label: "React TS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      icon2:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      label: "React JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      icon2:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      label: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    },
    {
      label: "Vue",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
    {
      label: "Svelte",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    },
  ];

  return (
    <div className="step-card">
      <div className="step-content">
        <h1>Choose your Frontend</h1>
        <Separator />
        <div className="options">
          {options.map((option) => (
            <SelectButton
              key={option.label}
              label={option.label}
              icon={option.icon}
              icon2={option.icon2}
              isSelected={selectedChoice === option.label}
              onClick={() => setSelectedChoice(option.label)}
            />
          ))}
        </div>
      </div>
      <div className="button-section">
        <PreviousButton setStep={setStep} />
        <div className="current-step">
          <p>2/5</p>
        </div>
        {/* Disable NextButton until a choice is made */}
        <NextButton setStep={setStep} isDisabled={!selectedChoice} />
      </div>
    </div>
  );
}

export default StepTwo;
