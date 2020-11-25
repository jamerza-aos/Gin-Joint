const Card = (props) => {
    // console.log(props);
    return (
        
        
            
        <section className="every">
        <div className="user">
            <figure>
                {/* <img src={props.userImg} alt="" /> */}
                <figcaption>
                    <ul>
                        <li className="da" id="jjjj"> {props.userFoto} </li>
                        <li className="day">{props.userDay}</li>
                        <li className="day1">{props.userUhr}</li>
                        <li>{props.userText}</li>
                        
                    </ul>
                </figcaption>
            </figure>
        </div>
        </section>
        
    );
}

export default Card;


