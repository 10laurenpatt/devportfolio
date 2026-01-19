export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'fallbackProjectId'
export const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
export const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'

if (!projectId) throw new Error('Missing environment variable: SANITY_STUDIO_PROJECT_ID')
if (!dataset) throw new Error('Missing environment variable: SANITY_STUDIO_DATASET')