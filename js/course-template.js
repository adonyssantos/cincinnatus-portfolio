const courseTemplate = ({ title, image, description }) => `
  <article class="box">
    <h2>${title}</h2>
    <a href="${image.url}" target="_blank" title="Click to see full image">
      <img src="${image.url}" alt="${image.alt || title}" />
    </a>
    <p>${description}</p>
  </article>
`;

export default courseTemplate;
