import React from "react";
import useContent from "../../content";

// Catches a failed lazy chunk (e.g. ChunkLoadError after a new deploy or a flaky
// network) so one page fails instead of the whole app unmounting.
class Boundary extends React.Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    const { message, reload } = this.props.text;
    return (
      <div className="page-error">
        <p>{message}</p>
        <button type="button" onClick={() => window.location.reload()}>
          {reload}
        </button>
      </div>
    );
  }
}

const ChunkErrorBoundary = ({ children }) => {
  const { UI } = useContent();
  return <Boundary text={UI.loadError}>{children}</Boundary>;
};
export default ChunkErrorBoundary;
