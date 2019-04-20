import React from 'react';
import PropTypes from 'prop-types';

const MinorBanner = ({
  title, subtitle, body, leftPhoto, rightPhoto,
}) => (
  <div className="container crf-cigar-banner">
    <div className="row">
      <div className="crf-cigar-banner--container d-flex justify-content-center align-items-center">
        {
                    leftPhoto && <img alt="Brown Boots" className="order-sm-0 order-md-0" src={leftPhoto} />
                }

        <div className="crf-cigar-banner--text order-sm-2 order-md-1">
          <div className="text-light">{title}</div>
          <div className="text-secondary">{subtitle}</div>
          <div className="text-primary">{body}</div>
        </div>
        {
                    rightPhoto && <img alt="Grey Boots" className="order-sm-1 order-md-2" src={rightPhoto} />
                }
      </div>
    </div>
  </div>
);

MinorBanner.propTypes = {
  /** The last line of the text */
  body: PropTypes.string,
  /** The URL to the left image */
  leftPhoto: PropTypes.string,
  /** The URL to the right image */
  rightPhoto: PropTypes.string,
  /** The middle line of text. Stands out due to color */
  subtitle: PropTypes.string,
  /** The top and most prominent portion of the text */
  title: PropTypes.string,
};

MinorBanner.defaultProps = {
  body: null,
  leftPhoto: null,
  rightPhoto: null,
  subtitle: null,
  title: null,
};

export default MinorBanner;
