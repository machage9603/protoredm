export function generateReadmeContent(template: string, details: ProjectDetails): string {
    // Implementation of README content generation
    // This is a placeholder and should be replaced with actual logic
    return template.replace(/\[(\w+)\]/g, (_, key) => details[key as keyof ProjectDetails] || '');
  }