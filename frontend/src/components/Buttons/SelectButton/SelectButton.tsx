import { useState } from "react";
import "./SelectButton.css";

interface SelectButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  icon: string | null;
  icon2?: string;
  description?: string;
}

function SelectButton({
  label,
  isSelected,
  onClick,
  icon,
  icon2,
  description,
}: SelectButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="select-button-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onClick}
        className={`select-button ${isSelected ? "selected" : ""}`}
      >
        {icon && (
          <img
            src={icon}
            draggable="false"
            alt={`${label} icon`}
            className="button-icon"
          />
        )}
        {icon2 && (
          <img
            src={icon2}
            alt={`${label} secondary icon`}
            className="button-icon secondary-icon"
            draggable="false"
          />
        )}
        {label}
      </button>
      {description && isHovered && <div className="tooltip">{description}</div>}
    </div>
  );
}

export default SelectButton;
