// import './Home.css'
    export const Home = ()=>{
        return <div className="container">
        <form action="" className="form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="jenny"/>
                <label for="name" className="form-label">Your Name</label>
            </div>
            <div className="form-group">
            <input type="email" className="form-control" placeholder="jenny@google"/>
                <label for="name" className="form-label">Your Email</label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>

    }