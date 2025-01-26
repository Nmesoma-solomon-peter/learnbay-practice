import React, { useState } from "react";

function Post({post}) {
  
console.log("psot",post);
console.log(`http://192.168.1.65:5000/${post.userId.profilePix}`);
const profileSrc = post.userId.profilePix?.startsWith("uploads")
        ? `http://192.168.1.65:5000/${post.userId.profilePix}`
        : post.userId.profilePix;

  
  const [showFullText, setShowFullText] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);
  const toggleImages = () => setShowAllImages(!showAllImages);
  const toggleComments = () => setShowComments(!showComments);
  const toggleShareOptions = () => setShowShareOptions(!showShareOptions);

  
  const renderImages = () => {
    const imagesToShow = showAllImages ? post.images : post.images.slice(0, 4);
    const extraImagesCount = post.images.length - 4;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {imagesToShow.map((image, index) => (
          <div
            key={index}
            className={`relative ${index === 0 ? "col-span-2" : ""}`}
          >
            <img
              src={`http://192.168.1.65:5000/${image}`}
              alt={`Post image ${index + 1}`}
              className="object-cover w-full h-72ij rounded-lg"
            />
            {index === 3 && !showAllImages && extraImagesCount > 0 && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold rounded-lg cursor-pointer"
                onClick={toggleImages}
              >
                +{extraImagesCount}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-5">
      {/* Poster Info */}
      <div className="flex items-center gap-3 mb-4">
      
        <img
          src={profileSrc}
          alt="Poster Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg">{post.userId.fullName}</h3>
          <p className="text-sm text-gray-500">{post.createdAt}</p>
        </div>
      </div>

      {/* Post Text */}
      <div className="mb-4">
        <p>
          {showFullText || post.content.length <= 150
            ? post.content
            : `${post.content.slice(0, 150)}... `}
          {post.content.length > 150 && (
            <span
              onClick={toggleText}
              className="text-blue-500 cursor-pointer"
            >
              {showFullText ? "Show less" : "Read more"}
            </span>
          )}
        </p>
      </div>

      {/* Post Images */}
      {post.images.length > 0 && <div className="mb-4">{renderImages()}</div>}

      {/* Interaction Buttons */}
      <div className="flex justify-around text-gray-600 mb-4">
      <button className="flex items-center gap-2 hover:text-blue-500">
          <span>👍</span> Like
        </button>
        <button
          className="flex items-center gap-2 hover:text-blue-500"
          onClick={toggleComments}
        >
          <span>💬</span> Comment
        </button>
        <button
          className="flex items-center gap-2 hover:text-blue-500"
          onClick={toggleShareOptions}
        >
          <span>↗️</span> Share
        </button>
      </div>

      {/* Comment Section */}
      {showComments && (
        <div className="mt-4">
          <textarea
            className="w-full border rounded-lg p-2 mb-2"
            placeholder="Write a comment..."
          ></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Post Comment
          </button>
          {/* Example comments */}
          <div className="mt-4">
            <p className="text-sm text-gray-700">
              <strong>Jane Doe:</strong> Nice post!
            </p>
            <p className="text-sm text-gray-700">
              <strong>John Smith:</strong> Very insightful.
            </p>
          </div>
        </div>
      )}

      {/* Share Options */}
      {showShareOptions && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 mb-2">Share this post on:</p>
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Facebook
            </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg">
              Twitter
            </button>
            <button className="bg-blue-300 text-white px-4 py-2 rounded-lg">
              LinkedIn
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
