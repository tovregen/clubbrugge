import styles from "./header.module.css";
import clsx from "clsx";
import generalStyles from "../../styles/general.module.css";
import Link from "next/link";
export default function Header({ name, imageDataURL, wyId }) {
    if(!name) {
        return <></>
    }
  return (
    <header className={clsx(styles.header, generalStyles.paper)}>
      {wyId ? (
        <>
          <Link href="/team/[wyId]" as={`/team/${wyId}`}>
            <a>
              <img className={styles.image} src={imageDataURL} />
            </a>
          </Link>{" "}
          <Link href="/team/[wyId]" as={`/team/${wyId}`}>
            <a>
              <h1>{name}</h1>
            </a>
          </Link>
        </>
      ) : (
        <>
          <img className={styles.image} src={imageDataURL} />
          <h1>{name}</h1>
        </>
      )}
    </header>
  );
}
