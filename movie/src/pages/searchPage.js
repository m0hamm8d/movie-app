// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

import SearchList from "../component/search/searchList";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SearchPage() {
  return (
    // <div>
    //   <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    //   <Checkbox
    //     {...label}
    //     icon={<BookmarkBorderIcon />}
    //     checkedIcon={<BookmarkIcon />}
    //   />
    // </div>
    <SearchList/>
  );
}

