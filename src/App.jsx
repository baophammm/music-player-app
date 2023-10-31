import { Box } from '@mui/material';
import './App.css';
import Controller from './components/Controller';
import TrackList from './components/TrackList';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import SongDisplay from './components/SongDisplay';

function App() {
  return (
    <Box
      sx={{
        background: '#2d3436',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MusicPlayerProvider className="app-container">
        <Box
          className="container"
          sx={{
            background: '#ecf0f1',
            border: '3px solid black',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '300px',
            height: '100%',
            maxHeight: '360px',
            WebkitBoxShadow: '5px 5px 15px 5px #808080',
            boxShadow: '5px 5px 15px 5px #808080',

            padding: 3,

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SongDisplay />
          <TrackList />
          <Controller />
        </Box>
      </MusicPlayerProvider>
    </Box>
  );
}

export default App;
