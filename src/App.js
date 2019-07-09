import React, { useEffect, useState } from "react";

import {
  SafetyIndicator,
  PotentuallyHazardousAsteroids,
  FirstAsteroidThatHits,
  BiggestSmallestFastestSlowest,
  BigAsteroidsList,
  FastAsteroidsList
} from "./components";

import "./App.css";

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
  const [firstThatHits, setFirstThatHits] = useState({});
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

  const [bigAsteroids, setBigAsteroids] = useState([]);
  const [fastAsteroids, setFastAsteroids] = useState([]);
  const [safetyStatus, setSafetyStatus] = useState(false);

  // Run query to get asteroids
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
  // Update states when above query completes
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
      let bigAsteroidsArray = [];
      let fastAsteroidsArray = [];

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

          if (biggestComparison < asteroidAverageSize) {
            biggestComparison = asteroidAverageSize;
            biggest = element;
          }

          if (smallestComparison > asteroidAverageSize) {
            smallestComparison = asteroidAverageSize;
            smallest = element;
          }

          if (asteroidAverageSize >= sizeConsideredBig) {
            bigAsteroidsArray.push(element);
          }

          let asteroidSpeed = parseFloat(
            element.close_approach_data[0].relative_velocity
              .kilometers_per_second
          ).toFixed(2);

          if (fastestComparison < asteroidSpeed) {
            fastestComparison = asteroidSpeed;
            fastest = element;
          }

          if (slowestComparison > asteroidAverageSize) {
            smallestComparison = asteroidAverageSize;
            slowest = element;
          }

          if (asteroidSpeed >= speedConsideredFast) {
            fastAsteroidsArray.push(element);
          }
          let orbitDistance = parseInt(element.close_approach_data[0].miss_distance.kilometers)
          if (orbitDistance <= 5000){
            console.log(orbitDistance);
            setSafetyStatus(true)
          }
        });
      });

      // console.log(neoCount);
      setFourObjects({
        fastest,
        slowest,
        biggest,
        smallest
      });
      setPotentuallyHazardous(neoCount);
      setBigAsteroids([...bigAsteroids, ...bigAsteroidsArray]);
      setFastAsteroids([...fastAsteroids, ...fastAsteroidsArray]);
    }
  }, [asteroids]);

  return (
    <div className="wrapper">
      Asteroids app
      {asteroids ? (
        <div className="data">
          <SafetyIndicator danger={safetyStatus} />
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
