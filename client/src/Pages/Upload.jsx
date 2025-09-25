import React, { useState } from "react";
import scan from "../assets/images/resume-scan.gif";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" rounded-3xl p-8 max-w-2xl w-full">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Smart feedback
            <br />
            <span className="text-gray-600">for your</span>{" "}
            <span className="text-blue-600">dream job</span>
          </h1>

          {isProcessing ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                {statusText}
              </h2>
              <img
                src={scan}
                alt="Processing resume"
                className="w-64 mx-auto"
              />
            </div>
          ) : (
            <p className="text-lg text-gray-500 mb-8">
              Drop your resume for an ATS score and improvement tips.
            </p>
          )}

          {!isProcessing && (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="space-y-2">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Micrsoft"
                  id="company-name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  name="job-title"
                  placeholder="Frontend Developer"
                  id="job-title"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="job-description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Description
                </label>
                <textarea
                  rows={4}
                  name="job-description"
                  placeholder="Write a clear & concise job description with responsibilities & expectations..."
                  id="job-description"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="resume-upload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Resume
                </label>

                {!uploadedFile ? (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() =>
                      document.getElementById("file-input").click()
                    }
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          PDF, PNG or JPG (max. 10MB)
                        </p>
                      </div>
                    </div>
                    <input
                      id="file-input"
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {uploadedFile.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Save & Analyze Resume
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
