import styles from '@/styles/detail.module.css'
import { API_URL } from '@/app/constants'

interface Props {
  params: Promise<{ id: string }>;
}

interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number;
}

interface PersonDetailProps {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: FinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}

export async function generateMetadata ({ params }: Props) {
  const id = (await params).id
  return { title: id }
}

export default async function PersonPage ({ params }: Props) {
  const id = (await params).id
  const res = await fetch(`${API_URL}/person/${id}`)
  const {
    city,
    name,
    country,
    industries,
    financialAssets,
    bio,
    netWorth,
    about,
    squareImage,
  }: PersonDetailProps = await res.json()

  return (
    <div>
      <div className={styles.container}>
        <div>
          <img src={squareImage} alt="" className={styles.img}/>
        </div>
        <div>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>
            <div>
              <div>Net Worth</div>
              <div>{Math.round(netWorth / 1000)} Billion</div>
            </div>
            <div>
              <div>Location</div>
              <div>{`${city} ,`} {`${country}`}</div>
            </div>
            <div>
              <div>Industries</div>
              <div>{industries?.map((industry) => `${industry}`)}</div>
            </div>
            <div>
              <div>Bio</div>
              <div>{bio?.map((line) => `${line} `)}</div>
            </div>
            <div>
              <div>About</div>
              <div>{about?.map((line) => `${line} `)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Financial Assets</div>
        <div className={styles.body}>
          {financialAssets?.map((finance, idx) => (
            <div key={idx}>
              <div>Ticker: {finance.ticker}</div>
              <div>Shares: {finance.numberOfShares.toLocaleString()}</div>
              {finance.exerciseOptionPrice &&
                <div>Exercise Price: ${finance.exerciseOptionPrice}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
