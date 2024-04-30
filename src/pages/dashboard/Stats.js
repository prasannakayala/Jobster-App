import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../components/features/allJobs/allJobsSlice'
import { ChartsContainer, StatsContainer } from '../../components'


const Stats = () => {

  const { monthlyApplications}= useSelector((store)=> store.allJobs);

  const dispatch= useDispatch()

  useEffect(()=> {
    dispatch(showStats())
  }, [dispatch])

  return (
    <div>
      <StatsContainer/>
      {monthlyApplications.length >0 && <ChartsContainer/>}
    </div>
  )
}

export default Stats
