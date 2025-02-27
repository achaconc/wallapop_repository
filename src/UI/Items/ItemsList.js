import React from 'react';
import './ItemsList.scss';
import Item from '../../components/Item/Item';
import {
  Grid,
  Typography,
  Checkbox,
  useMediaQuery
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const ItemList = (props) => {

  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const xsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const favouriteItemsChangeHandler = (event) => {
    const value = props.items.find((item) => item.id === event.target.value);
    const isChecked = event.target.checked;
    props.onFavouriteItemsChangeHandler(value, isChecked);
  }



  return (
    <ul className="list-component">
      {props.items && props.items.map((item, index) => (
        <Item key={"listItem" + index}>
          <Grid className="main_container" justifyContent="center" container>
            <Grid className="grid_container" item container xs={mdScreen ? 12 : 9}>
              <Grid className="image_container" item xs={xsScreen ? 12 : 3}>
                <img className="image" alt="complex" src={item.image} />
              </Grid>
              <Grid className="sub_conatiner" item xs={xsScreen ? 12 : 7} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.email}
                    </Typography>
                    <Typography className="description_component" gutterBottom variant="subtitle1" component="div">
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={xsScreen ? 12 : 2} container alignItems="flex-end" justifyContent={xsScreen ? "space-around" : "space-between"} direction={xsScreen ? "row-reverse" : "column"} spacing={1}>
                <Grid item>
                  <Typography className="item_price" variant="h5" component="div">
                    {item.price}€
                  </Typography>
                </Grid>
                <Grid className="add_favourite_cb" item>
                  <Checkbox
                    size="large"
                    icon={<FavoriteBorder />}
                    value={item.id}
                    checkedIcon={<Favorite />}
                    onChange={favouriteItemsChangeHandler}
                    checked={props.checkedList[item.id] ? props.checkedList[item.id] : false} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Item>
      ))}
    </ul>
  );
};

export default ItemList;
