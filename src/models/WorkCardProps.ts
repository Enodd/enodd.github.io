import type { Dayjs } from "dayjs";

export interface WorkCardProps {
  iconUrl: string;
  title: string;
  description: string;
  startDate: Dayjs;
  endDate: Dayjs | "present";
  tags: string[];
}
