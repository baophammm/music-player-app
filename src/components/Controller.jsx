import React from 'react';
import { Box } from '@mui/material';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import useMusicPlayer from '../hooks/useMusicPlayer';

function Controller() {
  const {
    currentTrackIndex,
    togglePlay,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <Box
      sx={{
        border: '3px solid black',
        borderRadius: '5px',
        width: 1,
        height: '20%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <SkipPreviousOutlinedIcon
        fontSize="large"
        onClick={isPlaying ? playPreviousTrack : () => {}}
        sx={{
          borderRadius: '50%',
          '&:hover': { cursor: 'pointer', background: '#95a5a6' },
        }}
      />
      <Box
        onClick={currentTrackIndex !== null ? togglePlay : () => {}}
        sx={{
          display: 'flex',
          alignItems: 'center',
          '&:hover': { cursor: 'pointer', color: '#95a5a6' },
        }}
      >
        <PlayCircleFilledOutlinedIcon
          fontSize="large"
          sx={isPlaying ? { display: 'none' } : {}}
        />
        <PauseCircleFilledOutlinedIcon
          fontSize="large"
          sx={!isPlaying ? { display: 'none' } : {}}
        />
      </Box>

      <SkipNextOutlinedIcon
        fontSize="large"
        onClick={isPlaying ? playNextTrack : () => {}}
        sx={{
          borderRadius: '50%',
          '&:hover': { cursor: 'pointer', background: '#95a5a6' },
        }}
      />
    </Box>
  );
}

export default Controller;
