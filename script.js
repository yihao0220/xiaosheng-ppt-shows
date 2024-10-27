// 视频数据
const videos = [
    { title: "视频 1", src: "path/to/video1.mp4" },
    { title: "视频 2", src: "path/to/video2.mp4" },
    { title: "视频 3", src: "path/to/video3.mp4" },
];

// 动态添加视频到页面
function addVideosToGallery() {
    const videoGallery = document.getElementById('video-gallery');
    
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        
        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoElement.controls = true;
        
        const title = document.createElement('h2');
        title.textContent = video.title;
        
        videoItem.appendChild(videoElement);
        videoItem.appendChild(title);
        videoGallery.appendChild(videoItem);
    });
}

// 当页面加载完成时，添加视频
window.addEventListener('load', addVideosToGallery);
