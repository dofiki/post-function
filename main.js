let main = document.querySelector('.main');
let topTab = main.querySelector('.topTab');
let POSTBTN = topTab.querySelector('#POSTBTN');
let inputText = topTab.querySelector('.inputText');

POSTBTN.addEventListener("click", function(){

    let post = document.createElement('div');
    post.className = 'post';
    main.appendChild(post);

    let postTop = document.createElement('div');
    postTop.className = 'postTop';
    post.appendChild(postTop);

    let postTopLeft = document.createElement('div');
    postTopLeft.className = 'postTopLeft';
    postTop.appendChild(postTopLeft);

    let postTopLeftUserPhotoContainer = document.createElement('div');
    postTopLeftUserPhotoContainer.className = 'postTopLeftUserPhotoContainer';
    postTopLeft.appendChild(postTopLeftUserPhotoContainer);

    let postTopUserPhoto = document.createElement('img');
    postTopUserPhoto.src = "user.png";
    postTopLeftUserPhotoContainer.appendChild( postTopUserPhoto);
    postTopUserPhoto.className = 'postTopUserPhoto';

    let nameAndDisc = document.createElement('div');
    nameAndDisc.className = 'nameAndDisc';
    postTopLeft.appendChild(nameAndDisc);

    let name = document.createElement('div');
    name.className = 'name';
    nameAndDisc.appendChild(name);
    name.innerText = 'user';

    let time = document.createElement('div');
    time.className = 'time';
    nameAndDisc.appendChild(time);
    time.innerText = 'just now';

    let topMid = document.createElement('div');
    topMid.className = 'topMid';
    postTop.appendChild(topMid);

    let topRight = document.createElement('div');
    topRight.className = 'topRight';
    postTop.appendChild(topRight);

    let topRightImg = document.createElement('img');
    topRightImg.src = "more.png";
    topRight.appendChild(topRightImg);
    topRightImg.className = 'topRightImg';

    let mid = document.createElement('div');
    mid.className = 'mid';
    post.appendChild(mid);

    let midP = document.createElement('div');
    midP.className = 'midP';
    mid.appendChild(midP);
    midP.innerText= inputText.value;
  
    let bottom = document.createElement('div');
    bottom.className = 'bottom';
    post.appendChild(bottom);

    let like = document.createElement('div');
    like.className = 'like';
    bottom.appendChild(like);

    let comment = document.createElement('div');
    comment.className = 'comment';
    bottom.appendChild(comment);
    
    let likeImg = document.createElement('img');
    likeImg.src = "like.png";
    like.appendChild(likeImg);
    likeImg.className = 'likeImg';

    let commentImg = document.createElement('img');
    commentImg.src = "chat.png";
    comment.appendChild(commentImg);
    commentImg.className = 'commentImg';
})