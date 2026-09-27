import React from 'react';

function ProfileIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://w3.org">
      {/* Background Circle */}
      <circle cx="50" cy="50" r="50" fill="#C5627C"/>
      {/* User Head */}
      <circle cx="50" cy="40" r="16" fill="#F8C2CD"/>
      {/* User Shoulders */}
      <path d="M18 80C18 64.536 30.536 52 46 52H54C69.464 52 82 64.536 82 80V84H18V80Z" fill="#F8C2CD"/>
    </svg>
  );
}
export default ProfileIcon;
