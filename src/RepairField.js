import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import './RepairField.css';

/**
  RepairField component is used to highlight the differences in the form for repair, by comparign the old against the new values.
**/

class RepairField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

showHideOldValue = (oldValue, showOldValueHeading, showExpandArrow, theme) => (
  <div className="repairFieldComponent">
    <div className={`callout ${!this.state.expanded ? `contentHidden`: ``}`}>
      <div className={`text-content ${!this.state.expanded ? `contentHidden`: ``}`}>  
        {showOldValueHeading ? this.renderOldValueHeading() : null}
        {this.renderOldValue(oldValue)}
      </div>
      <div className="handle">
        {showExpandArrow ? this.renderExpandArrow() : null}
      </div>
      <b class="border-notch notch"></b>
      <b class="notch"></b>
    </div>
  </div>
);

renderExpandArrow = () => (
  <span class=" icon sc-scb-135-arrow-right actionIcon" onClick={this.toggle}></span>
);

  renderOldValue = (oldValue) => (
    this.state.expanded ? <label className="oldValue">{oldValue}</label> : null
  );

  renderOldValueHeading = () => (
    this.state.expanded ? <div><label className="previousHeading" theme={{ size: 'extra-extra-small' }}>PREVIOUS</label></div> : null
  );

  renderNewValue = (oldValue,newValue) =>(
    (newValue !== oldValue) ? <label className="newValue repairedFieldColor"><span>{newValue}</span></label>:  <label className="newValue"><span>{newValue}</span></label>
  )

  render() {
    const {
      newValue,
      oldValue,
      showOldValueHeading,
      showExpandArrow,
      theme
    } = this.props;
    return (
      <div className="repairFieldContainer">
        <div>
          {this.renderNewValue(oldValue,newValue)}
        </div>
        {(newValue !== oldValue) ? this.showHideOldValue(oldValue, showOldValueHeading, showExpandArrow, theme) : null}
      </div>
    );
  }
}

RepairField.propTypes = {
  /**
   * Takes in the Old value
   */

  oldValue: PropTypes.string,

  /**
   * Takes in the New value
   */
  newValue: PropTypes.string,
  /**
   * Takes in the Old Value heading
   */
  showOldValueHeading: PropTypes.bool,

  /**
   * Flag to show hide arrow icon
   */
  showExpandArrow: PropTypes.bool,

  /**
   * Specifies theme overrides.
   */
  theme: PropTypes.shape({
    size: PropTypes.string,
    repairfield: PropTypes.string
  })
};

RepairField.defaultProps = {
  showOldValueHeading: true,
  showExpandArrow: true
};

export default RepairField;
