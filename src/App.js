import React, { useEffect, useState } from "react";
import SafetyIndicator from "./components/SafetyIndicator";
import PotentuallyHazardousAsteroids from "./components/PotentuallyHazardousAsteroids";
import FirstAsteroidThatHits from "./components/FirstAsteroidThatHits";
import BiggestSmallestFastestSlowest from "./components/BiggestSmallestFastestSlowest";
import BigAsteroidsList from "./components/BigAsteroidsList";
import FastAsteroidsList from "./components/FastAsteroidsList";

function App() {
  const yearRange = 2;
  const startDate = new Date();
  const endDate = new Date(
    startDate.getFullYear() + yearRange,
    startDate.getMonth(),
    startDate.getDate()
  );

  const startDateString = startDate.toISOString().slice(0, 10);
  const endDateString = endDate.toISOString().slice(0, 10);
  const API_KEY = "KqFy81Vfwhv8CPaExrwDRSHEJAUw0Bd5hl1KSkar";

  const FEED_URL =
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
    startDateString +
    // "&end_date=" +
    // endDateString +
    "&api_key=" +
    API_KEY;

  const BROWSE_URL =
    "https://api.nasa.gov/neo/rest/v1/neo/browse?page=1&size=40&api_key=" +
    API_KEY;

  const DIFFERENT_URL =
    "https://ssd-api.jpl.nasa.gov/cad.api?www=1&nea-comet=Y&dist-max=0.05&fullname=true&date-min=" +
    startDateString +
    "&date-max=" +
    endDateString;

  const [asteroids, setAsteroids] = useState(null);
  const [potentuallyHazardous, setPotentuallyHazardous] = useState(0);
  const [firstThatHits, setFirstThatHits] = useState("");
  const [fourObjects, setFourObjects] = useState({
    fastest: {
      name: "Fastest"
    },
    slowest: {
      name: "Slowest"
    },
    biggest: {
      name: "Biggest"
    },
    smallest: {
      name: "Smallest"
    }
  });

  const [bigAsteroids,setBigAsteroids] = useState([])
  const [fastAsteroids,setFastAsteroids] = useState([])

  useEffect(() => {
    fetch(FEED_URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json);
        setAsteroids(json);
      });
  }, []);

  useEffect(() => {
    if (asteroids) {
      const NEO = asteroids.near_earth_objects;
      let neoCount = 0;
      let firstHitTime = 3441648680000;

      let fastestComparison = 0;
      let fastest = 0;
      let biggestComparison = 0;
      let biggest = 0;
      let slowestComparison = 999999;
      let slowest = 0;
      let smallestComparison = 999999;
      let smallest = 0;

      let sizeConsideredBig = 0.2 * 1000;
      let speedConsideredFast = 19.48;

      Object.entries(NEO).forEach(([key, value]) => {
        value.forEach(element => {
          if (element.is_potentially_hazardous_asteroid) {
            neoCount++;
          }
          let asteroidApproachTime =
            element.close_approach_data[0].epoch_date_close_approach;
          if (asteroidApproachTime < firstHitTime) {
            firstHitTime = asteroidApproachTime;
            setFirstThatHits(element);
          }

         

          if (asteroidApproachTime < firstHitTime) {
            firstHitTime = asteroidApproachTime;
            setFirstThatHits(element);
          }

          let asteroidAverageSize =
          (Math.round(
            element.estimated_diameter.meters.estimated_diameter_min * 1000
          ) /
            1000 +
            Math.round(
              element.estimated_diameter.meters.estimated_diameter_max * 1000
            ) /
              1000) /
          2;

          if (biggestComparison < asteroidAverageSize){
            biggestComparison = asteroidAverageSize;
            biggest = element;
          }

          if (smallestComparison > asteroidAverageSize){
            smallestComparison = asteroidAverageSize;
            smallest = element;
          }

          if(asteroidAverageSize >= sizeConsideredBig){
            setBigAsteroids([...bigAsteroids, element])
          }

          let asteroidSpeed = parseFloat(element.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(2);
          
          if (fastestComparison < asteroidSpeed){
            fastestComparison = asteroidSpeed;
            fastest = element;
          }

          if (slowestComparison > asteroidAverageSize){
            smallestComparison = asteroidAverageSize;
            slowest = element;
          }

          if(asteroidSpeed >= speedConsideredFast){
            setFastAsteroids([...fastAsteroids, element])
          }
        });
      });

      // console.log(neoCount);
      setFourObjects({
        fastest,
        slowest,
        biggest,
        smallest
      })
      setPotentuallyHazardous(neoCount);
    }
  }, [asteroids]);

  return (
    <div>
    { console.log(bigAsteroids, fastAsteroids)}
      Asteroids app
      {asteroids ? (
        <div className="data">
          <SafetyIndicator />
          <PotentuallyHazardousAsteroids value={potentuallyHazardous} />
          <FirstAsteroidThatHits asteroid={firstThatHits} />
          <BiggestSmallestFastestSlowest stats={fourObjects} />
          <BigAsteroidsList list={bigAsteroids} />
        <FastAsteroidsList list={fastAsteroids} />
        </div>
      ) : (
        <div> Loading Data From API </div>
      )}
    </div>
  );
}

export default App;
