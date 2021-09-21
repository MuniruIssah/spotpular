import React from "react";
import styles from "./Playground.module.css";
import burna from "../../assets/burn.jpeg";
import davido from "../../assets/Davido.jpg";

import PlaygroundLayout from "../../layouts/PlaygroundLayout/playgroundLayout";
import { FilterStrip } from "../../components/FilterStrip/filterStrip";
import { CircularImageCard } from "../../components/Cards/CircularImageCard/circularImageCard";
import GridDisplay from "../../components/GridDisplay/gridDisplay";
import { BoxImageCard } from "../../components/Cards/BoxImageCard/boxImageCard";
import { BottomImageCard } from "../../components/Cards/BottomImageCard/bottomImageCard";
import Modal from "../../components/Modal/modal";
import GamePlayDisplay from "../../components/GameplayDisplay/gamePlayDisplay";
const Playground = () => {
  return (
    <PlaygroundLayout>
      {/* <GamePlayDisplay /> */}
      <Modal /> 
      <FilterStrip />
      <GridDisplay>
      <BottomImageCard image={burna} title="Burna Boy" />
      <BottomImageCard image={davido} title="Davido" />
      <BottomImageCard image={burna} title="Burna Boy" />
      <BottomImageCard image={burna} title="Burna Boy" />
      <BottomImageCard image={davido} title="Davido" />
      <BottomImageCard image={burna} title="Burna Boy" />
      <BottomImageCard image={burna} title="Burna Boy" />
      <BottomImageCard image={davido} title="Davido" />
      <BottomImageCard image={burna} title="Burna Boy" />
      </GridDisplay> 
    </PlaygroundLayout>
  );
};

export default Playground;
