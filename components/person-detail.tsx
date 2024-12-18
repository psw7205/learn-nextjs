import { PersonProps } from "@/app/person/constants";

export default function PersonCard({ person }: { person: PersonProps }) {
  return <>{person.id}</>;
}
