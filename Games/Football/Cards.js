const footballTeam = {
team: "Ethiopia",
year: 2026,
headCoach: "Yohannes Sahle",
players: [
// Goalkeepers
{ name: "Abubeker Nura", position: "goalkeeper", isCaptain: false },
{ name: "Seid Habtamu", position: "goalkeeper", isCaptain: false },
{ name: "Firew Getahun", position: "goalkeeper", isCaptain: false },
{ name: "Tinsae Markos", position: "goalkeeper", isCaptain: false },

// Defenders
{ name: "Degefe Alemu", position: "defender", isCaptain: false },
{ name: "Henok Adugna", position: "defender", isCaptain: false },
{ name: "Tsegaab Gizaw", position: "defender", isCaptain: false },
{ name: "Yared Bayeh", position: "defender", isCaptain: false },
{ name: "Rohobot Solalo", position: "defender", isCaptain: false },
{ name: "Ramkel James", position: "defender", isCaptain: false },
{ name: "Amanuel Terfu", position: "defender", isCaptain: false },
{ name: "Girum Hagos", position: "defender", isCaptain: false },
{ name: "Netsanet Gebremedhin", position: "defender", isCaptain: false },
{ name: "Samuel Yohannes", position: "defender", isCaptain: false },
{ name: "Abdusalam Yesuf", position: "defender", isCaptain: false },
{ name: "Yared Yamane", position: "defender", isCaptain: false },

// Midfielders
{ name: "Habtamu Tekeste", position: "midfielder", isCaptain: false },
{ name: "Gatoch Panom", position: "midfielder", isCaptain: true },
{ name: "Habtamu Gullilat", position: "midfielder", isCaptain: false },
{ name: "Bereket Wolde", position: "midfielder", isCaptain: false },
{ name: "Canaan Markneh", position: "midfielder", isCaptain: false },
{ name: "Binyam Belay", position: "midfielder", isCaptain: false },
{ name: "Dawit Tefera", position: "midfielder", isCaptain: false },

// Forwards
{ name: "Mesfin Tafesse", position: "forward", isCaptain: false },
{ name: "Fitsum Tilahun", position: "forward", isCaptain: false },
{ name: "Birhanu Bekele", position: "forward", isCaptain: false },
{ name: "Binyam Fikru", position: "forward", isCaptain: false },
{ name: "Chernet Gugsa", position: "forward", isCaptain: false },
{ name: "Eyob Gebremariam", position: "forward", isCaptain: false },
{ name: "Abel Yalew", position: "forward", isCaptain: false },
{ name: "Natnael Daniel", position: "forward", isCaptain: false },
{ name: "Tamirat Eyasu", position: "forward", isCaptain: false },
{ name: "Dawa Hotessa", position: "forward", isCaptain: false }
],

stats: {
    matchesPlayed: 10,
    wins: 5,
    draws: 2,
    losses: 3,
    goalsScored: 15,
    goalsConceded: 9
  }
};


  document.getElementById("head-coach").textContent = footballTeam.headCoach;
  document.getElementById("team").textContent = footballTeam.team;
  document.getElementById("year").textContent = footballTeam.year;

  const playerCards = document.getElementById("player-cards");
  footballTeam.players.forEach(function(player) {
    const card = document.createElement("div");
    card.classList.add("player-card");
     
    const heading = document.createElement("h2");
    heading.textContent = player.name;

   if (player.isCaptain) {
     heading.textContent += " (Captain)";
   }
    
    const position = document.createElement("p");
    position.textContent = `Position: ${player.position}`;

    card.appendChild(heading);
    card.appendChild(position);
    playerCards.appendChild(card);
  });

  const dropdown = document.getElementById("players");

dropdown.addEventListener("change", function() {
const selectedPosition = dropdown.value;

const filteredPlayers = selectedPosition === "all"
? footballTeam.players
: footballTeam.players.filter(function(player) {
return player.position === selectedPosition;
});

playerCards.innerHTML = "";

filteredPlayers.forEach(function(player) {
const card = document.createElement("div");
card.classList.add("player-card");

const heading = document.createElement("h2");
heading.textContent = player.name;

if (player.isCaptain) {
  heading.textContent += " (Captain)";
}

const position = document.createElement("p");
position.textContent = `Position: ${player.position}`;

card.appendChild(heading);
card.appendChild(position);

playerCards.appendChild(card);

});
});
/* 
const teamStats = footballTeam.stats;

document.getElementById("matches-played").textContent =
  teamStats.matchesPlayed;

document.getElementById("matches-won").textContent =
  teamStats.wins;

document.getElementById("matches-drawn").textContent =
  teamStats.draws;

document.getElementById("matches-lost").textContent =
  teamStats.losses;

document.getElementById("total-goals-scored").textContent =
  teamStats.goalsScored;

document.getElementById("total-goals-conceded").textContent =
  teamStats.goalsConceded;


 */

  const teamStats = footballTeam.stats;

document.getElementById("matches-played").textContent =
  teamStats.matchesPlayed;

document.getElementById("matches-won").textContent =
  teamStats.wins;

document.getElementById("matches-drawn").textContent =
  teamStats.draws;

document.getElementById("matches-lost").textContent =
  teamStats.losses;

document.getElementById("total-goals-scored").textContent =
  teamStats.goalsScored;

document.getElementById("total-goals-conceded").textContent =
  teamStats.goalsConceded;

// Calculate goals averages
const goalsAverage = teamStats.matchesPlayed > 0
  ? (teamStats.goalsScored / teamStats.matchesPlayed).toFixed(1)
  : "0.0";

const concededAverage = teamStats.matchesPlayed > 0
  ? (teamStats.goalsConceded / teamStats.matchesPlayed).toFixed(2)
  : "0.00";

document.getElementById("goals-average").textContent =
  `${goalsAverage} avg. per match`;

document.getElementById("conceded-average").textContent =
  `${concededAverage} avg. per match`;