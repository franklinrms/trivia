import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import Alternative from './style';
import bg from '../../assets/bg.png';

export default function AlternativeButton({
  label, onClick, disabled, isCorrect,
}) {
  const cleanAlternative = sanitizeHtml(label);
  return (
    <Alternative
      bg={bg}
      type="button"
      onClick={onClick}
      disabled={disabled}
      value={label}
      selected={disabled}
      isCorrect={isCorrect}
      dangerouslySetInnerHTML={{ __html: cleanAlternative }}
    />
  );
}
AlternativeButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};
