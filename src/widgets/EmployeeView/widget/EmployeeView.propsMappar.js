const mapComponentProps = (props) => {
  const reportModalProps = {
    toggleReport: props.toggleReport,
    addReport: props.addReport,
  };
  return { ...props, reportModalProps };
};

export { mapComponentProps };
