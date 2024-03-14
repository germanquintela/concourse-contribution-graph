import { useMemo } from 'react';
import { ReferenceText, ReferenceWrapper, TableWrapper, Wrapper } from './styles';
import getMaxCommits from '../../utils/getMaxCommits';
import Table from './Table';
import { GraphType, MonthType, WeekType } from './types';
import { CONTRIBUTION_COLOR } from '../../enums/contributions';
import Contribution from './Contribution';
import FadeIn from '../animations/FadeIn';


const Graph = ({ contributions }: GraphType) => {
  const { months, weeks, maxCommits } = useMemo(() => {
    const maxCommits = getMaxCommits(contributions);
    const months = [] as MonthType;
    const weeks = [] as WeekType;

    let currentMonth = -1;
    let currentWeeks = 0;

    contributions.forEach((weekContribution, index) => {
      const date = new Date(weekContribution.week * 1000);
      const month = date.getMonth();

      if (month !== currentMonth) {
        if (currentMonth !== -1) {
          months.push({ number: currentMonth, weeks: currentWeeks });
        }
        currentMonth = month;
        currentWeeks = 1;
      } else {
        currentWeeks++;
      }

      if (index === contributions.length - 1) {
        months.push({ number: currentMonth, weeks: currentWeeks });
      }

      weekContribution.days.forEach((commits, weekDayNumber) => {
        if (!weeks[weekDayNumber]) {
          weeks[weekDayNumber] = [];
        }
        weeks[weekDayNumber].push({
          commits,
          date: weekContribution.week * 1000 + weekDayNumber * 24 * 60 * 60 * 1000,
        });
      });
    });

    console.log({ dataaa: { months, weeks, maxCommits } })
    return { months, weeks, maxCommits }
  }, [])


  return (
    <Wrapper>
      <TableWrapper>
        <Table months={months} weeks={weeks} maxCommits={maxCommits} />
      </TableWrapper>
      <FadeIn delay={2} duration={0.6}>
        <ReferenceWrapper>
          <ReferenceText>Less</ReferenceText>
          <Contribution color={CONTRIBUTION_COLOR.LIGHTEST} />
          <Contribution color={CONTRIBUTION_COLOR.LIGHTER} />
          <Contribution color={CONTRIBUTION_COLOR.BASE} />
          <Contribution color={CONTRIBUTION_COLOR.DARKER} />
          <Contribution color={CONTRIBUTION_COLOR.DARKEST} />
          <ReferenceText>More</ReferenceText>
        </ReferenceWrapper>
      </FadeIn>
    </Wrapper>
  )
};

export default Graph;