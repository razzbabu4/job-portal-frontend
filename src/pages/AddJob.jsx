import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import Swal from "sweetalert2";

const AddJob = () => {
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Job Posted:', jobData);

        try {
            await axiosInstance.post('/jobs/create-job', jobData);

            // Reset form and show success message
            setJobData({
                title: '',
                company: '',
                location: '',
                description: '',
            });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Job posted successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (err) {
            console.error('Error posting job:', err);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
            <form onSubmit={handleSubmit}>
                {/* Job Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        value={jobData.title}
                        onChange={handleChange}
                        placeholder="Enter job title"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Company */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={jobData.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={jobData.location}
                        onChange={handleChange}
                        placeholder="Enter job location"
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={jobData.description}
                        onChange={handleChange}
                        placeholder="Enter job description"
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows="4"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700"
                    >
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
