import React from "react";
import styles from "./GamePlayDisplay.module.css";
import burna from "../../assets/burn.jpeg";
import davido from "../../assets/Davido.jpg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const artists = [
  {
    id: "davido",
    name: "Davido",
    thumb: davido,
  },
  {
    id: "burnaBoy",
    name: "Burna Boy",
    thumb: burna,
  },
];
const GamePlayDisplay = () => {
  return (
    <div className={styles.gamePlayDisplay}>
      <DragDropContext>
        <Droppable droppableId="artists">
          {(provided) => (
            <ul
              className={styles.artists}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {artists.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        key={id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className={styles.artistsThumb} style={{backgroundImage:`url(${thumb})`}}>
                        </div>
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default GamePlayDisplay;
