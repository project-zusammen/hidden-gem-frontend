import PropTypes from 'prop-types'

const Column = ({ width, children }) => {
  const columnStyle = {
    backgroundColor: '#f0f0f0',
    height: '100vh',
    width: `${width}%`,
  };
  
  return <div style={columnStyle}>{children}</div>
};

Column.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
  
export default Column;