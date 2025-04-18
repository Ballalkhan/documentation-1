import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Icon } from '@pantheon-systems/pds-toolkit-react';

import './styles.css';

const propTypes = {
  dark: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  type: PropTypes.string,
};

function HeroCTA(props) {
  const { url, title, subTitle, linkText } = props;

  return (
    <div className="pds-grid hero-cta">
      <div
        className="pds-grid-item pds-grid-item--md-6 hero-cta-image"
        slot="first-item"
      >
        <StaticImage
          src="https://cdn.bfldr.com/MEM5087K/at/933t7sx45wwnmsrrjq94z4f/front-page-hero.png?auto=webp&format=png"
          alt=""
          placeholder="none"
          width={1080}
        />
      </div>
      <div
        className="pds-grid-item pds-grid-item--md-6 hero-cta-text"
        slot="second-item"
      >
        <h1>{title}</h1>
        <p className="pds-lead-text">{subTitle}</p>
        <Link
          to={url}
          className="pds-button pds-button--lg pds-spacing-mar-block-start-m"
        >
          {linkText}
          <Icon iconName="arrowRight" iconSize="lg" />
        </Link>
      </div>
    </div>
  );
}

HeroCTA.propTypes = propTypes;

export default HeroCTA;
