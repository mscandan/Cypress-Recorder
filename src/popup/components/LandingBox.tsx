import * as React from 'react';

export interface LandingBoxProps {
  isValidTab: boolean;
}

export default ({ isValidTab }: LandingBoxProps) => (
  <div id="landing-box">
    {isValidTab ? (
      <p className="text">Click &apos;Start Recording&apos; to start recording!</p>
    ) : (
      <p className="text">This is not a valid page for recording.</p>
    )}
  </div>
);
