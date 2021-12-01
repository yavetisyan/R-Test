import React from "react";

const withBorder = (Cmp) => {
  function NewCmp({ borderColor = "black", ...restProps }) {
    return (
      <div
        style={{
          border: `3px solid  ${borderColor}`,
        }}
      >
        <Cmp {...restProps} />
      </div>
    );
  }

  return NewCmp;
};

export default withBorder;
