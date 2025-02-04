import customFetch from "../../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk=async (url, user, thunkAPI)=>{
    try{
        const resp= await customFetch.post(url, user);
        return resp.data     
    }
    catch(err){
        return thunkAPI.rejectWithValue(err.response.data.msg)
    }
}

export const loginUserThunk= async (url, user, thunkAPI)=> {
    try{
        const resp= await customFetch.post(url, user);
        return resp.data;
    }   
    catch(error){
       return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}

export const updateUserThunk= async (url, user, thunkAPI)=> {
    try{
        const resp= await customFetch.patch(url, user)
  
        return resp.data;
      }
      catch(err){
        if (err.response.status === 401){
          thunkAPI.dispatch(logoutUser())
          return thunkAPI.rejectWithValue("Unauthorised! Logging out...")
   
        }
        return thunkAPI.rejectWithValue(err.response.data.msg)
      }
}