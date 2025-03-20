const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "5rem", width: "5rem" }}
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
