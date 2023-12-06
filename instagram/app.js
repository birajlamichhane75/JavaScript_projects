let story = document.querySelector(".story");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let count = 0;
let image = document.querySelectorAll(".image")
let fullScreen = document.querySelector("#fullScreen");
let container = document.querySelector(".container");
let line = document.querySelector(".line");
let cross = document.querySelector("#cross");
let navi = document.querySelector(".nav")



// console.log(story);

let slideRight = () => {
    count++
    // console.log(count);
    story.style.transform = `translateX(-${count * 22}%)`;
}
let slideLeft = () => {

    count--
    if (count < 0) {
        count = 0;
    }
    // console.log(count);
    story.style.transform = `translateX(-${count * 22}%)`;
}


let arr = [
    {
        dp: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
        story: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        dp: "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHl8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1545912453-3d32e20f72bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",
        story: "https://plus.unsplash.com/premium_photo-1681503974121-b9387f3aea69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    },
    {
        dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1604681527661-41ab3a47b2c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1549476464-37392f717541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    }
];

let showstory = () => {
    let clutter = "";

    arr.forEach(
        (elem, index) => {
            clutter += `
        <div class="circle">
            <img id = "${index}" src="${elem.dp}" alt="">
        </div>`
        }

    )
    story.innerHTML = clutter;

    story.addEventListener(
        "click",
        function (event) {
            let image = document.createElement('img');
            image.setAttribute('src',arr[event.target.id].story);
            fullScreen.appendChild(image);
            // fullScreen.style.backgroundImage = `url(${arr[event.target.id].story})`;
            fullScreen.style.display = 'block';
            container.style.overflow = "hidden";
            left.style.zIndex = "-1";
            right.style.zIndex = "-1";
            line.style.display = "block";
            navi.style.display = "none";

            setTimeout(() => {
                image.removeAttribute('src');
                fullScreen.style.display = 'none';
                container.style.overflow = "auto";
                left.style.zIndex = "1";
                right.style.zIndex = "1";
                line.style.display = "none";
                navi.style.display = "flex";
            }, 5000)

        }
    )

}


// For Post
let feed = document.querySelector(".feed");

let postArr = [
    {
        name: "Leo Messi",
        dp: "https://c4.wallpaperflare.com/wallpaper/216/42/445/lionel-messi-4k-hd-download-wallpaper-preview.jpg",
        post: "https://wallpapers.com/images/featured/messi-4k-ultra-hd-t7otmb1xwl662a0r.jpg",
    },
    {
        name: "David Beckam",
        dp: "https://www.mundodeportivo.com/us/files/image_948_465/uploads/2023/10/05/651ee9b057286.jpeg",
        post: "https://i0.wp.com/short-biography.com/wp-content/uploads/david-beckham/David-Beckham.jpg?w=2048&ssl=1",
    },
    {
        name: "Zyan Malik",
        dp: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/220px-Zayn_Wiki_%28cropped%29.jpg",
        post: "https://media.vogue.es/photos/5cc76191ef0e5a1f43181265/master/w_1600,c_limit/vogue_espana_275433774.jpg",
    },
    {
        name: "_iamsrk",
        dp: "https://c.saavncdn.com/010/Best-of-Shahrukh-Khan-Bengali-2020-20200715152009-500x500.jpg",
        post: "https://images.livemint.com/img/2023/01/22/600x338/PTI01-13-2023-000336A-0_1674368569639_1674368569639_1674368614868_1674368614868.jpg",
    },
    {
        name: "Fitness Temple",
        dp: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        post: "https://images.unsplash.com/photo-1549476464-37392f717541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
    }
];


let postpic = () => {
    let clutter1 = "";
    postArr.forEach(
        (elem, index) => {
            clutter1 += `
       
       <div class="post">
       
            <div class="name">
                <img src=${elem.dp} alt="">
                <h4>${elem.name}</h4>
            </div>
            <img src="${elem.post}" alt="">
            <i class="love fa-sharp fa-solid fa-heart"></i>
            
            <div class = "icon">
                <i class="fa-sharp fa-regular fa-heart loveIcon"></i>
                <i class="fa-sharp fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
                <i class="fa-regular fa-bookmark" id = "save"></i>
            </div>
   </div>`
        }

    )
    feed.innerHTML = clutter1;
}


// For Like
let likepost = () => {
    feed.querySelectorAll(".post").forEach((e) => {
        e.addEventListener("dblclick", (dets) => {
            let heart = e.querySelector('.loveIcon')

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
            heart.style.color = "red";

            let love = e.querySelector(".love")

            love.style.transform = 'translate(-50%,-50%) scale(2)';
            love.style.opacity = '0.9';
            setTimeout(() => {
                love.style.opacity = '0';
                love.style.transform = 'translate(-50%,-50%) scale(0)';
            }, 1000);
        })
    })

    feed.querySelectorAll(".loveIcon").forEach((heart) => {
        heart.addEventListener("click", (dets) => {

            let love = heart.parentElement.parentElement.querySelector('.love')

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
            heart.style.color = "red";
            love.style.opacity = '1';
            love.style.transform = 'translate(-50%,-50%) scale(2)';
            setTimeout(() => {
                love.opacity = '0';
                love.style.transform = 'translate(-50%,-50%) scale(0)';
            }, 1000);
        })
    })
}


postpic();
showstory();
likepost();