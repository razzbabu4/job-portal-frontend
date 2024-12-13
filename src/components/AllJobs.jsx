import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import JobCard from "./JobCard";
import { Loader } from "./Loader";


const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosInstance.get("/jobs");
                console.log(response.data.data);
                setJobs(response.data.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">All Jobs</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    {jobs.length > 0 ? (
                        jobs.map((job) => <JobCard key={job._id} job={job} />)
                    ) : (
                        <p className="text-gray-500">No job listings available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllJobs;