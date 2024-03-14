import { Tooltip } from '@mui/material';
import { CONTRIBUTION_COLOR } from '../../../enums/contributions';
import { Wrapper } from './styles';
import { ContributionType } from './types';
import daysNames from '../../../constants/daysNames';

const Contribution = ({ color, date, commits }: ContributionType) => {
  const dateFormat = new Date(date);
  const dayOfWeek = daysNames[dateFormat.getDay()];
  const dayOfMonth = dateFormat.getDate();

  const getOpacity = () => {
    switch (color) {
      case CONTRIBUTION_COLOR.DARKEST:
        return 1
      case CONTRIBUTION_COLOR.DARKER:
        return 0.84
      case CONTRIBUTION_COLOR.BASE:
        return 0.68
      case CONTRIBUTION_COLOR.LIGHTER:
        return 0.35
      default:
        return 0.10
    }
  }

  return (
    <Tooltip title={`${dayOfMonth} ${dayOfWeek} | ${commits} Commits`} arrow>
      <Wrapper opacity={getOpacity()} />
    </Tooltip>
  );
}

export default Contribution;