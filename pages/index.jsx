import { Button, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {url} from '../config/next.config.js'
import axios from 'axios'
import Link from 'next/link'

export default function Home({list, home}) {
  console.log(home.Media.url)
  return (
    <div className={styles.homeContainer}>
      <Paper className={styles.homeBlock} elevation={2}>
        <img src={home.Media[0].url} />
        <Typography variant='inherit'>{home.Description}</Typography>
      </Paper>
      <div className={styles.posts}>
      {list.map((item) => (
        <Card key={item.slug} elevation={2} className={styles.homeCard}>
          <CardMedia 
          component="img"
          image={`${item.Media[0].url}`}
          alt="Картинка"
          className={styles.homeCardMedia}
          />
          <CardContent className={styles.homeCardContent}>
            <Typography variant='h3' className={styles.homeCardTitle}>{item.Title}</Typography>
            <Typography variant='body2' className={styles.homeCardText}>{item.Description}</Typography>
          </CardContent>
          <Link href={`/article/${item.id}`}><Button variant='outlined' className={styles.homeCardButton}>Читать полностью</Button></Link>
        </Card>
      ))}
        
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await axios.get(`${url}/articles`);
  const list = await data.data;

  const dah = await axios.get(`${url}/home`);
  const home = await dah.data

  return {
    props: {
      list,
      home,
    },
    revalidate: 1,
  }
}