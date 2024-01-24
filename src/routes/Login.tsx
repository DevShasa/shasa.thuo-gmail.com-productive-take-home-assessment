import { CgProfile } from "react-icons/cg";
import { MdLockOpen } from "react-icons/md";
import { useAppDispatch } from "../utils/reduxHooks";
import { useState } from "react";
import { logInUser } from "../redux/UserSlice";
import toast,  {Toaster}  from "react-hot-toast";

function Login() {

    const dispatch = useAppDispatch()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function onSubmit(){
        if(!password || !email){
            toast.error("Inputs are empty")
            console.log("Inputs empty")
        }else{
            dispatch(logInUser({email, password}))
        }
    }

  return (
    <div className="login_page_container">
        <div className="login_page_contents">
            <div className="login_page_welcome_banner">
                <p className="login_page_welcome_header">Welcome to website</p>
                <p className="login_page_welcome_message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut sem vel tortor sagittis tristique. Morbi id sem condimentum, commodo risus sit amet, porttitor lectus. In in tincidunt orci. Quisque a sapien in neque maximus sollicitudin. Cras a purus non eros volutpat ornare id eu dolor.</p>
            </div>
            <div className="login_page_input_container">
                <div className="login_page_input_contents">
                    <p>USER LOGIN</p>
                    <div className="login_page_input">
                        <CgProfile size={"25px"} color="blue"/>
                        <input 
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login_page_input">
                        <MdLockOpen size={"25px"} color="blue" />
                        <input 
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}

                        />
                    </div>
                    <div className="login_page_button">
                        <button onClick={onSubmit}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Toaster />
    </div>
  )
}

export default Login