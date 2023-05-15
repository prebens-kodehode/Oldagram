const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const wrapper = document.getElementById("wrapper");

// add html to DOM for every item in array with content from array
function renderPosts() {
  let renderedPosts = "";

  for (let i = 0; i < posts.length; i++) {
    renderedPosts += `<section class="post">
            <section class="profile">
                <img
                class="avatar"
                src="${posts[i].avatar}"
                alt="avatar of ${posts[i].name}"
                />
                <div>
                <p class="bold">
                    ${posts[i].name}
                </p>
                <p>${posts[i].location}</p>
                </div>
            </section>
            <section>
                <img
                class="postimage"
                src="${posts[i].post}"
                id="img${i}"
                alt="Self portrait of ${posts[i].name}"
                />
            </section>
            <section>
                <div class="icons">
                <img class="icon" id="heart${i}" src="images/icon-heart.png" alt="heart icon" />
                <img class="icon" src="images/icon-comment.png" alt="comment icon" />
                <img class="icon" src="images/icon-dm.png" alt="direct message icon" />
                </div>
                <div>
                <p class="likes bold">
                    <span id="likes${i}">${posts[i].likes}</span> likes
                </p>
                </div>
                <div>
                <p class="comment">
                    <span class="bold">
                    ${posts[i].username}
                    </span>
                    ${posts[i].comment}
                </p>
                </div>
            </section>
            </section>`;
  }
  wrapper.innerHTML = renderedPosts;
}

renderPosts();

// add or remove likes and animate/turn heart icon red when double clicking image or clicking heart icon
for (let i = 0; i < posts.length; i++) {

  //adds event listeners to every image and heart icon
  document.getElementById("img" + i).addEventListener("dblclick", addLikes);
  document.getElementById("heart" + i).addEventListener("click", addLikes);

  function addLikes() {
    const likesEl = document.getElementById("likes" + i);

    const imgEl = document.getElementById("heart" + i);

    imgEl.className = "icon anim";

    if (likesEl.innerHTML > posts[i].likes) {
      likesEl.innerHTML = posts[i].likes;
      setTimeout(() => {
        imgEl.src = "images/icon-heart.png";
      }, 100);
    } else {
      likesEl.innerHTML = posts[i].likes + 1;
      setTimeout(() => {
        imgEl.src = "images/icon-heart-red.png";
      }, 100);
    }

    setTimeout(() => {
      imgEl.className = "icon";
    }, 200);
  }
}
