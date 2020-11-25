import Card from "./Card"
import MainVariable from '../data/MAINDATA.json'



const Due = () => {
    /* console.log(MainVariable); */
    return (
        <article className="jizz">
        <div className="covid">
        <p>Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
    </div>
        <section className="ja">
           
            {MainVariable.map(singleData => <Card
                /* userImg={user.avatar} */
               
                userName={singleData.name}
                userDay={singleData.day}
                userUhr={singleData.uhr}
                userText={singleData.text}
                userImg= {singleData.image}
                key={singleData.id}

               
            />)}
        </section>
        </article>
    );
}

export default Due;









/* import bandData from "../data/bands.json"
import Card from "./Card"

const Jazz = () => {
    return ( 
        <section id="jazz">
            <p id="covid">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
        <div id="cards">
        {bandData.map(singleData =>  <Card 
            bandGenre = {singleData.genre}
            bandDate = {singleData.date}
            bandTime = {singleData.time}
            bandDescription = {singleData.description}
            bandImg = {singleData.image}
            key = {singleData.id}
            
        />)}
        </div>
        </section>
     );
}
 
export default Jazz; */