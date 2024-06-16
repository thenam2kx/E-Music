
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function CardMedia() {

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        alignItems: 'center',
        '&.MuiCard-root': { width: '100%', bgcolor: 'transparent', boxShadow: 'none', overflow: 'unset' },
        '&:hover.MuiCard-root': { cursor: 'pointer', bgcolor: 'hsla(0,0%,100%,0.1)' }
      }}
    >
      <Box sx={{ position: 'relative', margin: '8px' }}>
        <CardHeader
          sx={{
            '&.MuiCardHeader-root': { padding: '0px' },
            '& .MuiCardHeader-avatar': { margin: 0, padding: 0 }
          }}
          avatar={
            <Avatar
              variant="rounded"
              aria-label="recipe"
              alt='avt'
              src='https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/d/b/9/2db9a78a4bb650f5f79a094d6a142bf6.jpg'
            ></Avatar>
          }
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            bgcolor: 'rgba(0,0,0,0.5)'
          }}
        >
          <PlayArrowIcon />
        </Box>
      </Box>

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '&.MuiCardContent-root': {
            padding: '8px',
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            width: 'calc(100% - 56px - 80px)'
          }
        }}
      >
        <Link
          href="#"
          underline="none"
          sx={{
            fontSize: '14px',
            color: 'text.primary',
            width: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          Hoa no ben duong
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{
            fontSize: '12px',
            color: 'text.primary',
            '&:hover.MuiTypography-root': { textDecoration: 'underline' }
          }}
        >
          Ha Anh Tuan
        </Link>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon sx={{ fontSize: '16px', color: 'text.primary' }} />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon sx={{ fontSize: '16px', color: 'text.primary' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default CardMedia