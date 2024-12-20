import { PersonProps } from "@/app/person/constants";
import styles from "@/styles/card.module.css";
import Link from "next/link";

export default function PersonCard({ person }: { person: PersonProps }) {
  const { id, squareImage, name, netWorth, industries } = person;
  return (
    <Link href={`/person/${id}`} className={styles.link}>
      <div className={styles.container}>
        <div>
          <img src={squareImage} alt="" className={styles.image} />
        </div>
        <div className={styles.body}>
          <div className={styles.name}>{name}</div>
          <div>
            {Math.round(netWorth / 1000)} Billion /{" "}
            {industries.map((industry) => `${industry}`)}
          </div>
        </div>
      </div>
    </Link>
  );
}
