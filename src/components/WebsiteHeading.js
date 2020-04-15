import React from 'react';

const WebsiteHeading = (props) => {
  const sitename = (props.sitename)  ? props.sitename : `<Your Website Name Here>`;

  return (
    <div class="ui inverted segment">
      <h3 class="ui teal inverted center aligned header">
        {sitename}
      </h3>
    </div>
  );
  
};

export default WebsiteHeading;