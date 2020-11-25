import Card from "./Card"
import MainVariable from '../data/MAINDATA.json'



const Due = () => {
    console.log(MainVariable);
    return (
        <article className="jizz">
        <div className="covid">
        <p>Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
    </div>
        <section className="ja">
           
            {MainVariable.map(user => <Card
                /* userImg={user.avatar} */
                userFoto={user.foto}
                userName={user.name}
                userDay={user.day}
                userUhr={user.uhr}
                userText={user.text}
                key={user.id}
            />)}
        </section>
        </article>
    );
}

export default Due;










       /*  <section id="first-section">

             <Card
                nameKey="Finn"
                alterKey="22"
                
            />
            <Card
                nameKey="Aos"
                alterKey="23"
                
            />
            <Card
                nameKey="Francis"
                alterKey="21"
                
            /> 
            
            
            {MainVariable.map((singleMain, index) => <Card
                name={singleMain.name}
                day={singleMain.day}
                uhr={singleMain.uhr}
                text={singleMain.text}
                
                key={index}
            />)}
        </section>
    );
}

export default Due; */