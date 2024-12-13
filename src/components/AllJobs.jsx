import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import JobCard from "./JobCard";


const AllJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosInstance.get("/jobs");
                console.log(response.data.data);
                setJobs(response.data.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-xl font-bold mb-4">All Jobs</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default AllJobs;