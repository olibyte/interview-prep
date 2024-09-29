import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1>Interview Prep Header</h1>
    </header>
  );
};

const styles = {
  header: {
    background: '#0070f3',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center' as const,
  },
};

export default Header;
