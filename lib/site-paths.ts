const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "personal-website";

export const siteBasePath = isGitHubPages ? `/${repoName}` : "";
export const resumePdfHref = `${siteBasePath}/Samyak_Jain_Resume.pdf`;
