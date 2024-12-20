import { PERSON_API_URL, PersonProps } from "@/app/person/constants";
import PersonCard from "@/components/person/person-card";
import styles from "@/styles/page.module.css";

export default async function PersonListPage() {
  const res = await fetch(PERSON_API_URL);
  const billions: PersonProps[] = await res.json();

  return (
    <div className={styles.page}>
      {billions.map((person) => (
        <div key={person.id}>
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  );
}
