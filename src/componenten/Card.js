const Card = (props) => {
    // console.log(props);
    return (
        
        
            
        <section className="every">
             <div className="image" style={{backgroundImage:`url(${props.userImage})`}}>
                <h3>{props.userName}</h3>
            </div>
            <div>
                <h4 className="date">{props.userDay}</h4>
                <p className="time">{props.userUhr}</p>
                <p className="textt">{props.userText}</p>
            </div>
      
        </section>
        
    );
}

export default Card;


