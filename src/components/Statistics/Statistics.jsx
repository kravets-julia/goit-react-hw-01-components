import PropTypes from 'prop-types'
import css from 'components/Statistics/Statistics.module.css'

export const Data = ({ data: {label, percentage} }) => {
    return (
        <div className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
      </div>
    )
}

Data.propTypes = {
    label: PropTypes.string.isRequired, 
    percentage: PropTypes.number.isRequired,
  }