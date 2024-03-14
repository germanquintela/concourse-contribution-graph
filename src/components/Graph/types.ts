import { ContributionType } from "../../types/contributions";

export type GraphType = {
  contributions: ContributionType[]
}

export type WeekType = {
  date: number, commits: number
}[][];

export type MonthType = {
  number: number, weeks: number
}[];