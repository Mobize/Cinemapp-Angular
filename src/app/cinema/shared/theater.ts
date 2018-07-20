import { Schedule } from './schedule';

export interface Theater {
  id: number;
  title: string;
  address: string;
  logoSrc: string;
  schedules?: Schedule[];
  schedulesGroups?: Schedule[][];
}
