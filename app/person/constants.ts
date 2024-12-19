export const PERSON_API_URL = process.env.PERSON_API_URL || "";

export interface PersonProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}
