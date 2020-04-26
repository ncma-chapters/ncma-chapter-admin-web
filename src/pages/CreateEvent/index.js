// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import get from 'lodash/get';
import invoke from 'lodash/invoke';
import map from 'lodash/map';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Relative imports.
import ImageDropzone from 'components/ImageDropzone';
import NavTop from 'components/NavTop';
import Spinner from 'components/Spinner';
import calendarIcon from 'assets/calendar2.svg';
import chevronIcon from 'assets/chevron.svg';
import infoIcon from 'assets/info.svg';
import pinIcon from 'assets/pin.svg';
import { createEventAction } from 'containers/Events/actions';
import { fetchVenuesAction } from 'containers/Venues/actions';
import { Wrapper } from './styles';

const FIELDS = {
  title: 'title',
  shortDescription: 'shortDescription',
  description: 'description',
  capacity: 'capacity',
  certificationCredits: 'certificationCredits',
  venueID: 'venueID',
};

class CreateEvent extends Component {
  static propTypes = {
    // From mapStateToProps.
    creating: PropTypes.bool.isRequired,
    venueIDs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    venuesLookup: PropTypes.object.isRequired,
    // From mapDispatchToProps.
    createEvent: PropTypes.func.isRequired,
    fetchVenues: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      capacity: '',
      certificationCredits: '',
      description: '',
      endDate: null,
      eventImageError: '',
      focusedInput: null,
      imageURL: '',
      shortDescription: '',
      startDate: null,
      title: '',
      selectedVenue: undefined,
    };
  }

  componentDidMount() {
    this.props.fetchVenues();
  }

  componentWillUnmount() {
    // Prevent memory leak.
    URL.revokeObjectURL(this.state.imageURL);
  }

  deriveEvent = () => {
    const {
      capacity,
      certificationCredits,
      description,
      endDate,
      imageURL,
      shortDescription,
      startDate,
      title,
      selectedVenue,
    } = this.state;

    return {
      capacity,
      certificationCredits,
      description,
      draft: true,
      endsAt: invoke(endDate, 'toISOString'),
      imageURL,
      shortDescription,
      startsAt: invoke(startDate, 'toISOString'),
      tagIDs: [],
      title,
      venueID: get(selectedVenue, 'value'),
    };
  };

  deriveVenueOptions = () => {
    const { venueIDs, venuesLookup } = this.props;

    return map(venueIDs, (id) => {
      // Derive venue properties.
      const venue = get(venuesLookup, `[${id}]`);
      const address = get(venue, 'address');
      const capacity = get(venue, 'capacity');
      const name = get(venue, 'name');

      return {
        label: [name, address, `capacity: ${capacity}`].join(' | '),
        value: id,
      };
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onDateRangeFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  onImageDrop = (acceptedFiles) => {
    // Derive the single file.
    const file = get(acceptedFiles, '[0]');

    this.setState({ imageURL: URL.createObjectURL(file) });
  };

  onSaveDraft = () => {
    // Derive the event.
    const event = this.deriveEvent();

    // Attempt to create event.
    this.props.createEvent(event);
  };

  onPublish = () => {
    // Derive the event.
    const event = {
      ...this.deriveEvent(),
      draft: false,
    };

    // Attempt to create event.
    this.props.createEvent(event);
  };

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  render() {
    const {
      deriveVenueOptions,
      onDatesChange,
      onDateRangeFocusChange,
      onImageDrop,
      onStateChange,
      onSaveDraft,
      onPublish,
    } = this;
    const { creating } = this.props;
    const {
      capacity,
      certificationCredits,
      description,
      endDate,
      eventImageError,
      focusedInput,
      imageURL,
      selectedVenue,
      shortDescription,
      startDate,
      title,
    } = this.state;

    return (
      <Wrapper>
        {/* Navigation */}
        <NavTop />

        {/* Page Content */}
        <div className="content">
          {/* Breadcrumbs */}
          <Link className="breadcrumb" to="/events">
            <img alt="chevron" src={chevronIcon} /> Back to Events
          </Link>

          {/* Title */}
          <h1>CREATE AN EVENT</h1>

          <div className="form-wrapper">
            {/* General Information Section */}
            <div className="form-section">
              {/* Form Header */}
              <div className="form-header">
                <img alt="general information icon" src={infoIcon} />
                <h2>General Information</h2>
                <p>
                  <span className="red">*</span> Indicates a required field
                </p>
              </div>

              {/* Title Field */}
              <label htmlFor={FIELDS.title}>
                <p>
                  Event Name <span className="red">*</span>
                </p>
                <input id={FIELDS.title} onChange={onStateChange('title')} type="text" value={title} />
              </label>

              {/* Short Description Field */}
              <label htmlFor={FIELDS.shortDescription}>
                <p>
                  Brief Description <span className="red">*</span>
                </p>
                <input
                  id={FIELDS.shortDescription}
                  onChange={onStateChange('shortDescription')}
                  type="text"
                  value={shortDescription}
                />
              </label>

              {/* Description Field */}
              <label htmlFor={FIELDS.description}>
                <p>Description</p>
                <input
                  id={FIELDS.description}
                  onChange={onStateChange('description')}
                  type="text"
                  value={description}
                />
              </label>

              {/* Capacity Field */}
              <label htmlFor={FIELDS.capacity}>
                <p>
                  Capacity <span className="red">*</span>
                </p>
                <input id={FIELDS.capacity} onChange={onStateChange('capacity')} type="text" value={capacity} />
              </label>

              {/* Certification Credits Field */}
              <label htmlFor={FIELDS.certificationCredits}>
                <p>Certification Credits</p>
                <input
                  id={FIELDS.certificationCredits}
                  onChange={onStateChange('certificationCredits')}
                  type="text"
                  value={certificationCredits}
                />
              </label>
            </div>

            {/* Location Section */}
            <div className="form-section">
              {/* Form Header */}
              <div className="form-header">
                <img alt="location icon" src={pinIcon} />
                <h2>Location</h2>
                <div />
              </div>

              {/* Choose Venue Field */}
              <div className="select-wrapper">
                <p>
                  Venue <span className="red">*</span>
                </p>
                <Select
                  className="select-field"
                  id={FIELDS.venueID}
                  noOptionsMessage={() => (
                    <p>
                      No venues found.{' '}
                      <Link className="link" to="/venues/create">
                        Create a venue.
                      </Link>
                    </p>
                  )}
                  onChange={(selectedVenue) => this.setState({ selectedVenue })}
                  options={deriveVenueOptions()}
                  value={selectedVenue}
                />
              </div>

              {/* Create Venue Link */}
              <Link className="link" to="/venues/create">
                Create a venue
              </Link>
            </div>

            {/* Date and Time Section */}
            <div className="form-section">
              {/* Form Header */}
              <div className="form-header">
                <img alt="calendar icon" src={calendarIcon} />
                <h2>Date and Time</h2>
                <div />
              </div>

              {/* Use datepicker here */}
              <DateRangePicker
                endDate={endDate}
                endDateId="endDate"
                focusedInput={focusedInput}
                onDatesChange={onDatesChange}
                onFocusChange={onDateRangeFocusChange}
                startDate={startDate}
                startDateId="startDate"
                minDate={moment()}
              />
            </div>

            {/* Event Image Section */}
            <div className="form-section">
              {/* Form Header */}
              <div className="form-header">
                <img alt="calendar icon" src={calendarIcon} />
                <h2>Event Image</h2>
                <div />
              </div>

              {/* Error */}
              {eventImageError && <p className="error">{eventImageError}</p>}

              {/* Drag Image Area */}
              <ImageDropzone
                onDrop={onImageDrop}
                onDropRejected={(eventImageError) => this.setState({ eventImageError })}
              />

              {/* Uploaded Image */}
              {imageURL && (
                <div className="uploaded-image">
                  <img alt="event" src={imageURL} />
                  <p>Uploaded</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="actions">
              {/* Cancel Button */}
              <Link className="cancel" to="/events">
                Cancel
              </Link>

              <div className="save-buttons">
                {/* Save as Draft */}
                <button className="save-draft" onClick={onSaveDraft} type="button">
                  {creating ? <Spinner /> : 'Save as Draft'}
                </button>

                {/* Publish */}
                <button className="save-publish" onClick={onPublish} type="button">
                  {creating ? <Spinner /> : 'Save and Publish'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  creating: state.eventsReducer.creating,
  venueIDs: state.venuesReducer.venueIDs,
  venuesLookup: state.venuesReducer.venuesLookup,
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEventAction(event)),
  fetchVenues: () => dispatch(fetchVenuesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
