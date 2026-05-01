import React from "react";
import Team from "../components/Team";
import PageHeader from "../components/PageHeader";

const TeamPage = () => {
  return (
    <>
      <div className="bg-gray-50 pt-20">
        
        {/* HEADER */}
        <PageHeader title="Team"/>
        <Team showHeader={false} />
      </div>
    </>
  );
};

export default TeamPage;
