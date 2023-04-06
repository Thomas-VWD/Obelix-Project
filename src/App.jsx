import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Button from './Components/Button';

function App() {
  const [index, setIndex] = useState(0);

  const hero = [
    { name: "Asterix", imgSrc: "./src/assets/asterix.png", desc: "Asterix est un personnage de fiction, il est le fils d'Astronomix et Praline, le meilleur ami d'Obélix et personnage principale de la série du même nom" },
    { name: "Obelix", imgSrc: "https://i.pinimg.com/564x/e1/75/42/e1754274960dd25852e7d0e9d937bd4d.jpg", desc: "Obélix est un personnage de fiction. Il est le meilleur ami d'astérix et le meilleur porteur de ménir du pays" },
    { name: " Falbalas", imgSrc: "https://i.pinimg.com/564x/35/3d/0c/353d0c4c335937f6bfdec09f853d8db6.jpg", desc: "Falbala est un personnage de fiction créé par René Goscinny et Albert Uderzo dans la bande dessinée Astérix en 1959. Il est le meilleur ami d’Astérix et l’accompagne dans chacune de ses aventures, excepté la première." },
    {name: "idéfix", imgSrc:"https://qph.cf2.quoracdn.net/main-qimg-d50dcd0c50f73cd0ca755d2bd0edbb98", desc:"C'est la chien d'Obélix"}
  ]

  const handleClickPrevious = () => { (index > 0 ? setIndex(index - 1) : "") }

  const handleClickNext = () => { (index < hero.length - 1 ? setIndex(index + 1) : "") }

  return <>
    <Hero name={hero[index].name} imgSrc={hero[index].imgSrc} desc={hero[index].desc} />
    <Button next={handleClickNext} previous={handleClickPrevious} />
  </>
}

export default App
