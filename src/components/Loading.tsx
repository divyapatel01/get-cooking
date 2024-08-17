const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <img src="/loader.gif" className="attachment-full size-full" alt="x" loading="lazy" />
    </div>
  );
};

export default Loading;
