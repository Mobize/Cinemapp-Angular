import { Schedule } from './schedule';

export interface Movie {
  id: number;
  title: string;
  category: string;
  categoryId: number;
  summary: string;
  releasedDate: string;
  imgSrc: string;
  videoSrc: string;
  schedules?: Schedule[];
  schedulesGroups?: Schedule[][];
}
