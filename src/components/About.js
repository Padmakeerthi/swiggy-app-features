import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
    <div>About</div>
    <User  name={"First"} location={"Dehradun function"} />
    <UserClass  name={"First"} location={"Dehradun Class"} />
    </div>
  )
}

export default About;