import React from 'react';
import GitHubCalendar from "react-github-calendar";


export default function GitCalender() {
 
  return (
		<div className=" w-full md:justify-center flex   pt-4 text-gray-800 font-mono  overflow-x-auto md:h-44 git ">
			<GitHubCalendar username="jeetb89" colorScheme="light" />
		</div>
  );
}
