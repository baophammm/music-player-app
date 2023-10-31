import { Box, Typography } from '@mui/material';
import React from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';

function SongDisplay() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <Box
      className="scroll-container"
      sx={{
        border: '3px solid black',
        borderRadius: '5px',
        width: 1,
        height: '20%',

        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        className="scroll-text"
        sx={{
          height: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">{currentTrackName}</Typography>
      </Box>
    </Box>
  );
}

export default SongDisplay;
