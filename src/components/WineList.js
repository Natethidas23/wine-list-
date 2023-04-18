import { useEffect } from "react"
import {useState} from "react"
import WineCard from "./WineCard"


export default function WineList(){

    const[theWines, setTheWines] = useState()
    const[color,setColor]= useState('reds')
    
    
    
    const getWines = () => {
        fetch(`https://api.sampleapis.com/wines/${color}`)
        .then(response => response.json())
        .then(data => setTheWines(data))
        .catch(alert)
    }

    useEffect(()=> {
        getWines()
    },[color])

    return(
                <section className="wine-list">
        <div className="buttons">
                <button onclick={()=> setColor('reds')}>Reds</button>
                <button onclick={()=> setColor('whites')}>Whites</button>
                <button onclick={()=> setColor('sparkling')}>Sparkling</button>
                <button onclick={()=> setColor('rose')}>Rose</button>
            </div>
            {(!theWines)
            ?<h2>Loading...</h2>
            : theWines.map(wine => (
                <WineCard key={wine.id} wine={wine}/>
            ))}
        </section>
    )
}