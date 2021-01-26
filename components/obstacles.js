import React from "react";
import { View } from "react-native";

const Obstacles = ({
  color,
  obstaclesLeft,
  obstaclesWidth,
  obstaclesHeight,
  randomBottom,
  gap,
}) => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: randomBottom + obstaclesHeight + gap,
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: color,
          width: obstaclesWidth,
          height: obstaclesHeight,
          left: obstaclesLeft,
          bottom: 0,
        }}
      />
    </>
  );
};

export default Obstacles;
