"use client"

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Resume from '@/components/Resume';
import RESUME_DETAILS from '@/data/resume';

const ResumePage = () => {
    const [resume, setResume] = useState(null);

    useEffect(() => {
        setResume(RESUME_DETAILS);
    }, []);

    return (
        <Layout>
            {resume && <Resume {...resume} />}
        </Layout >
    );
};

export default ResumePage;