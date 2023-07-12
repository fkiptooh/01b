/**
 * Add date to output.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 */

import data from "./data.js";

const mainContent = document.querySelector(".main-content");

const Card = (data) => {
  // four objects 1,2,3,4
  // indexes      0,1,2,3

  // object
  const x = data[0];

  // Date function
  // debug - find errors
  const getDate = (x) => {
    const date = new Date(x.created_at);
    const readableDate = date.toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return readableDate;
  };

  // Image function.
  // map
  const buidImage = (x) => {
    let srcset = `${x.urls.full} ${x.width}w`;
    if (x.urls.regular) {
      srcset = `${x.urls.regular} 1080w`;
    }
    if (x.urls.small) {
      srcset = `${x.urls.small} 400w`;
    }

    const img = `
   <img
        srcset="${srcset}"
        sizes="(max-width: 450px) 400px, (max-width: 800) 1080px"
        src="${x.urls.regular}"
        width="${x.width}"
        height="${x.height}"
        alt="${x.description}"
        loading="lazy"
      />
   `;
    return img;
  };

  const markup = `
    <div class="image">
      ${buidImage(x)}
      <figcaption class="image__caption">
        <h3 class="image__title">${x.description}</h3>
        <div class="image__meta">
          <p>
            Photo by
            <span class="image__photog">${x.user.name}</span>.
          </p>
          <p>
          Uploaded On <time datetime="${x.created_at}">${getDate(x)}</time>
          </p>
          <p>
            <a href="${x.links.self}" class="image__link">
              View it on Unsplash.
            </a>
          </p>
        </div>
      </figcaption>
    </div>
  `;

  mainContent.innerHTML = markup;
};

// export default Card;

Card(data);
