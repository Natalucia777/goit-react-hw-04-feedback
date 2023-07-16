import PropTypes from 'prop-types';
import { BtnList } from './Feedback.styled';
import { Btn } from './Feedback.styled';

const Feedback = ({ options, onFeedback}) => {
  return (
      <BtnList>
        {options.map(option => {
          return (
            <Btn type='button'
              onClick={() => onFeedback(option)}
              key={option}>
              {option}
            </Btn>
          );
          })}
      </BtnList>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default Feedback;