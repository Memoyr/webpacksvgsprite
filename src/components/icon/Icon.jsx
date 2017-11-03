import React from 'react';


export default ({ glyph }) => (
  <svg className="svg-icon">
    <use xlinkHref={glyph} />
  </svg>
);
