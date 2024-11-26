export function Home(){
    return (<>
        <h1>Jay Shree Krishna!!!</h1>

        <div className="row">
                <div className="col-lg-6 col-sm-12 p-3 bg-light">
                    <iframe className="shadow-sm"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14887.025678500828!2d79.0570797!3d21.1222751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c066cc09a853%3A0x7c48b3fea9f86779!2sSoft%20Polynomials%20(I)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1729657868935!5m2!1sen!2sin"
                        width="100%" height="100%" style={{"border":0}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                    <div className="mt-3 p-3 d-flex justify-content-center">
                        <form className="w-75 contact-form shadow-sm px-5 py-2">
                            <h1 className="display-6">Contact Us</h1>
                            <hr/>
                            <div className="mb-3 ">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name"
                                    aria-describedby="Enter Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email address"
                                    aria-describedby="Enter email address"/>

                            </div>
                            <div className="mb-3">
                                <label for="mobile" className="form-label">Mobile no.</label>
                                <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number"
                                    aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" placeholder="Enter message" id="message"
                                    rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
    
    </>)
}
