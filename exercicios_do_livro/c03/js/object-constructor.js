let hotel = new Object();
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};

let elName = document.getElementById('hotelName');
let elRooms = document.getElementById('rooms');

elName.textContent = hotel.name;
elRooms.textContent = hotel.checkAvailability();