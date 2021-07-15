import React from "react";
import { HowTo } from "../../../components/HowTo/howTo";
import LoudText from "../../../components/LoudText/loudText";
import StartButton from "../../../components/StartButton/startButton";

const LandingPageContent = () => {
  return (
    <>
      <LoudText />
      <StartButton />
      <HowTo />
    </>
  );
};

export default LandingPageContent;
