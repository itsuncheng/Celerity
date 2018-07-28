var config = {
  apiKey: "AIzaSyDsuPQBtme8Nh-84yUYMbq8TNK08o2IxGw",
  authDomain: "risktracker-e3a17.firebaseapp.com",
  databaseURL: "https://risktracker-e3a17.firebaseio.com",
  projectId: "risktracker-e3a17",
  storageBucket: "risktracker-e3a17.appspot.com",
  messagingSenderId: "145746461785"
};

firebase.initializeApp(config);

var fragment = document.createDocumentFragment();
var table = document.createElement("table");

var ref = firebase.database().ref();

var table2 = $('#extable').DataTable();

// ref.on("value", function(snapshot) {
//   $('#extable tr').remove();
//   var header = "";
//   header += '<thead class="thead-dark"><tr><th align="center">Timestamp</th><th align="center">Location</th><th align="center">Picture</th><th align="center">Nature</th><th align="center">Seriousness</th><th align="center">Short Description</th></tr></thead>';
//     var content = '';
//     snapshot.forEach(function(data) {
//       var event = data.val();
//       content +='<tbody><tr>';
//       content += '<td align="center" scope="row">' + event.timestamp + '</td>';
//       content += '<td align="center">' + event.location + '</td>';
//       content += '<td align="center">' + event.picture + '</td>';
//       content += '<td align="center">' + event.nature + '</td>';
//       content += '<td align="center">' + event.seriousness + '</td>';
//       content += '<td align="center">' + event.shortdescription + '</td>';
//       content += '</tr></tbody>';
//   });
//   $('#extable').append(header);
//   $('#extable').append(content);
//
// });

// ref.on("value", function(snapshot) {
//   // $('#extable tr').remove();
//     snapshot.forEach(function(data) {
//       var event = data.val();
//
//
//       table2.row.add( {
//           "Timestamp": event.timestamp,
//           "Location": event.location,
//           "Picture": event.pic,
//           "Nature": event.nature,
//           "Seriousness": event.seriousness,
//           "Short Description": event.shortdes
//       } ).draw();
//
//   });
//
// });

ref.on("value", function(snapshot) {
   table2.clear().draw();
    snapshot.forEach(function(data) {
      var event = data.val();


      table2.row.add( [event.TimeStamp, event.Location, event.Picture, event.Nature, event.Seriousness, event.Description, event.WatsonClassifier]).draw();

  });

});


$(document).ready( function () {
    $('#extable').DataTable();
} );
