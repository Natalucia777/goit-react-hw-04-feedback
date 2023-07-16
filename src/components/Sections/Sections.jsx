import PropTypes from 'prop-types';
import { Title } from './Sections.styled';

const Sections = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Sections;
