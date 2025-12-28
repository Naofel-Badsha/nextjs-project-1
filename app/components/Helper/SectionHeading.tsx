import React from 'react';
type Props = {
    heading: string;
    subHeading: string;
}

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="sm:text-3x1 text-2x1 font-bold ☐ text-gray-800 dark: text-gray-200 text-center">
        (heading)
      </h1>
      <p
        className="text-center mt-3text-gray-500
dark:text-gray-400"
      >
        (subHeading)
      </p>
    </div>
  );
};

export default SectionHeading;