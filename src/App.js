import logo from './logo.svg';
import './App.css';
import Classic from './componenten/Header'
import Thestory from './componenten/Main'
import Due from './componenten/Section1'
import Cocktail from './componenten/Section2'
import Bathtub from './componenten/Section3'


function App() {
  return (
    <main>
      <Classic />
      <Thestory />
      <Due />
      <Cocktail />
      <Bathtub />
    </main>
      

       
      
    
  );
}

export default App;




/* import Card from "./Card"
import supercoderVariable from '../data/supercoder.json'

const Section = () => {

    return (
        <section id="first-section">

            <Card
                nameKey="Finn"
                alterKey="22"
                img="https://picsum.photos/id/237/200/300"
            />
            <Card
                nameKey="Aos"
                alterKey="23"
                img="https://picsum.photos/id/227/200/300"
            />
            <Card
                nameKey="Francis"
                alterKey="21"
                img="https://picsum.photos/id/337/200/300"
            />
            <Card
                nameKey="Young"
                alterKey="18"
                img="https://picsum.photos/id/235/200/300"
            />
            <Card
                nameKey="Khaled"
                alterKey="22"
                img="https://picsum.photos/id/230/200/300"
            />
            {supercoderVariable.map((singleSupercoder, index) => <Card
                nameKey={singleSupercoder.name}
                alterKey={singleSupercoder.alter}
                img={singleSupercoder.img}
                key={index}
            />)}
        </section>
    );
}

export default Section; */
