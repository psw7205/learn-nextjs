import { API_URL, PersonProps } from "@/app/constants";
import PersonCard from "@/components/person-card";
import styles from "@/styles/page.module.css";

export default async function Home() {
  const res = await fetch(API_URL);
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
