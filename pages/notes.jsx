import { Typography } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {url} from '../config/next.config.js'
import axios from 'axios'
import Link from 'next/link'

export default function Notes() {
  return (
    <div >
      <Typography variant='h1'>Заметки</Typography>
    </div>
  )
}
