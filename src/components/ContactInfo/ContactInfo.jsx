import React, { useContext } from 'react';
import { Link, List, ListItem } from '@atomikui/core';
import { AppContext } from '../../context';

const ContactInfo = () => {
  const {
    content: {
      contact: { email, phone, contactHeading },
    },
  } = useContext(AppContext);

  return (
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
};

export default ContactInfo;
