import React from 'react';
import classes from './_ProjectDescription.scss'; 

const ProjectDescription = () => {
  return (
    <div className={classes.projectDescription}>
      <h2 className={classes.projectDescriptionMain}>Наш проект</h2>
      <p className={classes.projectDescriptionP}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend arcu et pulvinar sollicitudin. Nulla eget tortor augue. Sed felis mauris, laoreet et mollis sed, feugiat sit amet arcu. Ut vehicula lacus eu turpis placerat interdum. Duis ultricies gravida vehicula. Quisque porttitor tortor sit amet eros faucibus, sit amet facilisis tortor tempor.
      </p>
    </div>
  );
};

export default ProjectDescription;
