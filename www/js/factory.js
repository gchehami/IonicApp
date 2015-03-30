app.factory('HotelsService', function() {
  var hotels = [
      {id: '1', title: "hotel astra", photo: 'astra.jpg'},
      {id: '2', title: "hotel acadia", photo: 'acadia.jpg'},
      {id: '3', title: "hotel caumartin", photo: 'caumartin.jpg'}
   ]

  return {
    hotels: hotels,
    getHotel: function(index) {
      return hotels[index-1]
    }
  }
})
