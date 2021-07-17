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
      <GamePlayDisplay />
      {/* <Modal />  */}
    </PlaygroundLayout>
  );
};

export default Playground;

/* <Modal /> */

/* <FilterStrip/> */
/* <CircularImageCard image={burna} title='Burna Boy' description='Artist' />
            <CircularImageCard image={burna} title='Burna Boy' description='Artist' /> */
/* <span className='sectionTitle'>Browse All</span>
      <GridDisplay>
        <CircularImageCard
          image={burna}
          title="Burna Boy"
          description="Artist"
        />
        <CircularImageCard
          image={burna}
          title="Burna Boy"
          description="Artist"
        />
        <BoxImageCard image={burna} title="Burna Boy" description="Artist" />
        <BottomImageCard image={burna} title="Burna Boy" />
        <CircularImageCard
          image={burna}
          title="Burna Boy"
          description="Artist"
        />
        <BoxImageCard image={burna} title="Burna Boy" description="Artist" />
        <BottomImageCard image={davido} title="Davido" />
        <CircularImageCard
          image={burna}
          title="Burna Boy"
          description="Artist"
        />
        <BoxImageCard image={burna} title="Burna Boy" description="Artist" />
        <BottomImageCard image={burna} title="Burna Boy" />
        <CircularImageCard
          image={burna}
          title="Burna Boy"
          description="Artist"
        />
        <BoxImageCard image={davido} title="Davido" description="Artist" />
        <BottomImageCard image={burna} title="Burna Boy" />
      </GridDisplay> */
