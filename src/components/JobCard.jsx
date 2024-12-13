/* eslint-disable react/prop-types */

const JobCard = ({ job }) => {

    return (
        <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">Company: {job.company}</p>
            <p className="text-sm text-gray-500">Location: {job.location}</p>
            <p className="text-gray-700 mt-3">{job.description}</p>

            <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700"
            >
                Apply
            </button>
        </div>
    );
};

export default JobCard;
