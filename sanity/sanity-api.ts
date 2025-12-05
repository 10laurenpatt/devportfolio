import { headers } from "next/headers";
import { getProjects } from "./sanity-utils";

export async function getHeader() {
  const headersList = await headers()

  const currentUrl = headersList.get('referer');

  console.log("Current URL", currentUrl);

  const projects = await getProjects();
}