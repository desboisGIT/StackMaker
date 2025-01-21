// StepThree.tsx
import NextButton from "../../Buttons/NextButton/NextButton";
import PreviousButton from "../../Buttons/PreviousButton/PreviousButton";
import SelectButton from "../../Buttons/SelectButton/SelectButton"; // Reusing SelectButton component
import Separator from "../../Separator/Separator";
import "../steps.css";

interface StepThreeProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedChoice: string | undefined; // The currently selected database choice
  setSelectedChoice: (choice: string) => void; // Function to update the choice
}

function StepThree({
  setStep,
  selectedChoice,
  setSelectedChoice,
}: StepThreeProps) {
  const options = [
    {
      label: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      label: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      label: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      label: "SQLite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
    {
      label: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    },
  ];

  return (
    <div className="step-card">
      <div className="step-content">
        <h1>Choose your Database</h1>
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
          <p>3/5</p>
        </div>
        {/* Disable NextButton until a choice is made */}
        <NextButton setStep={setStep} isDisabled={!selectedChoice} />
      </div>
    </div>
  );
}

export default StepThree;
