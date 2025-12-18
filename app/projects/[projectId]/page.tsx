import React from 'react'
import Home from '@/components/Home/Home';
import { getProjectById } from "@/sanity/sanity-utils";
import Image from 'next/image';
import { headers } from 'next/headers';
import ProjectView from '../ProjectView';



export default async function ProjectPage({ params }: { params: { projectId: string } }) {

  const projectId = await params.projectId;

  const project = await getProjectById(projectId)


  return (
      <ProjectView project={project} />
  );

};

