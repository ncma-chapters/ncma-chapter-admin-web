// Node modules.
import React from 'react';
import { Link } from 'react-router-dom';
// Relative imports.
import NavTop from 'components/NavTop';
import calendarIcon from 'assets/calendar.svg';
import governmentIcon from 'assets/government.svg';
import { Wrapper } from './styles';

const Dashboard = () => (
  <Wrapper>
    {/* Navigation */}
    <NavTop />

    {/* Page Content */}
    <div className="content">
      <h1>Welcome back!</h1>
      <p>What would you like to do?</p>

      <div className="items">
        {/* Events Link */}
        <Link className="item" to="/events">
          <img alt="events icon" src={calendarIcon} />
          Manage events
        </Link>

        {/* Venues Link */}
        <Link className="item" to="/venues">
          <img alt="venues icon" src={governmentIcon} />
          Manage venues
        </Link>
      </div>
    </div>
  </Wrapper>
);

export default Dashboard;
