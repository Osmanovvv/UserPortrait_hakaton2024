import React from 'react';
import UserMenu from '../UI/UserMenu/UserMenu';
import ProjectDescription from '../UI/ProjectDescription/ProjectDescription';
import RadarChart from '../../js/RadarChart';
import GroupBlock from '../UI/GroupBlock/GroupBlock';

export default function Main() {
  return (
    <>
      <UserMenu />
      <ProjectDescription />
      <RadarChart />
      <GroupBlock />
    </>
  );
}
