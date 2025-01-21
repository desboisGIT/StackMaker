// StepOne.tsx
import NextButton from "../../Buttons/NextButton/NextButton";
import Separator from "../../Separator/Separator";
import SelectButton from "../../Buttons/SelectButton/SelectButton";
import "../steps.css";

interface StepOneProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedChoice: string | undefined;
  setSelectedChoice: (choice: string) => void;
}

function StepOne({ setStep, selectedChoice, setSelectedChoice }: StepOneProps) {
  const options = [
    {
      label: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      label: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
      label: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      label: "Ruby on Rails",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
    },
    {
      label: "ASP.NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      label: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      label: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    },
    {
      label: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      label: "Phoenix",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phoenix/phoenix-original.svg",
    },
  ];

  return (
    <div className="step-card">
      <div className="step-content">
        <h1>Choose your Backend</h1>
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
        <div></div>
        <div className="current-step">
          <p>1/5</p>
        </div>
        <NextButton setStep={setStep} isDisabled={!selectedChoice} />
      </div>
    </div>
  );
}

export default StepOne;
