export function formatResponse(content) {
    // Replace "**" with bold tags and create line breaks for better readability
    const formattedContent = content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
    return formattedContent
}