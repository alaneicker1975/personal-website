import React from 'react';
import PropTypes from 'prop-types';
import { Link, List, ListItem } from '@atomikui/core';

const ContactInfo = ({ email, phone, contactHeading }) => (
  <>
    <h4 className="section-subheading">{contactHeading}</h4>
    <List>
      <ListItem>
        <Link className="text-weight-medium" href={`mailto:${email}`}>
          {email}
        </Link>
      </ListItem>
      <ListItem>{phone}</ListItem>
    </List>
  </>
);

ContactInfo.propTypes = {
  contactHeading: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

ContactInfo.defaultProps = {
  contactHeading: '',
  email: '',
  phone: '',
};

export default ContactInfo;
