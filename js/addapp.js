function addAppointment(instructor, godzina, client) {
  let stringus = "row-" + godzina + "-" + instructor;

  let queryy = document.getElementsByClassName(stringus);
  queryy[0].textContent = "{{hejo}}";
  //queryy[0].classList.add("");
}

addAppointment("mikolaj", "10:00", "cokolwiek");
