let hotel = {
    name : 'Park',
    roomRate : 240,
    discount : 15,
    offerPrice : function(){
        var offerRate = this.roomRate - (this.discount * 0.15);
        return offerRate;
    }
};

let hotelName = document.getElementById('hotelName');
let roomRate = document.getElementById('roomRate');
let spacialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
spacialRate.textContent = '$' + hotel.offerPrice() 

function offerExpiry(){
    let weekFromToday =  new Date(today.getTime() + 7 *24 *60 *60 * 1000);
    let dayNames = ['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday']
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let day = dayNames[weekFromToday.getDay()];
    let date = weekFromToday.getDate();
    let month = monthNames[weekFromToday.getMonth()];
    let year = weekFromToday.getFullYear();

    let expiryMsg = 'Offer expires next '
    expiryMsg += `${day} <br/> (${date} ${month} ${year})`
    return expiryMsg;
}

let today = new Date()
let elEnds = document.getElementById('offerEnds')
elEnds.innerHTML = offerExpiry(today)

