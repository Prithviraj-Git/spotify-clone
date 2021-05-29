import './App.css';
import SideNav from './components/side_nav/SideNav';
import AudioPlayerWrapper from './components/audio_player/AudioPlayerWrapper'

function App() {
  return (
    <div className="spotify-app">
      <SideNav />
      <AudioPlayerWrapper />
    </div>
  );
}

export default App;
