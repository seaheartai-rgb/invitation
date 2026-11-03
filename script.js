let isVideoPlayed = false;

function playVideo() {
    if (isVideoPlayed) return; // جلوگیری از کلیک مجدد حین پخش
    
    const video = document.getElementById('intro-video');
    const overlay = document.getElementById('play-overlay');
    
    // مخفی کردن دکمه پلی روی ویدئو
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
    
    video.play();
    isVideoPlayed = true;

    // رخداد پایان ویدئو
    video.onended = function() {
        // ۳ ثانیه مکث بعد از اتمام ویدئو
        setTimeout(() => {
            const formContainer = document.getElementById('form-container');
            formContainer.classList.add('show');
            
            // فوکوس روی فیلد کد ملی پس از نمایش
            document.getElementById('national-id-input').focus();
        }, 3000); // 3000 میلی‌ثانیه = 3 ثانیه مکث
    };
}

function checkNationalId() {
    const input = document.getElementById('national-id-input');
    const errorDiv = document.getElementById('error-message');
    const nationalId = input.value.trim();

    errorDiv.innerText = '';

    if (nationalId.length < 10) {
        errorDiv.innerText = "لطفا کدملی را بصورت صحیح وارد کنید";
        return;
    }

    if (guestsData.hasOwnProperty(nationalId)) {
        const guestName = guestsData[nationalId];
        showInvitation(guestName);
    } else {
        errorDiv.innerText = "متاسفانه کدملی وارد شده در لیست مدعوین قرار ندارد.";
    }
}

function showInvitation(name) {
    const pageHome = document.getElementById('page-home');
    const pageInv = document.getElementById('page-invitation');
    const nameOverlay = document.getElementById('guest-name');
    
    pageHome.classList.remove('active');
    pageHome.style.display = 'none';
    
    nameOverlay.innerText = name;
    
    pageInv.classList.add('active');
    pageInv.style.display = 'flex';
}