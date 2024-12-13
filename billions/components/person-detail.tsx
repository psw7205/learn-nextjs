import { PersonProps } from "@/app/constants";

export default function PersonCard({ person }: { person: PersonProps }) {
  return <>{person.id}</>;
}
