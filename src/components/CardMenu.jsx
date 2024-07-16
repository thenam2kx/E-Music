
import CardMedia from './CardMedia'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext'
import LeakAddIcon from '@mui/icons-material/LeakAdd'
import LinkIcon from '@mui/icons-material/Link'
import ShareIcon from '@mui/icons-material/Share'

function CardMenu() {

  return (
    <Box sx={{ width: '280px', height: 'fit-content', bgcolor: '#000', borderRadius: '8px' }}>
      <CardMedia />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', '&.MuiList-root': { bgcolor: 'transparent' } }}
        component="nav"
      >
        <ListItemButton sx={{ '&.MuiButtonBase-root': { padding: '10px 20px 10px 14px' }, '&:hover.MuiButtonBase-root': { bgcolor: 'hsla(0,0%,100%,0.1)' } }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'unset', mr: '15px' } }}>
            <FavoriteBorderIcon sx={{ '&.MuiSvgIcon-root': { color: '#fff', width: '16px', height: '16px' } }} />
          </ListItemIcon>
          <ListItemText disableTypography={true} primary="Thêm vào thư viện" sx={{ '&.MuiListItemText-root': { padding: 0, margin: 0, fontSize: '14px' } }} />
        </ListItemButton>

        <ListItemButton sx={{ '&.MuiButtonBase-root': { padding: '10px 20px 10px 14px' }, '&:hover.MuiButtonBase-root': { bgcolor: 'hsla(0,0%,100%,0.1)' } }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'unset', mr: '15px' } }}>
            <PlaylistAddIcon sx={{ '&.MuiSvgIcon-root': { color: '#fff', width: '16px', height: '16px' } }} />
          </ListItemIcon>
          <ListItemText disableTypography={true} primary="Thêm vào danh sách phát" sx={{ '&.MuiListItemText-root': { padding: 0, margin: 0, fontSize: '14px' } }} />
        </ListItemButton>

        <ListItemButton sx={{ '&.MuiButtonBase-root': { padding: '10px 20px 10px 14px' }, '&:hover.MuiButtonBase-root': { bgcolor: 'hsla(0,0%,100%,0.1)' } }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'unset', mr: '15px' } }}>
            <QueuePlayNextIcon sx={{ '&.MuiSvgIcon-root': { color: '#fff', width: '16px', height: '16px' } }} />
          </ListItemIcon>
          <ListItemText disableTypography={true} primary="Phát tiếp theo" sx={{ '&.MuiListItemText-root': { padding: 0, margin: 0, fontSize: '14px' } }} />
        </ListItemButton>

        <ListItemButton sx={{ '&.MuiButtonBase-root': { padding: '10px 20px 10px 14px' }, '&:hover.MuiButtonBase-root': { bgcolor: 'hsla(0,0%,100%,0.1)' } }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'unset', mr: '15px' } }}>
            <LeakAddIcon sx={{ '&.MuiSvgIcon-root': { color: '#fff', width: '16px', height: '16px' } }} />
          </ListItemIcon>
          <ListItemText disableTypography={true} primary="Phát nội dung tương tự" sx={{ '&.MuiListItemText-root': { padding: 0, margin: 0, fontSize: '14px' } }} />
        </ListItemButton>

        <ListItemButton sx={{ '&.MuiButtonBase-root': { padding: '10px 20px 10px 14px' }, '&:hover.MuiButtonBase-root': { bgcolor: 'hsla(0,0%,100%,0.1)' } }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'unset', mr: '15px' } }}>
            <LinkIcon sx={{ '&.MuiSvgIcon-root': { color: '#fff', width: '16px', height: '16px' } }} />
          </ListItemIcon>
          <ListItemText disableTypography={true} primary="Sao chép link" sx={{ '&.MuiListItemText-root': { padding: 0, margin: 0, fontSize: '14px' } }} />
        </ListItemButton>

        <ListItemButton sx={{ '&.MuiButtonBase-root': { padding: '10px 20px 10px 14px' }, '&:hover.MuiButtonBase-root': { bgcolor: 'hsla(0,0%,100%,0.1)' } }}>
          <ListItemIcon sx={{ '&.MuiListItemIcon-root': { minWidth: 'unset', mr: '15px' } }}>
            <ShareIcon sx={{ '&.MuiSvgIcon-root': { color: '#fff', width: '16px', height: '16px' } }} />
          </ListItemIcon>
          <ListItemText disableTypography={true} primary="Chia sẻ" sx={{ '&.MuiListItemText-root': { padding: 0, margin: 0, fontSize: '14px' } }} />
        </ListItemButton>
      </List>
    </Box>
  )
}

export default CardMenu