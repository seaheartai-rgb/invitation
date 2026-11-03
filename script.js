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