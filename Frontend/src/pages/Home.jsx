import { useState, useEffect, useRef } from 'react'

import { Musics } from '~/mock-data'
import HandleTime from '~/components/HandleTime'

import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Slider from '@mui/material/Slider'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import HomeIcon from '@mui/icons-material/Home'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import RepeatIcon from '@mui/icons-material/Repeat'
import RepeatOneIcon from '@mui/icons-material/RepeatOne'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SettingsIcon from '@mui/icons-material/Settings'
import Menu from '@mui/material/Menu'


function Home() {

  const mediaAudioRef = useRef(null)
  const mediaVideoRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [value, setValue] = useState(30)
  const [stateVolume, setStateVolume] = useState(false)
  const [playedSongs, setPlayedSongs] = useState([])

  const handleIsPlaying = () => {
    if (!isPlaying) {
      mediaAudioRef.current.play()
      mediaVideoRef.current.play()
      mediaVideoRef.current.loop = true
      mediaVideoRef.current.playbackRate = 1.25
    } else {
      mediaAudioRef.current.pause()
      mediaVideoRef.current.pause()
    }
    setIsPlaying(!isPlaying)
  }

  const getNextSong = () => {
    if (isShuffle) {
      let nextSong
      do {
        nextSong = Math.floor(Math.random() * Musics.length)
      } while (playedSongs.includes(nextSong))
      setPlayedSongs([...playedSongs, nextSong])
      return nextSong
    } else {
      return (currentSong + 1) % Musics.length
    }
  }


  const handleNext = () => {
    setCurrentSong(getNextSong())
  }


  const handlePrev = () => {
    if (isShuffle) {
      setPlayedSongs(playedSongs.slice(0, -1))
      setCurrentSong(playedSongs[playedSongs.length - 2] || 0)
    } else {
      setCurrentSong((prev) => (prev - 1 + Musics.length) % Musics.length)
    }
  }


  useEffect(() => {
    // Tự động phát nhạc khi chuyển bài nếu isPlaying là true
    if (isPlaying && mediaAudioRef.current) {
      mediaAudioRef.current.play()
    }
  }, [currentSong, isPlaying])


  const handleEnd = () => {
    if (isRepeat) {
      mediaAudioRef.current.currentTime = 0
      mediaAudioRef.current.play()
    } else {
      handleNext()
    }

  }


  const handleSliderChange = (event, newValue) => {
    mediaAudioRef.current.volume = newValue / 100
    setValue(newValue)
  }


  const handleStateVolume = () => {
    setStateVolume(!stateVolume)
  }


  const handleShuffle = () => {
    setIsShuffle(!isShuffle)
    setPlayedSongs([])
  }


  const handleRepeat = () => {
    if (!isRepeat) {
      mediaAudioRef.current.loop = true
    } else {
      mediaAudioRef.current.loop = false
    }
    setIsRepeat(!isRepeat)
  }

  // Handle select theme
  const [selectTheme, setSelectTheme] = useState(10)
  const handleSelectTheme = (event) => {
    setSelectTheme(event.target.value)
  }


  // Handle setting icon and more icon
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }


  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Box sx={{ width: '100%', height: '100vh' }}>
        <CardMedia
          ref={mediaVideoRef}
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
              justifyContent: { xs: 'center', sm: 'space-between' },
              borderRadius: '8px',
              backdropFilter: 'blur(24px)',
              bgcolor: 'hsla(0,0%,7%,.75)',
              border: '1px solid hsla(0,0%,100%,.2)'
            }}
          >
            <Box sx={{ fontSize: '16px', display: { xs: 'none', sm: 'block' } }}>
              <HandleTime />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              {/* Home */}
              <Tooltip title="Home" placement="top">
                <IconButton>
                  <HomeIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Tooltip>

              <Divider orientation="vertical" variant="middle" flexItem />

              {/* Prev */}
              <Tooltip title="Prev" placement="top">
                <IconButton onClick={handlePrev}>
                  <SkipPreviousIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Tooltip>

              {/* Play or Pause */}
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

              {/* Next */}
              <Tooltip title="Next" placement="top">
                <IconButton onClick={handleNext}>
                  <SkipNextIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Tooltip>

              <Divider orientation="vertical" variant="middle" flexItem />

              {/* Volume */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Volume" placement="top">
                  <IconButton onClick={handleStateVolume}>
                    {
                      value <= 30 ?
                        <VolumeDownIcon sx={{ color: 'text.primary' }} />
                        :
                        <VolumeUpIcon sx={{ color: 'text.primary' }} />
                    }
                  </IconButton>
                </Tooltip>
                {
                  stateVolume ?
                    <Slider
                      style={{ width: 100 }}
                      size="small"
                      step={1}
                      value={value}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      valueLabelDisplay="auto"
                    />
                    :
                    ''
                }
              </Box>

              {/* Shuffle */}
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

              {/* Repeat */}
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

              {/* Select theme */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, display: { xs: 'none', sm: 'block' } }}>
                <Select
                  id="slect-theme"
                  value={selectTheme}
                  onChange={handleSelectTheme}
                  sx={{ '&.MuiInputBase-root': { fontSize: '14px' } }}
                >
                  <MenuItem value={10}>Theme 1</MenuItem>
                  <MenuItem value={20}>Theme 2</MenuItem>
                  <MenuItem value={30}>Theme 3</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* ============ */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Box>
                <IconButton
                  aria-label="more"
                  id="more-button"
                  aria-controls={open ? 'more-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <SettingsIcon sx={{ color: 'text.primary' }} />
                </IconButton>
                <Menu
                  id="more-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'more-button'
                  }}
                  // custom box paper
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: '8px',
                        backdropFilter: 'blur(24px)',
                        bgcolor: 'hsla(0,0%,7%,.75)',
                        border: '1px solid hsla(0,0%,100%,.2)'
                      }
                    }
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>

              {/* More Icon */}
              <Box>
                <IconButton
                  aria-label="more"
                  id="more-button"
                  aria-controls={open ? 'more-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon sx={{ color: 'text.primary' }} />
                </IconButton>
                <Menu
                  id="more-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'more-button'
                  }}
                  // custom box paper
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: '8px',
                        backdropFilter: 'blur(24px)',
                        bgcolor: 'hsla(0,0%,7%,.75)',
                        border: '1px solid hsla(0,0%,100%,.2)'
                      }
                    }
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
