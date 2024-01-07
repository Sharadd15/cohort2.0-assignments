import { useEffect, useState } from 'react';
import { BusinessCard } from './Components/BusinessCard'
function App() {
  const [businessCards, setBusinessCards] = useState([]);
  
  useEffect(function(){
    fetch('http://localhost:3000/businessCards', {
    headers: {
         "Content-Type": "application/json"
      },
    })
    .then(async function(response) {
      // Handle the response
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json(); // or response.text(), response.blob(), etc.
      setBusinessCards(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {businessCards.map(element =>{
        //console.log(element)
        return <BusinessCard key={element._id} id={element._id} Name={element.name} Description={element.description} Interests={element.interests} LinkdinLink={element.linkdinUrl} TwitterLink={element.twitterUrl}></BusinessCard>
      })}
    </div>
    
);
}

export default App
