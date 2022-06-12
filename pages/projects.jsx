import { Typography } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {url} from '../config/next.config.js'
import axios from 'axios'
import Link from 'next/link'

export default function Projects({list}) {
  return (
    <div className={styles.container}>
      

      <Typography variant='h1'>Мой Блог</Typography>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link href={`/article/${item.id}`}>
              <a>{item.Title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get(`${url}/articles`);
  const list = await data.data;

  return {
    props: {
      list,
    },
    revalidate: 1,
  }
}