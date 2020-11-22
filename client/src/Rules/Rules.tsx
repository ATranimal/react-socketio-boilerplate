import React from "react";
import "./Rules.scss";

interface RulesProp {
  rulesOpen: boolean;
  setRulesOpen: any;
}

export const Rules = (props: RulesProp) => {
  const { rulesOpen, setRulesOpen } = props;

  return (
    <div
      className="rules"
      onClick={() => {
        setRulesOpen(!rulesOpen);
      }}
    >
      {rulesOpen ? "Close Rules" : "Open Rules"}
    </div>
  );
};
