import { Divider, Text } from '@mantine/core';
import React from 'react';
import Switch from 'react-switch';
import styles from './NewArrivalsFilter.module.css';

type NewArrivalsFilterProps = {
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewArrivalsFilter = ({ isNew, setIsNew }: NewArrivalsFilterProps) => {
  return (
    <>
      <label className={styles.switch}>
        <Text span color="dark.3" weight={500}>
          New Arrivals Only
        </Text>
        <Switch
          checked={isNew}
          onChange={setIsNew}
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
