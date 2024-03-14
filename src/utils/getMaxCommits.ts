import { ContributionType } from "../types/contributions";

const getMaxCommits = (data: ContributionType[]) => {
  let maxCommits = 0;

  data.forEach((week) => {
    if (week.total >= maxCommits) {
      week.days.forEach((dayCommits: number) => {
        if (dayCommits > maxCommits) {
          maxCommits = dayCommits;
        }
      });
    }
  });

  return maxCommits;
};

export default getMaxCommits;