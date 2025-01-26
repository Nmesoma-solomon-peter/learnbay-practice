import React from "react";

function LogoutPop({ onClose, onLogout }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full">
                        <svg
                            className="w-10 h-10 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                            />
                        </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                        Log Out
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 text-center">
                        Are you sure you want to log out? You will be required to log in again to continue.
                    </p>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        className="bg-gray-100 px-4 py-2 rounded-md text-sm font-semibold text-gray-900 hover:bg-gray-200"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-600 px-4 py-2 rounded-md text-sm font-semibold text-white hover:bg-red-500"
                        onClick={onLogout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogoutPop;
