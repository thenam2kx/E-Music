
import CardMedia from '~/components/CardMedia'
import CardMenu from '~/components/CardMenu'

import Box from '@mui/material/Box'


function MusicPlayer() {

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
        <Box
          sx={{
            width: '240px',
            minHeight: '100vh',
            bgcolor: 'hsla(0,0%,100%,0.05)'
          }}
        >
        </Box>


        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0
          }}
        >
          <CardMenu />
        </Box>

        <Box
          sx={{
            width: '330px',
            minHeight: '100vh',
            borderLeft: '1px solid hsla(0,0%,100%,0.1)',
            bgcolor: 'hsla(0,0%,100%,0.05)'
          }}
        >
          <Box sx={{ width: '100%', height: '100%' }}>
            <CardMedia />
          </Box>

        </Box>

        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            height: 90,
            width: '100%',
            padding: '0 5px',
            borderTop: '1px solid hsla(0,0%,100%,0.1)',
            bgcolor: '#2c3e50'
          }}
        ></Box>
      </Box>
    </Box>
  )
}

export default MusicPlayer