import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';


export const Friend = ({avatar, name, isOnline}) => {

   return (
<div className={css.item}>
  <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="" width="48" />
  <p className={css.name}>{name}</p>
</div>
    )
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired, 
}
