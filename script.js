function checkNationalId() {
    const input = document.getElementById('national-id-input');
    const errorDiv = document.getElementById('error-message');
    const nationalId = input.value.trim();

    errorDiv.innerText = '';

    // حالت ۲: کدملی کمتر از ۱۰ رقم باشد
    if (nationalId.length < 10) {
        errorDiv.innerText = "لطفا کدملی را بصورت صحیح وارد کنید";
        return;
    }

    // بررسی وجود در لیست اکسل
    if (guestsData.hasOwnProperty(nationalId)) {
        // حالت ۱: کد ملی منطبق است
        const guestName = guestsData[nationalId];
        showInvitation(guestName);
    } else {
        // حالت ۳: کد ملی در لیست نیست
        errorDiv.innerText = "متاسفانه کدملی وارد شده در لیست مدعوین قرار ندارد.";
    }
}

function showInvitation(name) {
    document.getElementById('page-home').style.display = 'none';
    
    const pageInv = document.getElementById('page-invitation');
    const nameOverlay = document.getElementById('guest-name');
    
    nameOverlay.innerText = name;
    pageInv.style.display = 'flex';
}