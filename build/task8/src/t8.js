"use strict";
const blogPost = {
    title: "Getting Started with TypeScript",
    content: "Learn the basics of TypeScript and its powerful features.",
    tags: ["TypeScript", "Programming", "Web Development"]
};
function displayTags(post) {
    console.log(`Tags: ${post.tags.join(", ")}`);
}
displayTags(blogPost);
