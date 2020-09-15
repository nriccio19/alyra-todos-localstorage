import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const ModeSwitch = () => {
  const { mode, setMode } = useContext(ModeContext);
  const handleModeChange = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="activate"
        checked={mode === "dark"}
        onChange={handleModeChange}
      />
      <label class="form-check-label" for="activate">
        {" "}
        Mode Sombre{" "}
      </label>
    </div>
  );
};

export default ModeSwitch;
