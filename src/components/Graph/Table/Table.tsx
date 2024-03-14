import daysNames from '../../../constants/daysNames';
import { DaysHead, DaysTitle, MonthHead, MonthTitle, Row, Wrapper } from './styles';
import monthsNames from '../../../constants/monthsNames';
import { TableType } from './types';
import Contribution from '../Contribution';
import getCommitColor from '../../../utils/getCommitColor';
import FadeIn from '../../animations/FadeIn';

const Table = ({ months, weeks, maxCommits }: TableType) => {
  return (
    <Wrapper>
      <thead>
        <Row>
          <MonthHead />
          {months.map((month, index) => (
            <MonthHead key={index} colSpan={month.weeks}>
              <FadeIn delay={0.4 + (0.07 * index)} duration={0.6}>
                <MonthTitle>
                  {monthsNames[month.number]}
                </MonthTitle>
              </FadeIn>
            </MonthHead>
          ))}
        </Row>
      </thead>
      <tbody>
        {weeks.map((weekDay, weekDayIndex) => (
          <Row key={weekDayIndex}>
            <DaysHead>
              <FadeIn delay={0.4 + (0.07 * weekDayIndex)} duration={0.6}>
                <DaysTitle>
                  {weekDayIndex % 2 > 0 && daysNames[weekDayIndex]}
                </DaysTitle>
              </FadeIn>
            </DaysHead>
            {weekDay.map((day, dayNumber) => (
              <td key={dayNumber}>
                <FadeIn delay={0.4 + (0.02 * dayNumber) + (0.06 * weekDayIndex)} duration={0.6}>
                  <Contribution commits={day.commits} color={getCommitColor(day.commits, maxCommits)} date={day.date} />
                </FadeIn>
              </td>
            ))}
          </Row>
        ))}
      </tbody>
    </Wrapper>
  )
};

export default Table;