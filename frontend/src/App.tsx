import { useState } from "react";
import "./style/App.css";
import StepOne from "./components/steps/StepOne/StepOne";
import StepTwo from "./components/steps/stepTwo/StepTwo";
import StepThree from "./components/steps/stepThree/StepThree";
import StepFour from "./components/steps/stepFour/StepFour";
import StepFive from "./components/steps/stepFive/StepFive";

function App() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [selectedChoices, setSelectedChoices] = useState<(string | string[])[]>(
    Array(5).fill("")
  ); // Allows string or string[] for each step

  // Update the selected choice(s) for the current step
  const setSelectedChoice = (stepIndex: number, choice: string | string[]) => {
    const updatedChoices = [...selectedChoices];
    updatedChoices[stepIndex - 1] = choice;
    setSelectedChoices(updatedChoices);
  };

  return (
    <>
      <h1 className="topLeft">StackMaker.dev</h1>
      <div className="PagePool">
        {/* Step 1 */}
        {step === 1 && (
          <StepOne
            setStep={setStep}
            selectedChoice={selectedChoices[0] as string}
            setSelectedChoice={(choice) => setSelectedChoice(1, choice)}
          />
        )}

        {/* Step 2 */}
        {step === 2 && (
          <StepTwo
            setStep={setStep}
            selectedChoice={selectedChoices[1] as string}
            setSelectedChoice={(choice) => setSelectedChoice(2, choice)}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <StepThree
            setStep={setStep}
            selectedChoice={selectedChoices[2] as string}
            setSelectedChoice={(choice) => setSelectedChoice(3, choice)}
          />
        )}

        {/* Step 4 */}
        {step === 4 && (
          <StepFour
            setStep={setStep}
            selectedChoice={selectedChoices[3] as string[]}
            setSelectedChoice={(choice) => setSelectedChoice(4, choice)}
          />
        )}

        {/* Step 5 */}
        {step === 5 && (
          <StepFive
            setStep={setStep}
            selectedChoice={selectedChoices[4] as string}
            setSelectedChoice={(choice) => setSelectedChoice(5, choice)}
            selectedChoices={selectedChoices as string[]} // Pass the full array for Step 5
          />
        )}
      </div>
    </>
  );
}

export default App;
