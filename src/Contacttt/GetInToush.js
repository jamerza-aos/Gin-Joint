const Gettoush = () => {
    return ( 
    <section id="gettoush">
        <article className='getarticle'>
            <div id="adress">
                <ul>
                    <li id="git"> GET IN TOUCH</li> 
                    <li>NEW YORK ,NY 10011</li>
                    <li>646-559-1671</li>
                    <li>info@btgnyc.com</li>
                </ul>
            </div>  
            
            <div className="contact1">
                <table>
                <tr>     
                    <td id="hour">Hours of Operation</td>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>8am — 4pm</td>
                </tr>

                <tr>                   
                    <td>Tuesday - Friday</td>
                    <td>8am — 10pm</td>
                </tr>

                <tr>
                    <td>Saturday</td>
                    <td>9am — 10pm</td>
                </tr>
                <tr> 
                    <td>Sunday</td>
                    <td>9am — 4pm</td>
                </tr>
            </table>
         </div>
    </article>

     <div id="persondata">
     <form >
                <input type="text"  id="Name" placeholder="Name"/>
               
                <input type="email" id="email" placeholder="Email Address"/>
             
                <input type="number" id="mobile" placeholder= 'Mobile'/>
              
                <input type="text"  id = "massege"  placeholder=" Message"/>
              
                <input type="submit"  id='submit' value="submit"/>
            </form>
     </div>
     </section>
     );
}
 
export default Gettoush;