const blogPosts = [
    {
      id: 1,
      title: "Obi emerges President",
      postImg:
        "https://cdn.pixabay.com/photo/2018/10/31/15/27/kenya-3786065_960_720.jpg",
      story:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  
    {
      id: 2,
      title: "Fashion as it should be",
      postImg:
        "https://cdn.pixabay.com/photo/2018/04/07/19/39/woman-3299379_960_720.jpg",
      story:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 3,
      title: "Nigerian women, Fashion and money",
      postImg:
        "https://cdn.pixabay.com/photo/2018/10/31/15/27/kenya-3786065_960_720.jpg",
      story:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  
    {
      id: 4,
      title: "Classic fashion styles for ladies",
      postImg:
        "https://cdn.pixabay.com/photo/2018/10/31/15/27/kenya-3786065_960_720.jpg",
      story:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 5,
      title: "Hunger in the Fahion industry",
      postImg:
        "https://cdn.pixabay.com/photo/2018/10/31/15/27/kenya-3786065_960_720.jpg",
      story:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 6,
      title: "Remedy your fashion style",
      postImg:
        "https://cdn.pixabay.com/photo/2018/10/31/15/27/kenya-3786065_960_720.jpg",
      story:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  
  const blogContainer = document.getElementById("blogRightSide");
  blogPosts.map((blogItem, i) => {
    // console.log('mapping')
    const { id, title, postImg, story } = blogItem;
    const crBlogBox = document.createElement("div");
    crBlogBox.className = "crBlogBox";
  
    let blogDetails = ` <img class="right_img" alt="blog img" src=${postImg} />
    <h3>${title}</h3>
    <p>${story.slice(0, 40) + "..."}</p>`;
  
    crBlogBox.innerHTML = blogDetails;
    blogContainer.append(crBlogBox);
  });
  