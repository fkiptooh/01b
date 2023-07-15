const Card = (imgData) => {
    // four objects 1,2,3,4
    // indeimgDataes      0,1,2,3
  
    // object
    // const imgData = data[0];
  
    // Date function
    // debug - find errors
    const getDate = (imgData) => {
      const date = new Date(imgData.created_at);
      const readableDate = date.toLocaleString("default", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      return readableDate;
    };
  
    // Image function.
    // map
    const buidImage = (imgData) => {
      let srcset = `${imgData.urls.full} ${imgData.width}w`;
      if (imgData.urls.regular) {
        srcset = `${imgData.urls.regular} 1080w`;
      }
      if (imgData.urls.small) {
        srcset = `${imgData.urls.small} 400w`;
      }
  
      const img = `
     <img
          srcset="${srcset}"
          sizes="(maimgData-width: 450pimgData) 400pimgData, (maimgData-width: 800) 1080pimgData"
          src="${imgData.urls.regular}"
          width="${imgData.width}"
          height="${imgData.height}"
          alt="${imgData.description}"
          loading="lazy"
        />
     `;
      return img;
    };
  
    return `
      <div class="image">
        ${buidImage(imgData)}
        <figcaption class="image__caption">
          <h3 class="image__title">${imgData.description}</h3>
          <div class="image__meta">
            <p>
              Photo by
              <span class="image__photog">${imgData.user.name}</span>.
            </p>
            <p>
            Uploaded On <time datetime="${imgData.created_at}">${getDate(imgData)}</time>
            </p>
            <p>
              <a href="${imgData.links.self}" class="image__link">
                View it on Unsplash.
              </a>
            </p>
          </div>
        </figcaption>
      </div>
    `;
  
  };

  export default Card;