import NextButton from "../../Buttons/NextButton/NextButton";
import PreviousButton from "../../Buttons/PreviousButton/PreviousButton";
import SelectButton from "../../Buttons/SelectButton/SelectButton"; // Reusable SelectButton component
import Separator from "../../Separator/Separator";
import "../steps.css";

interface StepFourProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedChoice: string[]; // The currently selected functionalities
  setSelectedChoice: (choice: string[]) => void; // Function to update the choices
}

function StepFour({
  setStep,
  selectedChoice,
  setSelectedChoice,
}: StepFourProps) {
  const options = [
    {
      label: "Authentication",
      description: "Implement user login and registration",
    },
    { label: "File Storage", description: "Enable file uploading and storage" },
    {
      label: "API Integration",
      description: "Connect your app to third-party APIs",
    },
    {
      label: "Email Service",
      description: "Integrate email services like SendGrid",
    },
    {
      label: "Real-Time Data",
      description: "Enable WebSockets or live updates",
    },
    { label: "No thanks", description: "Minimum Viable Product (MVP)" },
  ];

  const toggleChoice = (label: string) => {
    if (selectedChoice.includes(label)) {
      setSelectedChoice(selectedChoice.filter((choice) => choice !== label));
    } else {
      setSelectedChoice([...selectedChoice, label]);
    }
  };

  return (
    <div className="step-card">
      <div className="step-content">
        <h1>Choose Functionalities</h1>
        <Separator />
        <div className="options">
          {options.map((option) => (
            <SelectButton
              key={option.label}
              label={option.label}
              icon={null}
              description={option.description}
              isSelected={selectedChoice.includes(option.label)}
              onClick={() => toggleChoice(option.label)}
            />
          ))}
        </div>
      </div>
      <div className="button-section">
        <PreviousButton setStep={setStep} />
        <div className="current-step">
          <p>4/5</p>
        </div>
        {/* Disable NextButton until at least one choice is made */}
        <NextButton
          setStep={setStep}
          isDisabled={selectedChoice.length === 0}
        />
      </div>
    </div>
  );
}

export default StepFour;
