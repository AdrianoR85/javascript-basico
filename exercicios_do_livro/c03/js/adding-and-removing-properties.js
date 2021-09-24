let hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77
}

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

let elName = document.getElementById('hotelName');
let elPool = document.getElementById('pool');
let elGym = document.getElementById('gym');

elName.textContent = hotel.name;
elPool.className = 'Pool: ' + hotel.pool;
elGym.className = 'Gym: ' + hotel.gym;