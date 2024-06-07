import HandleTime from '~/components/HandleTime'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import HomeIcon from '@mui/icons-material/Home'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'
import RepeatIcon from '@mui/icons-material/Repeat'
import RepeatOneIcon from '@mui/icons-material/RepeatOne'

function Home() {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <CardMedia
          component='video'
          src='../../videos/Studio_night.mp4'
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover'
          }}
        />

        <CardMedia
          component='audio'
          src='../../audios/nho-gia-dinh-remix.mp3'
          sx={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover'
          }}
        />

        <Box
          sx={{
            position: 'fixed',
            bottom: '100px',
            left: '0px',
            height: '48px',
            width: '100%',
            padding: '0 12px'
          }}
        >
          <Box
            sx={{
              width1: '100%',
              height: '100%',
              padding: '0 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '8px',
              backdropFilter: 'blur(24px)',
              bgcolor: 'hsla(0,0%,7%,.75)',
              border: '1px solid hsla(0,0%,100%,.2)'
            }}
          >
            <Box sx={{ fontSize: '16px' }}>
              <HandleTime />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

              <Tooltip title="Add" placement="top">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Tooltip>

              <Divider orientation="vertical" variant="middle" flexItem />

              <SkipPreviousIcon />
              <PlayCircleOutlineIcon />
              <SkipNextIcon />

              <Divider orientation="vertical" variant="middle" flexItem />

              <VolumeUpIcon />
              <VolumeMuteIcon />

              <Divider orientation="vertical" variant="middle" flexItem />

              <RepeatIcon />


            </Box>

            <Box>00:00</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home