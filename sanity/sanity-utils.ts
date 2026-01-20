import { groq } from "next-sanity";
import { sanityFetch } from "./lib/live";

// Project Queries
export async function getProjects() {
    return sanityFetch({
        query: groq`*[_type == "project"] {
            _id,
            _createdAt,
            name,
            url,
            description, 
            "image": image.asset->url
        }`
    })
}

export async function getProjectById(projectId : string) {
    return sanityFetch({
        query: groq`*[_type == "project" && _id == $projectId][0] {
            _id,
            _createdAt,
            name,
            description, 
            "image": image.asset->url,
            url
        }`,
        params: { projectId }  
    })
}

//Hero Section Queries

export async function getHero() {
    return sanityFetch({
        query: groq`*[_type == "hero"] {
            _id,
            _createdAt,
            title1,
            title2,
            "image": image.asset->url,
            description
        }`
    })
}

//About Section Queries

export async function getAbout() {
    return sanityFetch({
        query: groq`*[_type == "about"] {
            _id,
            _createdAt,
            name,
            description,
            "image": image.asset->url,
            list[]
        }`
    })
}

//Services Section Queries

export async function getServices() {
    return sanityFetch({
        query: groq`*[_type == "service"] {
            _id,
            _createdAt,
            name,
            description,
            "image": image.asset->url,
        }`
    })
}

//Skills Section Queries

export async function getSkills() {
    return sanityFetch({
        query: groq`*[_type == "skill"] {
            _id,
            _createdAt,
            name,
            "image": image.asset->url,
        }`
    })
}

//Contact Section Queries

export async function getContact() {
    return sanityFetch({
        query: groq`*[_type == "contact"] {
            _id,
            _createdAt,
            title,
            description,
        }`
    })
}