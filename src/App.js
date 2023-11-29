// import HomePage from "./Pages/HomePage";
// import './index.css'

// function App() {
//   return (
//     <div className="h-screen bg-indigo-200">
//       <HomePage/>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import YouTubePlayer from './Components/YouTubePlayer'
import HomePage from './Pages/HomePage';
import './index.css'

const App = () => {
  const videoIds = ['kX0vO4vlJuU', 'zSQ48zyWZrY', 'zsYSSVoQnP4','hLvWy2b857I', 'nOI67IDlNMQ','ISnyONG1dEc', 'kTlv5_Bs8aw']
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>}>
          {/* <Button to="/play" videoId="YOUR_YOUTUBE_VIDEO_ID" /> */}
        </Route>
        <Route path="/play"
        element={<YouTubePlayer videoIds={videoIds}/>}>
          {/* Video playback page */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
