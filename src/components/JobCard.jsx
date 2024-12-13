/* eslint-disable react/prop-types */
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

const JobCard = ({ job }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open modal
    const handleApplyClick = () => {
        setIsModalOpen(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">Company: {job.company}</p>
            <p className="text-sm text-gray-500">Location: {job.location}</p>
            <p className="text-gray-700 mt-3">{job.description}</p>

            <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700"
                onClick={handleApplyClick}
            >
                Apply
            </button>

            {/* Modal Component */}
            <ApplicationModal job={job} isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default JobCard;
