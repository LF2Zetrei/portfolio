import React from 'react';

const CardText = ({
  backgroundColor = '#eee',
  children,
  alignItems,
  justifyContent,
  flexWrap,
  width = "300px",
  padding = "16px",
}) => {
  const cardStyle = {
    backgroundColor,
    borderRadius: '12px',
    display: "flex",
    flexDirection: "column",
    textAlign: "justify",
    alignItems,
    justifyContent,
    flexWrap,
    width,
    padding,
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

export default CardText;
