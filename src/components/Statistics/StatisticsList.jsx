import PropTypes from 'prop-types'
import { Data } from "./Statistics"
import css from 'components/Statistics/Statistics.module.css'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export const StatisticsList = ( {data} ) => {
    return (
        <ul className={css.stat}>
            {data.map(data => (
                <li key={data.id}
                style={{ backgroundColor: getRandomHexColor() }}>
                    <Data data={data} 
                    label={data.label}
                    percentage={data.percentage}/>
                </li>
            ))}
        </ul>
    )
}

StatisticsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    )
  }

