import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import ShowJob from "../ShowJob/ShowJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    

    const handleJobsFilter = filter => {
        if(filter === 'All'){
         setDisplayJobs(appliedJobs);
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
            
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));



            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);


        }

    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I Applied: {appliedJobs.length}</h2>

            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleJobsFilter('All')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('Remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {
                   displayJobs.map(job => <ShowJob key={job.id} job={job}>
                    <span>{job.remote_or_onsite}</span></ShowJob>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;