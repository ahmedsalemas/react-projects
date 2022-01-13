import React, { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
    const prop = props.meetup;
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(prop.id)


    const toggleFavoritesStatusHandler = () => {
        if (itemIsFavorite) { favoritesCtx.removeFavorite(prop.id) }
        else {
            favoritesCtx.addFavorite({
                id: prop.id,
                ...props.meetup
            })
        }
    }


    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={prop.image} alt={prop.title} />
                </div>
                <div className={classes.content}>
                    <h3>{prop.title}</h3>
                    <address>{prop.address}</address>
                    <p>{prop.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem
