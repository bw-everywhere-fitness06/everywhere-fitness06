export default function Contact () {
    return (
        <div 
        className="container border"
        style={{marginTop:"60px",
        width:'65%',
        backgroundImage:`url('https://thumbs.dreamstime.com/b/empty-top-wooden-table-blurred-fitness-gym-background-banner-presentation-healthy-concept-empty-top-wooden-table-102409982.jpg')`,
        backgroundPosition: 'center',
        backgroundSize:"cover",
        }}>
            <h1 style={{marginTop: '25px'}}>Contact Form</h1>
            <form className="row" style={{ margin: "25px 85px 75px 100px"}}>
                <label>Name</label>
                <input type='text' name='name' className="form-control" />

                <label>Email</label>
                <input type='email' name='user_email' className="form-control" />

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control" />
                <input 
                type='submit' 
                value='Send' 
                className='form-control btn btn-primary'
                style={{ marginTop: "30px" }}
                />
            </form>
        </div>
    );
}