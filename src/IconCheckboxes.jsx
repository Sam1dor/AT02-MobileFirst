import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  const textoIcon = {
    fontSize: "16px",
    color: "darkblue",
    fontWeight: "bold",
  }
  
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> <span style={textoIcon}>1M</span>
      <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon/>} />
      <Checkbox {...label} icon={<ShareIcon />} checkedIcon={<ShareIcon />} /> <span style={textoIcon}>500k</span>
      
    </div>
  );
}