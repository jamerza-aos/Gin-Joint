import logo from './logo.svg';
import './App.css';
import Classic from './componenten/Header'
import Thestory from './componenten/Main'
import Due from './componenten/Section1'
import Cocktail from './componenten/Section2'
import Bathtub from './componenten/Section3'
import Contact from './componenten/Contact'
import Footer from './componenten/Footer'
import Shopsec from './componenten/Shopsec'
import Comming from './componenten/Comming'
import ContactUs from './componenten/ContactUs'
import Avenue from './componenten/132'
import Gettoush from './componenten/GetInToush'
//import Navigtion from './componenten/Navigation'
/* import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";
  import Navigtion from './componenten/Navigation' */


function App() {
  return (
      
    <main className="border">
      <Classic />
      <Thestory />
      <Due />
      <Cocktail /> 
      <Bathtub />
      <Contact /> 
      <Footer />
      <Shopsec />
      <Comming />
      <ContactUs />
      <Avenue />
      <Gettoush />


      {/* <Router>
       <Navigtion /> 
      <Switch>
      <Route path="/Home" exact >  <Home/> </Route>
      <Route path = "/Entertainment" > </Route>
      <Route path = "/Shop"  > <Shop/> </Route>
      <Route path = "/Events"  >   </Route>
      <Route path = "/Contact"   >  <Contact/></Route>
      </Switch>
    </Router> */}
    </main>
  )
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
