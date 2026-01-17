import { createClient, groq } from "next-sanity";

// Project Queries
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
            url,
            description, 
            "image": image.asset->url
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

//Hero Section Queries

export async function getHero() {
    const client = createClient({
        projectId: "pzzzkbm0",
        dataset: "production",
        apiVersion: "2025-07-09",
    });


    return client.fetch(
        groq`*[_type == "hero"] {
            _id,
            _createdAt,
            title1,
            title2,
            "image": image.asset->url,
            description
        }`
    )
}

//About Section Queries

export async function getAbout() {
    const client = createClient({
        projectId: "pzzzkbm0",
        dataset: "production",
        apiVersion: "2025-07-09",
    });


    return client.fetch(
        groq`*[_type == "about"] {
            _id,
            _createdAt,
            name,
            description,
            "image": image.asset->url,
            list[]
        }`
    )
}

//Services Section Queries

export async function getServices() {
    const client = createClient({
        projectId: "pzzzkbm0",
        dataset: "production",
        apiVersion: "2025-07-09",
    });


    return client.fetch(
        groq`*[_type == "service"] {
            _id,
            _createdAt,
            name,
            description,
            "image": image.asset->url,
        }`
    )
}