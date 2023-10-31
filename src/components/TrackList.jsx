import React, { useContext } from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';
import { Box, Typography } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

function TrackList() {
  const { trackList, currentTrackIndex, playTrack, isPlaying } =
    useMusicPlayer();

  const { state, setState } = useContext(MusicPlayerContext);

  const toggleSongOnList = index => {
    playTrack(index);

    if ((currentTrackIndex !== index) & isPlaying) {
      setState(state => ({
        ...state,
        currentTrackIndex: index,
      }));
    }
  };

  return (
    <Box
      sx={{
        border: '3px solid black',
        borderRadius: '5px',
        marginY: '3px',
        width: 1,
        height: 1,
        padding: '0.7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      {trackList.map((track, index) => (
        <Box
          key={index}
          className="song-container"
          onClick={() => {
            toggleSongOnList(index);
          }}
          sx={{
            background: '#bdc3c7',
            // border: '1px solid grey',
            borderRadius: '8px',
            paddingX: '1px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': { cursor: 'pointer', background: '#95a5a6' },
          }}
        >
          <PauseCircleOutlineIcon
            sx={
              (index === currentTrackIndex) & isPlaying
                ? { display: 'none' }
                : {}
            }
          />
          <HeadsetIcon
            sx={
              (index === currentTrackIndex) & isPlaying
                ? {}
                : { display: 'none' }
            }
          />
          <Typography className="song-title" variant="p" ml={1} fontSize={12}>
            {track.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default TrackList;
