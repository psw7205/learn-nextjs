export const API_URL = process.env.API_URL || "";

export interface PersonProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}
