import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Button from './Components/Button';

function App() {
  const [index, setIndex] = useState(0);

  const hero = [
    { name: "Asterix", imgSrc: "./src/assets/asterix.png", desc: "Asterix est un personnage de fiction créé par René Goscinny et Albert Uderzo dans la bande dessinée Astérix en 1959. Il est le meilleur ami d’Astérix et l’accompagne dans chacune de ses aventures, excepté la première." },
    { name: "Obelix", imgSrc: "https://i.pinimg.com/564x/e1/75/42/e1754274960dd25852e7d0e9d937bd4d.jpg", desc: "Obélix est un personnage de fiction créé par Re" }
  ]

  const handleClickPrevious = () => { (index > 0 ? setIndex(index - 1) : "") }

  const handleClickNext = () => { (index < hero.length - 1 ? setIndex(index + 1) : "") }

  return <>
    <Hero name={hero[index].name} imgSrc={hero[index].imgSrc} desc={hero[index].desc} />
    <Button next={handleClickNext} previous={handleClickPrevious} />
  </>
}

export default App
