import PropTypes from 'prop-types'
import { StatisticsList } from "./StatisticsList"
import css from 'components/Statistics/Statistics.module.css'


export const StatisticsBoard = ({ data, title }) => {
    return (
        <section className={css.statistics}>
            <div className={css.title}>{title && <h2>{title}</h2>} </div>
            <StatisticsList data={data}/>
        </section>  
    )
}

StatisticsBoard.propTypes = {
    title: PropTypes.string, 
  }