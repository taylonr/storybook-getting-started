import React from 'react';
import PropTypes from 'prop-types';

const MajorBanner = ({
  title, subtitle, body, photo,
}) => (
  <div className="jumbotron jumbotron-fluid crf-hero d-flex" style={{ backgroundImage: `url("./${photo}")` }}>
    <div className="container d-flex flex-column justify-content-center align-items-sm-stretch align-items-md-center">
      <h1 className="col-sm-12">{title}</h1>
      <h2>{subtitle}</h2>
      <p className="lead">{body}</p>
    </div>
  </div>
);

MajorBanner.propTypes = {
  /** The last line of the text */
  body: PropTypes.string,
  /** The URL to the background image */
  photo: PropTypes.string,
  /** The middle line of text. Stands out due to color */
  subtitle: PropTypes.string,
  /** The top and most prominent portion of the text */
  title: PropTypes.string,
};

MajorBanner.defaultProps = {
  body: null,
  photo: null,
  subtitle: null,
  title: null,
};

export default MajorBanner;
