const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = 'SPOTIFO';




const avatar = $('.avatar_sing');
const heading = $('.text_music');
const sing = $('.singer');
const audio = $('#audio');


const playlist = $('.list-song');
const playBtn = $('.player_control_playpause');
const progress = $('#progress');
const nextBtn = $('.nextBtn');
const preBtn = $('.preBtn');
const randomBtn = $('.icon_random');
const repeatBtn = $('.icon_repeat');
const iconRandom = $('.random');
const iconRepeat = $('.repeat');

const durationMusic = $('.vd-duration');
const endMusic = $('.elapsed_end')
const startMusic = $('.elapsed_start');

const changeBtn = $('.btn-change');








audio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    audio.addEventListener("loadeddata", () => {
        let mainAdDuration = audio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        endMusic.innerText = `${totalMin}:${totalSec}`;
    });
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    startMusic.innerText = `${currentMin}:${currentSec}`;
});





const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    settCongif: function(key, value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    songs: [
        {
            id: 1,
            name:'Luôn Yêu Đời',
            singer: 'Đen, Cheng',
            path: './music/song1.mp4',
            album: 'Luôn Yêu Đời',
            image: './img-song/song1.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 2,
            name:'Bạn Đời',
            singer: 'Karik, Gducky',
            path: './music/song2.mp4',
            album: 'Bạn Đời',
            image: './img-song/song2.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 3,
            name:'Anh Luôn Như Vậy',
            singer: 'B Ray',
            path: './music/song3.mp4',
            album: 'Anh Luôn Như Vậy',
            image: './img-song/song3.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 4,
            name:'Xích Thêm Chút',
            singer: 'Rapital, Groovie Lã Thắng, Tlinh, RPT MCK',
            path: './music/song4.mp4',
            album: 'Rapitalove',
            image: './img-song/song4.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 5,
            name:'Buồn Hay Vui',
            singer: 'VSOUL, MCK, Obito, Ronboogz, Boyzed',
            path: './music/song5.mp4',
            album: 'Buồn Hay Vui',
            image: './img-song/song5.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 6,
            name:'Mamma Mia',
            singer: 'HIEUTHUHAI, HURRYKNG, MANBO',
            path: './music/song6.mp4',
            album: 'Mamma Mia',
            image: './img-song/song6.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 7,
            name:'Có Lẽ Quá Khó Để Quên Một Người',
            singer: '1nG ft Nam Lee n’ Dblue',
            path: './music/song7.mp4',
            album: 'Luôn Yêu Đời',
            image: './img-song/song7.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 8,
            name:'INDOCTRINATED ',
            singer: 'GDUCKY',
            path: './music/song8.mp4',
            album: 'G,s',
            image: './img-song/song8.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 9,
            name:'Không Phải Gu',
            singer: 'HIEUTHUHAI',
            path: './music/song9.mp4',
            album: 'Ai Cũng Phải Bắt Đầu Từ Đâu Đó',
            image: './img-song/song9.jpg',
            addDay: '1 ngày trước',
        },
        {
            id: 10,
            name:'Anh Đã Ổn Hơn',
            singer: 'MCK',
            path: './music/song10.mp4',
            album: '99%',
            image: './img-song/song10.jpg',
            addDay: '1 ngày trước',
        }
    ],
   

    render: function(){
      
        //     return `
            
        //     <div class="ul-list " data-index="${index}">
        //         <div class="li-list ${index === this.currentIndex ? 'active' : ''} ">
        //             <div class="list number_list">
        //                 <i class="fa-solid fa-pause list-pause" style="color: #ebecf0;"></i>
        //                 <i class="fa-solid fa-play list-play" style="color: #ebecf0;"></i>
        //                 <span>${++index}</span>
        //             </div>
        //             <!-- tiểu đề -->
        //             <div class="list list_distance">
        //                 <div class="list_avatar color_bg">
        //                     <img src="${song.image}" alt="">
        //                 </div>
        //                 <div class="desc_list">
        //                     <a href="" class="
        //                     name_song">${song.name}</a>
        //                     <div class="name_sing sub-title">
        //                         <a href="">${song.singer}</a>
        //                         <a href=""></a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <!-- album -->
        //             <div class="list list_album">
        //                 <div class="desc_listablum sub-title">
        //                     <a href="">${song.album}</a>
        //                 </div>
        //             </div>
        //             <!-- time -->
        //             <div class="list list_addsong">
        //                 <div class="day_add sub-title">
        //                     <a>${song.addDay}</a>
        //                 </div>
        //             </div>
        //             <!-- video duration -->
        //             <div class="list list_video">
        //                 <div class="desc-duration sub-title">
        //                     <i class="fa-solid fa-heart" style="color: #1ed760;"></i>
        //                     <a href="" class="vd-duration${song.id}"></a>
        //                 </div>
        //               <audio id="audio${song.id}"  src="${song.path}"></audio>
                     
                        
        //             </div>
        //         </div>
              
               
        //     </div>
        //     `
        // })
        // playlist.innerHTML = htmls.join('\n');
        // const itemAudio = $(`#audio${song.id}`)
        // const fdskfjdks =  $(`vd-duration${song.id}`)
        // itemAudio.addEventListener("loadeddata", () => {
        //     let mainAdDuration = itemAudio.duration;
        //     let totalMin = Math.floor(mainAdDuration / 60);
        //     let totalSec = Math.floor(mainAdDuration % 60);
        //     if (totalSec < 10) {
        //         totalSec = `0${totalSec}`;
        //     }
            
        //     fdskfjdks.innerText = `${totalMin}:${totalSec}`;
        // });
        this.songs.forEach((song,index) => {
            const liItem = 
             `
                <div class="ul-list ${index === this.currentIndex ? 'active' : ''} " data-index="${index}">
                    <div class="li-list ">
                        <div class="list number_list">
                            <i class="fa-solid fa-pause list-pause" style="color: #ebecf0;"></i>
                            <i class="fa-solid fa-play list-play" style="color: #ebecf0;"></i>
                            <span>${++index}</span>
                        </div>
                        <!-- tiểu đề -->
                        <div class="list list_distance">
                            <div class="list_avatar color_bg">
                                <img src="${song.image}" alt="">
                            </div>
                            <div class="desc_list">
                                <a href="" class="
                                name_song">${song.name}</a>
                                <div class="name_sing sub-title">
                                    <a href="">${song.singer}</a>
                                    <a href=""></a>
                                </div>
                            </div>
                        </div>
                        <!-- album -->
                        <div class="list list_album">
                            <div class="desc_listablum sub-title">
                                <a href="">${song.album}</a>
                            </div>
                        </div>
                        <!-- time -->
                        <div class="list list_addsong">
                            <div class="day_add sub-title">
                                <a>${song.addDay}</a>
                            </div>
                        </div>
                        <!-- video duration -->
                        <div class="list list_video">
                            <div class="desc-duration sub-title">
                                <i class="fa-solid fa-heart" style="color: #1ed760;"></i>
                                <a href="" class="vd-duration${song.id}"></a>
                            </div>
                          <audio id="audio${song.id}"  src="${song.path}"></audio>
                         
                            
                        </div>
                    </div>
                </div>
                `
            playlist.insertAdjacentHTML("beforeend", liItem);
                  const itemAudio = $(`#audio${song.id}`)
                  const timeListAudio =  $(`.vd-duration${song.id}`)
                  itemAudio.addEventListener("loadeddata", () => {
            let mainAdDuration = itemAudio.duration;
            let totalMin = Math.floor(mainAdDuration / 60);
            let totalSec = Math.floor(mainAdDuration % 60);
            if (totalSec < 10) {
                totalSec = `0${totalSec}`;
            }
            
            timeListAudio.innerText = `${totalMin}:${totalSec}`;
        });
        });
        

       
    },
    
    handleEvents: function(){
        const _this = this;
        

        // xử lý khi play
        playBtn.onclick = function(){
            if(app.isPlaying){
                audio.pause();

            }else{
                audio.play();
            }
        }
        // khi bài hát chạy
        audio.onplay = function(){
            app.isPlaying = true;
            playBtn.classList.add('playing');

        }
        audio.onpause = function(){
            app.isPlaying = false;
            playBtn.classList.remove('playing');
            
        }
      

        // thay đổi thời gian theo nhạc
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100);
                progress.value = progressPercent;
            }
        }

        // khi tua
        progress.onchange = function(e){
            const seekTime = audio.duration /100 *e.target.value;
            audio.currentTime = seekTime;

        }
        // chuyển bài hát
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                app.nextSong();

            }
            audio.play()
        }
        // lùi lại bài hát
        preBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                app.preSong();
            }
            audio.play();
        }

        // random
        randomBtn.onclick = function(e){
            app.isRandom = !app.isRandom
            _this.settCongif('isRandom', _this.isRandom)
            iconRandom.classList.toggle('active', _this.isRandom);
            _this.render()
        }
        // repeat
        repeatBtn.onclick = function(e){
            app.isRepeat = !app.isRepeat
            _this.settCongif('isRepeat', _this.isRepeat)
            iconRepeat.classList.toggle('active', _this.isRepeat);
            _this.render()

        }
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play();
            }else{
                nextBtn.click();

            }
        }
       
        // click vào playlist 
        // chưa thêm option
        playlist.onclick = function(e){
            const clickSong = e.target.closest('.ul-list:not(.active)')
            const liList = $(`.li-list`)
            if(clickSong) {
                _this.currentIndex = Number(clickSong.dataset.index);
                _this.loadCurrentSong();
                _this.render();
                audio.play();
                liList.classList.add('active');

                
            }
        }
      
        



    },
    


    playRandomSong: function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);

        }while(newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();

    },
    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;

        }
        this.loadCurrentSong();

    },
    preSong: function(){
        this.currentIndex--;
        if(this.currentIndex < 0 ){
            this.currentIndex = this.songs.length - 1;

        }
        this.loadCurrentSong();

    },
    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },
    loadCurrentSong: function(){
        
        heading.textContent = this.currentSong.name;
        avatar.style.backgroundImage = `url('${this.currentSong.image}')`;
        sing.textContent = this.currentSong.singer;
        audio.src = this.currentSong.path;

    },
 
    
    

    start: function(){
       
        // xử lý sự kiện
       this.handleEvents();

       this.defineProperties();

       this.loadCurrentSong();

       this.loadConfig();

       

        
        // reder list music
        this.render();




        // hiện thị config random và repeat
      
    }

}

app.start();

