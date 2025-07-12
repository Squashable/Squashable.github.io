import React from 'react';

const containerStyle = {
  padding: '40px',
  textAlign: 'center',
};

export default function ProjectPage({ title }) {
  return (
    <div style={containerStyle}>
      <h1>{title}</h1>
      <p>Details coming soon.</p>
    </div>
  );
}