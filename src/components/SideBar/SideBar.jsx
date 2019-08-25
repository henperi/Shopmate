import React from 'react';

import {
  makeStyles, Paper, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import LinkRouter from '../LinkRouter/LinkRouter';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  filter: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

const SideBar = ({
  departmentName, categories, handleCategoryClick, ...props
}) => {
  const classes = useStyles(props);

  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleListItemClick = (id) => {
    handleCategoryClick(id);
    setSelectedItem(id);
  };

  return (
    <Paper className={`${classes.paper} ${classes.filter}`}>
      {departmentName}
      <span> Categories</span>
      {categories.map(category => (
        <LinkRouter
          to={`?categories=${category.name}`}
          key={`${category.category_id}-${category.name}`}
        >
          <ListItem
            button
            selected={selectedItem === category.category_id}
            onClick={() => handleListItemClick(category.category_id)}
          >
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItem>
        </LinkRouter>
      ))}
    </Paper>
  );
};

export default SideBar;
