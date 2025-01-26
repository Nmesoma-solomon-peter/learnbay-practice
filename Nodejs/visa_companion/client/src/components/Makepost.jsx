import React, { useState } from 'react';
import Axios from 'axios'

function MakePost() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postText, setPostText] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImagesPreview, setSelectedImagesPreview] = useState([]);
    // const [selectedDocument, setSelectedDocument] = useState(null);

    Axios.defaults.withCredentials = true // axios to send cridentails


    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setPostText('');
        setSelectedImages([]);
        setSelectedImagesPreview([])
    };

    const handleTextChange = (e) => setPostText(e.target.value);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageFiles = files.map((file) => URL.createObjectURL(file)); //preivew to for users to see images they selected.
        setSelectedImages(files);
        setSelectedImagesPreview(imageFiles);
    };

    // const handleDocumentChange = (e) => {
    //     if (e.target.files[0]) {
    //         setSelectedDocument(e.target.files[0].name);
    //     }
    // };

    const handleSubmitPost = () => {
        const formData = new FormData();
        formData.append("postText", postText);

        // Append selected images
        selectedImages.forEach((image) => {
            formData.append("images", image);
        });

        // Append selected document
        // if (selectedDocument) {
        //     formData.append("document", selectedDocument);
        // }

        Axios.post('http://192.168.1.65:5000/verified/user/post', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        })
            .then((response) => {
                console.log(response.data);
                resetForm();
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error("Error uploading post:", error);
            });
    };


    return (
        <>

            <div>
                <div className="shadow-md flex gap-5 h-20 px-4 py-4 rounded-lg">
                    <div>
                        {/* <img
                            src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                            alt="profilepix"
                            className="w-14 h-10"
                        /> */}
                        <div className='mt-3' onClick={handleOpenModal}><i className="fa-solid fa-file text-primary"></i></div>
                    </div>
                    <div
                        className="rounded-full border border-gray-500 w-full  h-full flex items-center pl-10"
                        onClick={handleOpenModal}
                    >
                        <button>Start a post</button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                >
                    <div className="bg-white w-full sm:w-8/12 rounded-lg p-5 shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Create a Post</h2>
                        <textarea
                            value={postText}
                            onChange={handleTextChange}
                            placeholder="What's on your mind?"
                            className="w-full h-32 border rounded-lg p-2 mb-4 focus:outline-none focus:ring focus:ring-primary"
                        ></textarea>

                        {/* Image Upload */}
                        <div className="mb-4">
                            <label
                                htmlFor="imageInput"
                                className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer"
                            >
                                Choose Image
                            </label>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        <div className="flex gap-2 mb-4 overflow-auto">
                            {selectedImagesPreview.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Selected ${index}`}
                                    className="w-16 h-16 object-cover rounded-lg border"
                                />
                            ))}
                        </div>

                        {/* Document Upload */}
                        {/* <div className="mb-4">
                            <label
                                htmlFor="documentInput"
                                className=" text-primary px-4 py-2 rounded-md cursor-pointer shadow-lg border border-primary"
                            >
                                Choose Doc
                            </label>
                            <input
                                id="documentInput"
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={handleDocumentChange}
                                className="hidden"
                            />
                        </div> */}
                        {/* {selectedDocument && (
                            <p className="text-sm text-gray-600 mb-4">
                                Selected document: {selectedDocument}
                            </p>
                        )} */}

                        {/* Buttons */}
                        <div className="flex justify-end gap-2">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-md"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-primary text-white px-4 py-2 rounded-md"
                                onClick={handleSubmitPost}
                            >
                                Post
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default MakePost;
