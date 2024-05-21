"use client"

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ProjectDetails from '@/components/ProjectDetails';
import PROJECTS from '@/data/projects';

const Project = ({ params }) => {
    const [project, setProject] = useState(null);

    const fetchData = async () => {
        const response = PROJECTS.find(item => item.slug === params.slug);
        console.log(response);

        if (!response) return alert("Something Went Wrong!");
        setProject(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Layout>
            {project && <ProjectDetails project={project} />}
        </Layout>
    );
};

export default Project;