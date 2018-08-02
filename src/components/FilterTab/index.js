import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterTab.scss';

const FilterTab = ({ filter, filterTypes, setFilter }) => {
  const handleClick = type => () => {
    setFilter(type);
  };
  return (
    <div className={styles.container}>
      {
        filterTypes.map((type, i) => (
          <span
            className={`${styles.tab} ${filter === type && styles.tab_active}`}
            key={i}
            onClick={handleClick(type)}
          >
            {type}
          </span>
        ))
      }
    </div>
  );
};

FilterTab.propTypes = {
  filter: PropTypes.string.isRequired,
  filterTypes: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterTab;
