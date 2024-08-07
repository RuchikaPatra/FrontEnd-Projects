import React from 'react';

const toUpperCaseHOC = (WrappedComponent) => {
  return (props) => {
    const handleChange = (value) => {
      props.onChange(value.toUpperCase());
    };

    return <WrappedComponent {...props} onChange={handleChange} />;
  };
};

export default toUpperCaseHOC;