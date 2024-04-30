import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./components/features/user/userSlice";
import jobSlice from './components/features/job/jobSlice'
import allJobsSlice from "./components/features/allJobs/allJobsSlice";


export const store= configureStore({
    reducer: {
        user: userSlice,
        job: jobSlice,
        allJobs:allJobsSlice
    }
})

