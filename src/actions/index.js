"use server"
import fs from 'fs';
import path from 'path';

export const getProjectDetails = async (fileName) => {
    try {
        const filePath = path.resolve(`src/data/projects/${fileName}.json`);
        const projectDetails = fs.readFileSync(filePath, "utf8");

        if (projectDetails) return { status: true, data: JSON.parse(projectDetails) };
        return { status: false, error: "Data Not Found!" };
    } catch (error) {
        console.log(error);
        return { status: false, error: error.message };
    }
};