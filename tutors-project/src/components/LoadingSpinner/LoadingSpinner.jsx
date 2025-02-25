import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingSpinner() {
  return (
    <ClipLoader
      color="#f1993b"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
