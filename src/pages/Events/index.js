// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Relative imports.
import NavTop from 'components/NavTop';
import boxIcon from 'assets/box.svg';
import pencilIcon from 'assets/pencil.svg';
import { fetchEventsAction, updateEventAction } from 'containers/Events/actions';
import { fetchVenuesAction } from 'containers/Venues/actions';
import { Wrapper } from './styles';

class Events extends Component {
  static propTypes = {
    // From mapStateToProps.
    eventIDs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    eventsLookup: PropTypes.object.isRequired,
    venuesLookup: PropTypes.object.isRequired,
    // From mapDispatchToProps.
    fetchEvents: PropTypes.func.isRequired,
    fetchVenues: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchVenues();
  }

  onPublishEvent = (eventID) => {
    const { eventsLookup } = this.props;

    // Derive the event.
    const event = get(eventsLookup, `[${eventID}]`);

    // Attempt to publish the event.
    this.props.updateEvent({ ...event, draft: false });
  };

  render() {
    const { onPublishEvent } = this;
    const { eventsLookup, eventIDs, venuesLookup } = this.props;

    return (
      <Wrapper>
        {/* Navigation */}
        <NavTop />

        {/* Page Content */}
        <div className="content">
          {/* Header */}
          <div className="header">
            <h1>EVENTS</h1>
            <Link to="/events/create">Create Event</Link>
          </div>

          {/* Sorting/Filtering */}
          <div className="results-filters"></div>

          <div className="items">
            {/* No Events */}
            {isEmpty(eventIDs) && (
              <div className="no-events">
                <h2>It&apos;s sad but true. There are no events here, yet.</h2>
                <Link to="/events/create">Create your first event!</Link>
                <img alt="no events" src={boxIcon} />
              </div>
            )}

            {/* List of Events */}
            {map(eventIDs, (eventID) => {
              // Derive event properties.
              const event = get(eventsLookup, `[${eventID}]`);
              const draft = get(event, 'draft');
              const id = get(event, 'id');
              const imageURL = get(event, 'imageURL');
              const startsAt = get(event, 'startsAt');
              const title = get(event, 'title');

              // Derive venue properties.
              const venue = get(venuesLookup, `[${get(event, 'venueID')}]`);
              const venueName = get(venue, 'name', 'Unknown venue');

              return (
                <div className="item" key={id}>
                  {/* Event Image */}
                  <img alt="event" src={imageURL} />

                  {/* Event Info */}
                  <div className="item-info">
                    <p className="starts-at">{moment(startsAt).format('ddd, MMM D, YYYY, h:mm A')}</p>
                    <p className="title">{title}</p>
                    <p className="venue-name">{venueName}</p>
                    <p className="price">Free</p>
                  </div>

                  {/* Event Actions */}
                  <div className="actions">
                    {/* Edit Event */}
                    <Link to={`/events/${eventID}`}>
                      <img alt="edit event" src={pencilIcon} />
                    </Link>

                    {/* Publish Event */}
                    {draft && (
                      <button className="publish" onClick={onPublishEvent} type="button">
                        Publish Event
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  eventsLookup: state.eventsReducer.eventsLookup,
  eventIDs: state.eventsReducer.eventIDs,
  venuesLookup: state.venuesReducer.venuesLookup,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEventsAction()),
  fetchVenues: () => dispatch(fetchVenuesAction()),
  updateEvent: (event) => dispatch(updateEventAction(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
