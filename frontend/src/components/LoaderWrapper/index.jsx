import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoaderWrapper = ({ children, loading, height = 'calc(100vh - 60px)' }) => (
  loading
    ? (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: 'relative', height: `${height}` }}
      >
        <Spinner animation="border" role="status" />
      </div>
    )
    : children
);
