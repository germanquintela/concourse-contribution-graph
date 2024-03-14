import { CONTRIBUTION_COLOR } from "../enums/contributions";

const getCommitColor = (commits: number, highestCommits: number) => {
  if (commits > Math.ceil(highestCommits * 0.75)) {
    return CONTRIBUTION_COLOR.DARKEST;
  } else if (commits > Math.ceil(highestCommits * 0.5)) {
    return CONTRIBUTION_COLOR.DARKER;
  } else if (commits > Math.ceil(highestCommits * 0.25)) {
    return CONTRIBUTION_COLOR.BASE
  } else if (commits > 0) {
    return CONTRIBUTION_COLOR.LIGHTER
  }

  return CONTRIBUTION_COLOR.LIGHTEST;
};

export default getCommitColor;