import { useState, useEffect, useRef } from 'react'

import { Musics } from '~/mock-data'
import HandleTime from '~/components/HandleTime'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Slider from '@mui/material/Slider'

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
import ShuffleIcon from '@mui/icons-material/Shuffle'

function Home() {

  const mediaAudioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [value, setValue] = useState(30)
  const [stateVolume, setStateVolume] = useState(false)

  const handleIsPlaying = () => {
    if (!isPlaying) {
      mediaAudioRef.current.play()
    } else {
      mediaAudioRef.current.pause()
    }
    setIsPlaying(!isPlaying)
  }


  const handleNext = () => {
    setCurrentSong(next => (next >= Musics.length - 1 ? 0 : next + 1))
  }


  const handlePrev = () => {
    setCurrentSong(prev => (prev <= 0 ? Musics.length - 1 : prev - 1))
  }


  useEffect(() => {
    // Tự động phát nhạc khi chuyển bài nếu isPlaying là true
    if (isPlaying && mediaAudioRef.current) {
      mediaAudioRef.current.play()
    }
  }, [currentSong, isPlaying])

  const handleEnd = () => {
    // if (isShuffle) {
    //   handleShuffle()
    // } else {
    //   handleNext()
    // }
    handleNext()

  }

  const handleSliderChange = (event, newValue) => {
    mediaAudioRef.current.volume = newValue / 100
    setValue(newValue)
  }

  const handleShuffle = () => {
    // if (!isShuffle) {
    //   setCurrentSong(Math.floor(Math.random() * Musics.length))
    // }
    // setIsShuffle(!isShuffle)
  }


  const handleRepeat = () => {
    if (!isRepeat) {
      mediaAudioRef.current.loop = true
    } else {
      mediaAudioRef.current.loop = false
    }
    setIsRepeat(!isRepeat)
  }


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
          ref={mediaAudioRef}
          onEnded={handleEnd}
          component='audio'
          src={Musics[currentSong].url}
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

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>

              <Tooltip title="Home" placement="top">
                <IconButton>
                  <HomeIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Tooltip>

              <Divider orientation="vertical" variant="middle" flexItem />

              <Tooltip title="Prev" placement="top">
                <IconButton onClick={handlePrev}>
                  <SkipPreviousIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Tooltip>

              <Tooltip title={ isPlaying ? 'pause' : 'play' }placement="top">
                <IconButton onClick={handleIsPlaying}>
                  {
                    !isPlaying ?
                      <PlayCircleOutlineIcon sx={{ color: 'text.primary' }} />
                      :
                      <PauseCircleOutlineIcon sx={{ color: 'text.primary' }} />
                  }
                </IconButton>
              </Tooltip>

              <Tooltip title="Next" placement="top">
                <IconButton onClick={handleNext}>
                  <SkipNextIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Tooltip>

              <Divider orientation="vertical" variant="middle" flexItem />

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Volume" placement="top">
                  <IconButton>
                    <VolumeUpIcon sx={{ color: 'text.primary' }} />
                  </IconButton>
                </Tooltip>
                <Slider
                  style={{ width: 100 }}
                  size="small"
                  value={value}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  valueLabelDisplay="auto"
                />
              </Box>

              <Tooltip title="Shuffle" placement="top">
                <IconButton onClick={handleShuffle}>
                  {
                    !isShuffle ?
                      <ShuffleIcon sx={{ color: 'text.primary' }} />
                      :
                      <ShuffleIcon sx={{ color: 'blueviolet' }} />
                  }
                </IconButton>
              </Tooltip>

              <Tooltip title="Repeat" placement="top">
                <IconButton onClick={handleRepeat}>
                  {
                    isRepeat ?
                      <RepeatOneIcon sx={{ color: 'text.primary' }} />
                      :
                      <RepeatIcon sx={{ color: 'text.primary' }} />
                  }
                </IconButton>
              </Tooltip>

            </Box>

            <Box>00:00</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home