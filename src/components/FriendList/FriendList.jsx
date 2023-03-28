import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css'
import { Friend } from "./FriendListItem";

export const FriendsList = ( {friends} ) => {
    return (
        <ul className={css.list}>
            {friends.map(friend => (
                <li key={friend.id} >
                     <Friend 
                     avatar={friend.avatar}
                     name={friend.name}
                     isOnline={friend.isOnline} />
                </li>
            ))}
        </ul>
     )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}