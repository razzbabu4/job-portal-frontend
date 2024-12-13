/* eslint-disable react/prop-types */
import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import Swal from 'sweetalert2'

const ApplicationModal = ({ job, isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        resumeUrl: "",
    });

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure all fields are filled before submitting
            if (!formData.name || !formData.email || !formData.resumeUrl) {
                alert("Please fill out all fields.");
                return;
            }

            await axiosInstance.post("/applications/create-application", {
                ...formData,
                jobId: job._id,
            });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Application submitted successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            setFormData({ name: "", email: "", resumeUrl: "" });
            onClose(); // Close the modal after successful submission
        } catch (error) {
            console.error(error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to submit the application. Please try again.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Apply for {job.title}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Applicant Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Applicant Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Full Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Applicant Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email Address"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Resume URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input
                                type="url"
                                name="resumeUrl"
                                value={formData.resumeUrl}
                                onChange={handleInputChange}
                                placeholder="Link to Your Resume (e.g., Google Drive)"
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700"
                        >
                            Submit Application
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 bg-gray-300 text-gray-800 font-medium text-sm rounded hover:bg-gray-400"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationModal;
