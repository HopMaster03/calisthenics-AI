import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text6">
                        Ready to start your Calisthenics journey?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        Take the first step towards a healthier lifestyle with
                        our personalized questionnaire.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <Link to="/login" className="cta26-navlink thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text5">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  content1: undefined,
  action1: undefined,
  heading1: undefined,
}

CTA26.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA26
