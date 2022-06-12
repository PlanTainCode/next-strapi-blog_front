import { GrassOutlined } from '@mui/icons-material';
import { Button, ButtonGroup, IconButton, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';


export default function Header() {
  return (
    <header className={styles.gheader}>
      <Paper elevation={0} className={styles.header}>
        <div className={styles.header__title}>
            <IconButton size='large'>
              <GrassOutlined color='primary' />
            </IconButton>
            <Typography variant='h1'>
              PlanTain Blog
            </Typography>
        </div>
        <div className={styles.header__menu}>
          <ButtonGroup>
            <Link href='/'>
              <Button variant='text' className={styles.header__button}>Блог</Button>
            </Link>
            <Link href='/projects'>
              <Button variant='text' className={styles.header__button}>Проекты</Button>
            </Link>
            <Link href='/notes'>
              <Button variant='text' className={styles.header__button}>Заметки</Button>
            </Link>
          </ButtonGroup>
        </div>
      </Paper>
    </header>
  )
}
