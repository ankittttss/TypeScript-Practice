import React from 'react';

const withLoading = (WrappedComponent) => {
  return function WithLoading({ loading, ...rest }) {
    if (loading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...rest} />;
  };
};



export default withLoading;
