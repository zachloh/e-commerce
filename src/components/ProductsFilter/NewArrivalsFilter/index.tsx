import { Divider, Text } from '@mantine/core';
import React, { useState } from 'react';
import Switch from 'react-switch';
import styles from './NewArrivalsFilter.module.css';

const NewArrivalsFilter = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label className={styles.switch}>
        <Text span>New Arrivals Only</Text>
        <Switch
          checked={checked}
          onChange={setChecked}
          offColor="#dee2e6"
          onColor="#15aabf"
          handleDiameter={18}
          uncheckedIcon={false}
          checkedIcon={false}
          activeBoxShadow="0 0 2px 3px #99e9f2"
          height={24}
          width={46}
        />
      </label>
      <Divider color="gray.3" />
    </>
  );
};

export default NewArrivalsFilter;
