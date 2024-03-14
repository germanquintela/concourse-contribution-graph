import { CONTRIBUTION_COLOR } from '../../../enums/contributions';
import { Wrapper } from './styles';
import { ContributionType } from './types';

const Contribution = ({ color }: ContributionType) => {

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
    <Wrapper opacity={getOpacity()} />
  );
}

export default Contribution;