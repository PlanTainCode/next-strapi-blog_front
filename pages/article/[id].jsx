import React from 'react'
import { url } from '../../config/next.config'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import styles from '../../styles/Article.module.scss'

export default function Article({article}) {
  return (
    <Card className={styles.idCard} elevation={2}>
        <CardMedia
        component='img'
        image={`${article.Media[0].url}`}
        alt="Картинка"
        className={styles.idCardMedia}
        />
        <CardContent className={styles.idCardContent}>
            <Typography variant='h1' className={styles.idCardTitle}>
                {article.Title}
            </Typography>
            <ReactMarkdown className={styles.idCardBody}>
                {article.Body}
            </ReactMarkdown>
        </CardContent>
    </Card>
  )
}

export const getStaticProps = async (context) => {
    const data = await axios.get(`${url}/articles/${context.params.id}`);
    const article = await data.data;

    return {
        props: {
            article,
        },
        revalidate: 1,
    }
}

export const getStaticPaths = async () => {
    const res = await axios.get(`${url}/articles/`);
    const articles = await res.data;

    const paths = articles.map((item) => ({
        params: { id: item.id.toString( ) },
    }))

    return { 
        paths, 
        fallback: false 
    };
}