import { Form } from "react-router-dom"

export const contactData = async ({ request }) => {
    try {
      const res = await request.formData();
      const data = Object.fromEntries(res);
      console.log(data);
      return null;  
    } catch (error) {
       console.log(error);
        
    }
}
export const Contact = () => {
    return (
        <>
            <section className="section-contact" style={{marginLeft: "12%", marginTop: "50px"}}>
                <div className="header">
                    <h2 className="section-common--heading">Contact us</h2>
                </div>

                <div className="grid grid-two--cols">
                    <div className="contact-content">
                        <Form method="POST" action="/contact">
                            <div className="grid grid-two-cols mb-3">
                                <div>
                                    <label htmlFor="username">Full name:</label>
                                    <input type="text" 
                                        name="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        placeholder="enter your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                        name="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        placeholder="abc@tech.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message">message:</label>
                                    <textarea name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        placeholder="we are always here to help"
                                     ></textarea>
                                </div>
                                <div>
                                    <button className="btn">send Message</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="image">
                        <div className="contact-image">
                            <img src="/contact.avif" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}