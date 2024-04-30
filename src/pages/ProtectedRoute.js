import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const ProtectedRoute=({children})=> {
    const navigate= useNavigate()
    const {user}= useSelector((store)=> store.user);
    if (!user){
        navigate("/landing")
    }
    return children    
}

export default ProtectedRoute;