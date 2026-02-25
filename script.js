function updateClock() {
    const now = new Date();
    const timestring = now.toLocaleTimeString();   
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-indexed
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById("data").textContent = timestring;
    document.getElementById("giorno").textContent = formattedDate;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately