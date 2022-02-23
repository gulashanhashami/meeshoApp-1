import './SignUp.css'
import signUp_img from '../../../images/signUp-img.jpg'

export const SignUp = ()=>{

    return <div className='signUp-body'>
       <div id="signUp-container">
        <div className="img-div">
            <img src={signUp_img} alt="" />
        </div>
            <div className='input-div-main'>
                <h6 className='input-div-content'>Sign Up to view your profile</h6>
                <div id="input-all">
                    <div className='span-div'>
                        <span>Country</span>
                        <span>+91</span>
                    </div>
                    <div className='input-div'>
                    <form action="" className="form">
                       <div className="form-group">
                       <input type="text" className="form-control" placeholder="jenny"/>
                       <label for="name" className="form-label">Your Name</label>
                    </div>
                   
                    </form>
                    </div>
                </div>
                <button className='otp-btn'>OTP</button>
            </div>
       </div>
    </div>
}