
// Main Page

// Linking the place of the image

import profilePic from './assets/Pic.JPG';
import { useNavigate } from 'react-router-dom';              // For page navagations

function FavouriteMovie() {
  const navigate = useNavigate(); // React Router's navigation hook

  return (
    <div className="Introduction">
      <h1> Welcome to my page! </h1>

      {/* Wrap the image and paragraph in a single container */}
      <div className="Container">
        <img
          className="Profile-image"
          src={profilePic}
          alt="My Profile Picture"
        />

        <p>
          Hi everyone, my name is Hassan Moshtaq. You can basically call me Hassan. 
          I'm a computer engineer and a full-stack web developer. Currently, I'm learning 
          React, which is  framework of the front-end. Today I want to test some basic 
          things related to HTML and try them with React.
          <p>
            And also I'm learning about hyperlinks and Bootstrap framework in React and 
            also button click-events.
          </p>
        </p>
      </div>
      <h2> You can get more information related to me in the next page</h2>

      <div className="Click-btn">
        <button className="Click-btn" onClick={() => navigate('/movies')}> 
          Next Page
        </button>
      </div>

      <footer className="Footer">
      <p>Built with ❤️ by Hassan Moshtaq</p>
    </footer>
      
    </div>
    
  );
}

export default FavouriteMovie;
