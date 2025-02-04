import customFetch from "../../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";


export const createjobThunk=async (job, thunkAPI)=>{
    try{
        const resp= await customFetch.post('jobs/', job);
        thunkAPI.dispatch(clearValues())
        return resp.data
    }
    catch(error){
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue('Unauthorized! Logging out...')
        }
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}
export const deletejobThunk=async (jobId, thunkAPI)=>{
    thunkAPI.dispatch(showLoading());
    console.log(jobId)
    try{
        const resp= await customFetch.delete(`/jobs/${jobId}`)
        thunkAPI.dispatch(getAllJobs())
        return resp.data.msg
    }
    catch(error){
        thunkAPI.dispatch(hideLoading())
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}
export const editjobThunk=async({jobId, job}, thunkAPI)=> {
    try{
        const resp= await customFetch.patch(`/jobs/${jobId}`, job);
        thunkAPI.dispatch(clearValues());
        return resp.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}