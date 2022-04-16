const courseTemplate = ({ title, image, description, duration }) => `
  <article class="box">
    <h2>${title}</h2>
    <a href="${image.url}" title="Click to see full image">
      <img src="${image.url}" alt="${image.alt || title}" />
    </a>
    <p><span>Description:</span> ${description}</p>
    <p><span>Duration:</span> ${duration}</p>
    <a href="${image.url}" class="button">View full image</a>
  </article>
`;

export default courseTemplate;
