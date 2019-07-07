import React from "react";
import SafetyIndicator from "./components/SafetyIndicator";
// import PotentuallyHazardousAsteroids from "./components/PotentuallyHazardousAsteroids";
// import FirstAsteroidThatHits from "./components/FirstAsteroidThatHits";
// import BiggestSmallestFastestSlowest from "./components/BiggestSmallestFastestSlowest";
// import BigAsteroidsList from "./components/SafetyIndiBigAsteroidsListcator";
// import FastAsteroidsList from "./components/FastAsteroidsList";

function App() {
  const yearRange = 2;
  const startDate = new Date();
  const endDate = new Date(
    startDate.getFullYear() + yearRange,
    startDate.getMonth(),
    startDate.getDate()
  )

  const startDateString = startDate.toISOString().slice(0, 10);
  const endDateString = endDate.toISOString().slice(0, 10);



  console.log({ startDateString, endDateString });
  
  return (
    <div>
      Asteroids app
      <SafetyIndicator />
      {/* <PotentuallyHazardousAsteroids />
      <FirstAsteroidThatHits />
      <BiggestSmallestFastestSlowest />
      <BigAsteroidsList />
      <FastAsteroidsList /> */}
    </div>
  );
}

export default App;
