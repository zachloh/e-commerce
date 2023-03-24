import { Title } from '@mantine/core';
import React from 'react';
import {
  BrandFacebook,
  BrandInstagram,
  BrandPinterest,
  BrandTwitter,
} from 'tabler-icons-react';
import styles from './Footer.module.css';

const labels = [
  {
    title: 'COMPANY',
    listItems: ['About Us', 'Partnerships', 'Careers', 'Privacy Policy'],
  },
  {
    title: 'HELP & SUPPORT',
    listItems: ['FAQs', 'Delivery', 'Returns', 'Size Guide'],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {labels.map((label, i) => (
          <div key={i}>
            <Title order={3} color="white" size={14} mb={15} align="center">
              {label.title}
            </Title>
            <ul className={styles.list}>
              {label.listItems.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <Title order={3} color="white" size={14} mb={15} align="center">
            FOLLOW US
          </Title>
          <ul className={styles.list}>
            <li className={styles.icon}>
              <BrandInstagram size={18} />
              <span>Instagram</span>
            </li>
            <li className={styles.icon}>
              <BrandFacebook size={18} />
              <span>Facebook</span>
            </li>
            <li className={styles.icon}>
              <BrandTwitter size={18} />
              <span>Twitter</span>
            </li>
            <li className={styles.icon}>
              <BrandPinterest size={18} />
              <span>Pinterest</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
