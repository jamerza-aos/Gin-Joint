const Contact = () => {
    return ( 
    <section className="findus">
        <div className="findus_img">
            <img src="./assets/img/logoo.png" alt=""/>
        </div>

        <div className="contact">
            <table>
                <tr>
                    <td>Find us</td>
                    <td>Hours of Operation</td>
                </tr>
                <tr>
                    <td>132 9th Avenue</td>
                    <td>Monday</td>
                    <td>8am — 4pm</td>
                </tr>

                <tr>
                    <td>New York, NY 10011</td>
                    <td>Tuesday - Friday</td>
                    <td>8am — 10pm</td>
                </tr>

                <tr>
                    <td>646-559-1671</td>
                    <td>Saturday</td>
                    <td>9am — 10pm</td>
                </tr>
                <tr> 
                    <td>info@btgnyc.com</td>
                    <td>Sunday</td>
                    <td>9am — 4pm</td>
                </tr>
            </table>
         
         </div>
    </section>
     );
}
 
export default Contact;