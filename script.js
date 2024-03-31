setInterval(() => {
  document.getElementById("displayTime").textContent = moment(
    new Date()
  ).format("dddd, MMMM D, YYYY, HH:mm:ss");
}, 1000);
