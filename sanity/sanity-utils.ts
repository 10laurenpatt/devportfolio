import { createClient, groq } from "next-sanity";


export async function getProjects() {
    const client = createClient({
        projectId: "pzzzkbm0",
        dataset: "production",
        apiVersion: "2025-07-09",
    });


    return client.fetch(
        groq`*[_type == "project"] {
            _id,
            _createdAt,
            name,
            description, 
            "image": image.asset->url,
            url
        }`
    )
}

export async function getProjectById(projectId : string) {
     const client = createClient({
        projectId: "pzzzkbm0",
        dataset: "production",
        apiVersion: "2025-07-09",
    });
    return client.fetch(
    groq`*[_type == "project" && _id == $projectId][0] {
            _id,
            _createdAt,
            name,
            description, 
            "image": image.asset->url,
            url
        }`,
        { projectId }  
    )
}