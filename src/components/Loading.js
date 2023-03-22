import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="text-center " style={{color: "#742A59"}}>
      <Spinner animation="border" size="sm" />
    </div>
  );
};

export default Loading;