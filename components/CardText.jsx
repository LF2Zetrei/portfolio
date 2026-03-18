import React from 'react';

const CardText = ({
  backgroundColor = '#eee',
  children,
  alignItems,
  justifyContent,
  flexWrap,
}) => {
  return (
    <div
      style={{ backgroundColor, alignItems, justifyContent, flexWrap }}
      className="flex flex-col text-justify rounded-xl
                 w-full max-w-sm md:max-w-md
                 p-4 md:p-6
                 box-border"
    >
      {children}
    </div>
  );
};

export default CardText;