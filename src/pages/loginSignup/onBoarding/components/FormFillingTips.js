import React from "react";
import "./FormFillingTips.css";
import { MdTipsAndUpdates } from "react-icons/md";

const FormFillingTips = ({ tips }) => {
  return (
    <div className="kn-form-filling-tips">
      <h3>
        <MdTipsAndUpdates />
        Tips
      </h3>
      <p>{tips}</p>
    </div>
  );
};

export default FormFillingTips;
