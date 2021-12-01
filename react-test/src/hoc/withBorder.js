const withBorder = (Cmp) => {
  function NewCmp(restProp, { borderColor = "black" }) {
    return (
      <div
        style={{
          border: `3px solid  ${borderColor}`,
        }}
      >
        <Cmp {...restProp} isWithBorder />
      </div>
    );
  }

  return NewCmp;
};

export default withBorder;
