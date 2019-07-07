import React from 'react'
import SafetyIndicator from './components/SafetyIndicator'

function App() {


  const startDate= new Date().toISOString()
  const endDate = null

 console.log({startDate})

  return (

   <div> Asteroids app 
   
   <SafetyIndicator/>
   </div>
  );
}

export default App
