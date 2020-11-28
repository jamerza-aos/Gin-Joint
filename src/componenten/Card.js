const Card = (props) => {
    /* console.log(props.userImage); */
    return (     
        <section className="every">
            <div className="griid1">
            <div className="griid">
        <h3 style={{color:"white", background:`url(${props.userImage})`}}>
            {props.userName}<br/> {props.userName2}</h3>
                <h4 className="date2">{props.userDay}</h4>
                    <p className="time">{props.userUhr}</p>
                        <p className="textt">{props.userText}</p>
                </div>
            </div>
        </section>
        
    )
}

export default Card;


