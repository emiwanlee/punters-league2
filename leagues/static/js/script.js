document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#leagueTable tbody");
  const predictionBody = document.querySelector("#predictionsTable tbody");
  const laLigaTable = document.querySelector("#laLigaScoresTable tbody");
  const laligaPredictionBody = document.querySelector("#predictionsTableSpain tbody");
  const englishChampionshipTable = document.querySelector("#englishChampionshipScoresTable tbody");
  const englishChampionshipPredictionBody = document.querySelector("#predictionsTableEnglishChampionship tbody");
  const englishLeagueOneTable = document.querySelector("#englishLeagueOneScoresTable tbody");
  const englishLeagueOnePredictionBody = document.querySelector("#predictionsTableEnglishLeagueOne tbody");
  const englishLeagueTwoTable = document.querySelector("#englishLeagueTwoScoresTable tbody");
  const englishLeagueTwoPredictionBody = document.querySelector("#predictionsTableEnglishLeagueTwo tbody");
  const laLiga2Table = document.querySelector("#laLigaScoresTable2 tbody");
  const laliga2PredictionBody = document.querySelector("#predictionsTableSpain2 tbody");
  const italianSerieATable = document.querySelector("#italianSerieAScoresTable tbody");
   const italianSerieBTable = document.querySelector("#italianSerieBScoresTable tbody");
  const italianSerieAPredictionBody = document.querySelector("#predictionsTableItaly tbody");
  const italianSerieBPredictionBody = document.querySelector("#predictionsTableItalyB tbody");
   const frenchLigueOneTable = document.querySelector("#frenchLigueOneScoresTable tbody");
  const frenchLigueOnePredictionBody = document.querySelector("#predictionsTableFrench1 tbody");
  const frenchLigueTwoTable = document.querySelector("#frenchLigueTwoScoresTable tbody");
  const frenchLigueTwoPredictionBody = document.querySelector("#predictionsTableFrench2 tbody");
  const germanBundesligaTable = document.querySelector("#germanBundesligaScoresTable tbody");
  const germanBundesligaPredictionBody = document.querySelector("#predictionsTableGermany tbody");
  const germanBundesliga2Table = document.querySelector("#germanBundesliga2ScoresTable tbody");
  const germanBundesliga2PredictionBody = document.querySelector("#predictionsTableGermany2 tbody");
  const netherlandsEredevesieTable = document.querySelector("#netherlandsEredevesieScoresTable tbody");
  const netherlandsEredevesiePredictionBody = document.querySelector("#predictionsTableNetherlands tbody");
  const eersteDivisieTableBody = document.querySelector("#netherlandsEersteeDevesieScoresTable tbody");
  const eersteDivisiePredictionBody = document.querySelector("#predictionsTableNetherlands2 tbody");
   const belgianProLeagueTableBody = document.querySelector("#belgianProleagueDeveScoresTable tbody");
  const belgianProLeaguePredictionBody = document.querySelector("#predictionsTableBelgium tbody");
  const belgianChallengerProTableBody = document.querySelector("#belgianChallengerProScoresTable tbody");
  const belgianChallengerProPredictionBody = document.querySelector("#predictionsTableBelgium2 tbody");

  const teams = [
    { team: "Liverpool", MP: 38, MW: 25, MD: 9, GF: 86, GA: 41 },
    { team: "Arsenal", MP: 38, MW: 20, MD: 14, GF: 69, GA: 34 },
    { team: "Manchester City", MP: 38, MW: 21, MD: 8, GF: 72, GA: 44 },
    { team: "Chelsea", MP: 38, MW: 20, MD: 9, GF: 64, GA: 43 },
    { team: "Newcastle", MP: 38, MW: 20, MD: 6, GF: 68, GA: 47 },
    { team: "Aston Villa", MP: 38, MW: 19, MD: 9, GF: 58, GA: 51 },
    { team: "Brighton", MP: 38, MW: 16, MD: 13, GF: 66, GA: 59 },
    { team: "Nottingham", MP: 38, MW: 19, MD: 8, GF: 58, GA: 46 },
    { team: "Bournemouth", MP: 38, MW: 15, MD: 11, GF: 58, GA: 46 },
    { team: "Brentford", MP: 38, MW: 16, MD: 8, GF: 66, GA: 57 },
    { team: "Fulham", MP: 38, MW: 15, MD: 9, GF: 54, GA: 54 },
    { team: "Crystal Palace", MP: 38, MW: 13, MD: 14, GF: 51, GA: 51 },
    { team: "Everton", MP: 38, MW: 11, MD: 5, GF: 42, GA: 44 },
    { team: "West Ham", MP: 38, MW: 11, MD: 10, GF: 46, GA: 62 },
    { team: "Manchester United", MP: 38, MW: 11, MD: 9, GF: 44, GA: 54 },
    { team: "Wolves", MP: 38, MW: 12, MD: 6, GF: 54, GA: 69 },
    { team: "Tottenham", MP: 38, MW: 11, MD: 5, GF: 64, GA: 65 },
    { team: "Leicester", MP: 38, MW: 6, MD: 7, GF: 33, GA: 80 },
    { team: "Ipswich", MP: 38, MW: 4, MD: 10, GF: 36, GA: 82 },
    { team: "Southampton", MP: 38, MW: 2, MD: 6, GF: 26, GA: 86 }
  ];

  const fixtures = [
    ["Liverpool", "Bournemouth"],
    ["Aston Villa", "Newcastle"],
	["Brighton", "Fulham"],
	["Sunderland", "West Ham"],
	["Tottenham", "Burnley"],
	["Wolves", "Manchester City"],
	["Chelsea", "Crystal Palace"],
	["Nottingham", "Brentford"],
	["Manchester United", "Arsenal"],
	["Leeds", "Everton"]
  ];

  teams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  teams.sort((a, b) => b.points - a.points);

  if (tableBody) {
    teams.forEach((team, i) => {
      const row = `<tr>
        <td>${i + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }

  if (predictionBody) {
    fixtures.forEach(([home, away]) => {
      const homeTeam = teams.find(t => t.team === home);
      const awayTeam = teams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X (Draw)";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X (Home Win or Draw)";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      predictionBody.appendChild(row);
    });
  }

  const laligaTeams = [
    { team: "Barcelona", MP: 38, MW: 28, MD: 4, GF: 102, GA: 39 },
    { team: "Real Madrid", MP: 38, MW: 26, MD: 6, GF: 78, GA: 38 },
    { team: "Atletico Madrid", MP: 38, MW: 22, MD: 10, GF:65, GA: 30 },
	{ team: "Athletic Club", MP: 38, MW: 19, MD: 13, GF: 54, GA: 29 },
    { team: "Villarreal", MP: 38, MW: 20, MD: 10, GF: 71, GA: 51 },
    { team: "Real Betis", MP: 38, MW: 16, MD: 12, GF: 57, GA: 50 },
    { team: "Celta Vigo", MP: 38, MW: 16, MD: 7, GF: 59, GA: 57 },
    { team: "Rayo Vallecano", MP: 38, MW: 13, MD: 13, GF: 41, GA: 45 },
    { team: "Osasuna", MP: 38, MW: 12, MD: 16, GF: 48, GA: 52 },
	{ team: "Mallorca", MP: 38, MW: 13, MD: 9, GF: 45, GA: 44 },
	{ team: "Real Sociedad", MP: 38, MW: 13, MD: 7, GF: 35, GA: 46 },
	{ team: "Valencia", MP: 38, MW: 11, MD: 13, GF: 44, GA: 54 },
	{ team: "Getafe", MP: 38, MW: 11, MD: 9, GF: 34, GA: 39 },
	{ team: "Espanyol", MP: 38, MW: 11, MD: 9, GF: 40, GA: 51 },
	{ team: "Alaves", MP: 38, MW: 10, MD: 12, GF: 38, GA: 48 },
	{ team: "Girona", MP: 38, MW: 11, MD: 8, GF: 44, GA: 60 },
	{ team: "Sevilla", MP: 38, MW: 10, MD: 11, GF: 42, GA: 55 },
	{ team: "Leganes", MP: 38, MW: 9, MD: 13, GF: 39, GA: 56 },
	{ team: "Las Palmas", MP: 38, MW: 8, MD: 8, GF: 40, GA: 61 },
	{ team: "Valladolid", MP: 38, MW: 4, MD: 4, GF: 26, GA: 90 },
  ];

  const laligaFixtures = [
    ["Girona", "Rayo Vallecano"],
    ["Villarreal", "Oviedo"],
    ["Mallorca", "Barcelona"],
	["Valencia", "Real Sociedad"],
	["Celta Vigo", "Getafe"],
	["Athletico Club", "Sevilla"],
	["Espanyol", "Atletico Madrid"],
	["Elche", "Real Betis"],
	["Real Madrid", "Osasuna"]
  ];

  laligaTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  laligaTeams.sort((a, b) => b.points - a.points);

  if (laLigaTable) {
    laligaTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      laLigaTable.appendChild(row);
    });
  }

  if (laligaPredictionBody) {
    laligaFixtures.forEach(([home, away]) => {
      const homeTeam = laligaTeams.find(t => t.team === home);
      const awayTeam = laligaTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 15;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X (Draw)";
      if (diff >= 15 ) prediction = "1 (Home Win)";
      else if (diff >= 14) prediction = "1X";
      else if (diff <= -15) prediction = "2 (Away Win)";
      else if (diff <= -10) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      laligaPredictionBody.appendChild(row);
    });
  }
  
  
   const englishChampionshipTeams = [
    { team: "Leeds", MP: 46, MW: 29, MD: 13, GF: 95, GA: 30 },
    { team: "Burnley", MP: 46, MW: 28, MD: 16, GF: 69, GA: 16 },
    { team: "Sheffield United", MP: 46, MW: 28, MD: 8, GF: 63, GA: 36 },
    { team: "Sunderland", MP: 46, MW: 21, MD: 13, GF: 58, GA: 44 },
    { team: "Coventry", MP: 46, MW: 20, MD: 9, GF: 64, GA: 58 },
    { team: "Bristol City", MP: 46, MW: 17, MD: 17, GF: 59, GA: 55 },
    { team: "Blackburn", MP: 46, MW: 19, MD: 9, GF: 53, GA: 48 },
    { team: "Millwall", MP: 46, MW: 18, MD: 12, GF: 47, GA: 49 },
	{ team: "West Brom", MP: 46, MW: 15, MD: 19, GF: 57, GA: 47 },
	{ team: "Middlesbrough", MP: 46, MW: 18, MD: 10, GF: 64, GA: 56 },
	{ team: "Swansea", MP: 46, MW: 17, MD: 10, GF: 51, GA: 56 },
	{ team: "Sheffield Wednesday", MP: 46, MW: 15, MD: 13, GF: 60, GA: 69 },
	{ team: "Norwich", MP: 46, MW: 14, MD: 15, GF: 71, GA: 68 },
	{ team: "Watford", MP: 46, MW: 16, MD: 9, GF: 53, GA: 61 },
	{ team: "QPR", MP: 46, MW: 14, MD: 14, GF: 43, GA: 63 },
	{ team: "Portsmouth", MP: 46, MW: 14, MD: 12, GF: 58, GA: 71 },
	{ team: "Oxford", MP: 46, MW: 13, MD: 14, GF: 49, GA: 65 },
	{ team: "Stoke", MP: 46, MW: 12, MD: 15, GF: 45, GA: 62 },
	{ team: "Derby County", MP: 46, MW: 13, MD: 11, GF: 48, GA: 56 },
	{ team: "Preston", MP: 46, MW: 10, MD: 20, GF: 48, GA: 59 },
	{ team: "Hull", MP: 46, MW: 12, MD: 13, GF: 44, GA: 54 },
	{ team: "Luton", MP: 46, MW: 13, MD: 10, GF: 45, GA: 69 },
	{ team: "Plymouth", MP: 46, MW: 11, MD: 13, GF: 51, GA: 88 },
	{ team: "Cardiff", MP: 46, MW: 9, MD: 17, GF: 48, GA: 73 },
  ];

  const englishChampionshipFixtures = [
   ["Wrexham", "West Brom"],
   ["Derby County", "Coventry"],
    ["Portsmouth", "Norwich"],
	["Preston", "Leicester"],
	["Swansea", "Sheffield United"],
	["Watford", "QPR"],
  ["Blackburn", "Birmingham"],
  ["Sheffield Wednesday", "Stoke"],
  ["Millwall", "Middlesbrough"],
  ["Bristol City", "Charlton"],
  ["Ipswich", "Southampton"],
  ["Hull", "Oxford"]
  ];

  englishChampionshipTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  englishChampionshipTeams.sort((a, b) => b.points - a.points);

  if (englishChampionshipTable) {
    englishChampionshipTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      englishChampionshipTable.appendChild(row);
    });
  }

  if (englishChampionshipPredictionBody) {
    englishChampionshipFixtures.forEach(([home, away]) => {
      const homeTeam = englishChampionshipTeams.find(t => t.team === home);
      const awayTeam = englishChampionshipTeams.find(t => t.team === away);
	  
      if (!homeTeam || !awayTeam) {
  console.warn(`Missing team data for fixture: ${home} vs ${away}`);
  return;
}

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      englishChampionshipPredictionBody.appendChild(row);
    });
  }
  
  
  const englishLeagueOneTeams = [
    { team: "Birmingham", MP: 46, MW: 34, MD: 9, GF: 84, GA: 31 },
    { team: "Wrexham", MP: 46, MW: 27, MD: 11, GF: 67, GA: 34 },
    { team: "Stockport", MP: 46, MW: 25, MD: 12, GF: 72, GA: 42 },
    { team: "Charlton", MP: 46, MW: 25, MD: 10, GF: 67, GA: 43 },
    { team: "Wycombe", MP: 46, MW: 24, MD: 12, GF: 70, GA: 45 },
    { team: "Leyton Orient", MP: 46, MW: 24, MD: 6, GF: 72, GA: 48 },
    { team: "Reading", MP: 46, MW: 21, MD: 12, GF: 68, GA: 57 },
    { team: "Bolton", MP: 46, MW: 20, MD: 8, GF: 67, GA: 70 },
	{ team: "Blackpool", MP: 46, MW: 17, MD: 16, GF: 60, GA: 12 },
	{ team: "Huddersfield", MP: 46, MW: 19, MD: 7, GF: 58, GA: 55 },
	{ team: "Lincoln", MP: 46, MW: 16, MD: 13, GF: 64, GA: 56 },
	{ team: "Barnsley", MP: 46, MW: 17, MD: 10, GF: 69, GA: 73 },
	{ team: "Rotherham", MP: 46, MW: 16, MD: 11, GF: 54, GA: 59 },
	{ team: "Stevenage", MP: 46, MW: 15, MD: 12, GF: 42, GA: 50 },
	{ team: "Wigan", MP: 46, MW: 13, MD: 17, GF: 40, GA: 42 },
	{ team: "Exeter", MP: 46, MW: 15, MD: 11, GF: 49, GA: 65 },
	{ team: "Mansfield", MP: 46, MW: 15, MD: 9, GF: 60, GA: 73 },
	{ team: "Peterborough", MP: 46, MW: 13, MD: 12, GF: 68, GA: 81 },
	{ team: "Northampton", MP: 46, MW: 12, MD: 15, GF: 48, GA: 66 },
	{ team: "Burton", MP: 46, MW: 11, MD: 14, GF: 49, GA: 66 },
	{ team: "Crawley", MP: 46, MW: 12, MD: 10, GF: 57, GA: 83 },
	{ team: "Bristol Rovers", MP: 46, MW: 12, MD: 7, GF: 44, GA: 76 },
	{ team: "Cambridge", MP: 46, MW: 9, MD: 11, GF: 45, GA: 73 },
	{ team: "Shrewsbury", MP: 46, MW: 8, MD: 9, GF: 41, GA: 79 },
  ];

  const englishLeagueOneFixtures = [
   ["Burton", "Port Vale"],
   ["Exeter", "Mansfield"],
    ["Leyton Orient", "Stockport"],
	["Doncaster", "Wycombe"],
	["Stevenage", "Northampton"],
	["Barnsley", "Burton"],
	["Wigan", "Peterborough"],
	["Lincoln", "Plymouth"],
	["Reading", "Wimbledon"],
	["Bradford", "Luton"],
	["Cardiff", "Rotherham"],
	["Blackpool", "Huddersfield"]
  ];

  englishLeagueOneTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  englishLeagueOneTeams.sort((a, b) => b.points - a.points);

  if (englishLeagueOneTable) {
    englishLeagueOneTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      englishLeagueOneTable.appendChild(row);
    });
  }

  if (englishLeagueOnePredictionBody) {
    englishLeagueOneFixtures.forEach(([home, away]) => {
      const homeTeam = englishLeagueOneTeams.find(t => t.team === home);
      const awayTeam = englishLeagueOneTeams.find(t => t.team === away);
	  
      if (!homeTeam || !awayTeam) {
  console.warn(`Missing team data for fixture: ${home} vs ${away}`);
  return;
}

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      englishLeagueOnePredictionBody.appendChild(row);
    });
	}
	
	
	  const englishLeagueTwoTeams = [
    { team: "Doncaster", MP: 46, MW: 24, MD: 12, GF: 50, GA: 23 },
    { team: "Port Vale", MP: 46, MW: 22, MD: 14, GF: 65, GA: 46 },
    { team: "Bradford", MP: 46, MW: 23, MD: 12, GF: 64, GA: 45 },
    { team: "Walsall", MP: 46, MW: 21, MD: 14, GF: 75, GA: 54 },
    { team: "Wimbledon", MP: 46, MW: 20, MD: 13, GF: 56, GA: 35 },
    { team: "Notts County", MP: 46, MW: 20, MD: 12, GF: 68, GA: 49 },
    { team: "Chesterfield", MP: 46, MW: 19, MD: 13, GF: 73, GA: 54 },
    { team: "Salford", MP: 46, MW: 18, MD: 15, GF: 64, GA: 54 },
	{ team: "Grimsby", MP: 46, MW: 17, MD: 16, GF: 60, GA: 12 },
	{ team: "Colchester", MP: 46, MW: 20, MD: 8, GF: 61, GA: 67 },
	{ team: "Bromley", MP: 46, MW: 17, MD: 15, GF: 54, GA: 59 },
	{ team: "Swindon", MP: 46, MW: 15, MD: 17, GF: 71, GA: 63 },
	{ team: "Crewe", MP: 46, MW: 16, MD: 11, GF: 54, GA: 59 },
	{ team: "Fleetwood", MP: 46, MW: 15, MD: 17, GF: 49, GA: 48 },
	{ team: "Cheltenham", MP: 46, MW: 15, MD: 12, GF: 40, GA: 70 },
	{ team: "Barrow", MP: 46, MW: 15, MD: 14, GF: 52, GA: 50 },
	{ team: "Gillingham", MP: 46, MW: 14, MD: 16, GF: 41, GA: 46 },
	{ team: "Harrogate", MP: 46, MW: 14, MD: 11, GF: 43, GA: 61 },
	{ team: "MK Dons", MP: 46, MW: 14, MD: 10, GF: 52, GA: 66 },
	{ team: "Tranmere", MP: 46, MW: 12, MD: 15, GF: 45, GA: 65 },
	{ team: "Accrington Stanley", MP: 46, MW: 12, MD: 14, GF: 53, GA: 69 },
	{ team: "Newport", MP: 46, MW: 13, MD: 10, GF: 52, GA: 76 },
	{ team: "Carlisle", MP: 46, MW: 10, MD: 12, GF: 44, GA: 71 },
	{ team: "Morecambe", MP: 46, MW: 10, MD: 6, GF: 40, GA: 72 },
  ];

  const englishLeagueTwoFixtures = [
   ["Chesterfield", "Bristol Rovers"],
   ["Oldham", "Swindon"],
    ["Barnet", "Walsall"],
	["Shrewsbury", "Colchester"],
	["Cambridge", "Harrogate"],
	["Bromley", "Fleetwood"],
	["Tranmere", "Gillingham"],
	["Barrow", "Notts County"],
	["MK Dons", "Cheltenham"],
	["Crewe Alexandra", "Crawley Town"],
	["Salford", "Accrington Stanley"],
  ["Grimsby", "Newport"]
  ];

  englishLeagueTwoTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  englishLeagueTwoTeams.sort((a, b) => b.points - a.points);

  if (englishLeagueTwoTable) {
    englishLeagueTwoTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      englishLeagueTwoTable.appendChild(row);
    });
  }

  if (englishLeagueTwoPredictionBody) {
    englishLeagueTwoFixtures.forEach(([home, away]) => {
      const homeTeam = englishLeagueTwoTeams.find(t => t.team === home);
      const awayTeam = englishLeagueTwoTeams.find(t => t.team === away);
	  
      if (!homeTeam || !awayTeam) {
  console.warn(`Missing team data for fixture: ${home} vs ${away}`);
  return;
}

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      englishLeagueTwoPredictionBody.appendChild(row);
    });
	}
	
	  const laliga2Teams = [
    { team: "Levante", MP: 42, MW: 22, MD: 13, GF: 69, GA: 42 },
    { team: "Elche", MP: 42, MW: 22, MD: 11, GF: 59, GA: 34 },
    { team: "Oviedo", MP: 42, MW: 21, MD: 12, GF:56, GA: 42 },
	{ team: "Mirandes", MP: 42, MW: 22, MD: 9, GF: 59, GA: 40 },
    { team: "Racing", MP: 42, MW: 20, MD: 11, GF: 65, GA: 51 },
    { team: "Almeria", MP: 42, MW: 19, MD: 12, GF: 72, GA: 55 },
    { team: "Granada", MP: 42, MW: 18, MD: 11, GF: 65, GA: 54 },
    { team: "Huesca", MP: 42, MW: 18, MD: 10, GF: 58, GA: 49 },
    { team: "Eibar", MP: 42, MW: 15, MD: 13, GF: 44, GA: 41 },
	{ team: "Albacete", MP: 42, MW: 15, MD: 13, GF: 57, GA: 57 },
	{ team: "Gijon", MP: 42, MW: 14, MD: 14, GF: 57, GA: 54 },
	{ team: "Burgos", MP: 42, MW: 15, MD: 10, GF: 41, GA: 48 },
	{ team: "Cadiz", MP: 42, MW: 14, MD: 13, GF: 55, GA: 53 },
	{ team: "Cordoba", MP: 42, MW: 14, MD: 13, GF: 59, GA: 63 },
	{ team: "Deportivo", MP: 42, MW: 13, MD: 14, GF: 56, GA: 54 },
	{ team: "Malaga", MP: 42, MW: 12, MD: 17, GF: 42, GA: 46 },
	{ team: "Castellon", MP: 42, MW: 14, MD: 11, GF: 65, GA: 63 },
	{ team: "Zaragoza", MP: 42, MW: 13, MD: 12, GF: 56, GA: 63 },
	{ team: "Eldense", MP: 42, MW: 11, MD: 12, GF: 44, GA: 63 },
	{ team: "Tenerife", MP: 42, MW: 8, MD: 12, GF: 35, GA: 55 },
	{ team: "Racing Ferrol", MP: 42, MW: 6, MD: 12, GF: 22, GA: 64 },
	{ team: "Cartagena", MP: 42, MW: 6, MD: 5, GF: 33, GA: 78 }
  ];

  const laliga2Fixtures = [
    ["Cadiz", "Mirandes"],
    ["Racing", "Castellon"],
    ["Granada", "Deportivo"],
	["Real Sociedad B", "Zaragoza"],
	["Valladolid", "Ceuta"],
	["Gijon", "Cordoba"],
	["Malaga", "Eibar"],
	["Burgos", "Cultural Leonesa"],
	["Huesca", "Leganes"],
	["Las Palmas", "Andorra"]
  ];

  laliga2Teams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  laliga2Teams.sort((a, b) => b.points - a.points);

  if (laLiga2Table) {
    laliga2Teams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      laLiga2Table.appendChild(row);
    });
  }

  if (laliga2PredictionBody) {
    laliga2Fixtures.forEach(([home, away]) => {
      const homeTeam = laliga2Teams.find(t => t.team === home);
      const awayTeam = laliga2Teams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      laliga2PredictionBody.appendChild(row);
    });
  }
   const italianSerieATeams = [
    { team: "Napoli", MP: 38, MW: 24, MD: 10, GF: 59, GA: 27 },
    { team: "Inter", MP: 38, MW: 24, MD: 9, GF: 79, GA: 35 },
    { team: "Atalanta", MP: 38, MW: 22, MD: 8, GF:78, GA: 38 },
	{ team: "Juventus", MP: 38, MW: 18, MD: 16, GF: 58, GA: 35 },
    { team: "Roma", MP: 38, MW: 20, MD: 9, GF: 56, GA: 35 },
    { team: "Fiorentina", MP: 38, MW: 19, MD: 8, GF: 60, GA: 41 },
    { team: "Lazio", MP: 38, MW: 18, MD: 11, GF: 61, GA: 49 },
    { team: "Milan", MP: 38, MW: 18, MD: 9, GF: 61, GA: 43 },
    { team: "Bologna", MP: 38, MW: 16, MD: 14, GF: 57, GA: 47 },
	{ team: "Como", MP: 38, MW: 13, MD: 10, GF: 49, GA: 52 },
	{ team: "Torino", MP: 38, MW: 10, MD: 14, GF: 39, GA: 45 },
	{ team: "Udinese", MP: 38, MW: 12, MD: 8, GF: 41, GA: 56 },
	{ team: "Genoa", MP: 38, MW: 10, MD: 13, GF: 49, GA: 12 },
	{ team: "Verona", MP: 38, MW: 10, MD: 7, GF: 34, GA: 66 },
	{ team: "Cagliari", MP: 38, MW: 9, MD: 9, GF: 40, GA: 56 },
	{ team: "Parma", MP: 38, MW: 7, MD: 15, GF: 44, GA: 58 },
	{ team: "Leece", MP: 38, MW: 8, MD: 10, GF: 27, GA: 58 },
	{ team: "Empoli", MP: 38, MW: 6, MD: 13, GF: 33, GA: 59 },
	{ team: "Venezia", MP: 38, MW: 5, MD: 14, GF: 32, GA: 56 },
	{ team: "Monza", MP: 38, MW: 3, MD: 9, GF: 28, GA: 69 },
  ];

  const italianSerieAFixtures = [
    ["Genoa", "Leece"],
    ["Sassuolo", "Napoli"],
    ["Roma", "Bologna"],
	["Milan", "Cremonese"],
	["Cagliari", "Fiorentina"],
	["Como", "Lazio"],
	["Juventus", "Parma"],
	["Atalanta", "Pisa"],
	["Udinese", "Verona"],
	["Inter", "Torino"]
	
  ];

  italianSerieATeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  italianSerieATeams.sort((a, b) => b.points - a.points);

  if (italianSerieATable) {
    italianSerieATeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      italianSerieATable.appendChild(row);
    });
  }

  if (italianSerieAPredictionBody) {
    italianSerieAFixtures.forEach(([home, away]) => {
      const homeTeam = italianSerieATeams.find(t => t.team === home);
      const awayTeam = italianSerieATeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) {
  console.warn(`Missing team in fixture: ${home} vs ${away}`);
  return;
}

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      italianSerieAPredictionBody.appendChild(row);
    });
  }
  
  const italianSerieBTeams = [
    { team: "Sassuolo", MP: 38, MW: 24, MD: 10, GF: 59, GA: 27 },
    { team: "Pisa", MP: 38, MW: 24, MD: 9, GF: 79, GA: 35 },
    { team: "Spezia", MP: 38, MW: 22, MD: 8, GF:78, GA: 38 },
	{ team: "Cremonese", MP: 38, MW: 18, MD: 16, GF: 58, GA: 35 },
    { team: "Juve Stabia", MP: 38, MW: 20, MD: 9, GF: 56, GA: 35 },
    { team: "Catanzaro", MP: 38, MW: 19, MD: 8, GF: 60, GA: 41 },
    { team: "Cesena", MP: 38, MW: 18, MD: 11, GF: 61, GA: 49 },
    { team: "Palermo", MP: 38, MW: 18, MD: 9, GF: 61, GA: 43 },
    { team: "Bari", MP: 38, MW: 16, MD: 14, GF: 57, GA: 47 },
	{ team: "Sudtirol", MP: 38, MW: 13, MD: 10, GF: 49, GA: 52 },
	{ team: "Modena", MP: 38, MW: 10, MD: 14, GF: 39, GA: 45 },
	{ team: "Carrarese", MP: 38, MW: 12, MD: 8, GF: 41, GA: 56 },
	{ team: "Reggiana", MP: 38, MW: 10, MD: 13, GF: 49, GA: 12 },
	{ team: "Mantova", MP: 38, MW: 10, MD: 7, GF: 34, GA: 66 },
	{ team: "Frisonone", MP: 38, MW: 9, MD: 9, GF: 40, GA: 56 },
	{ team: "Salernitana", MP: 38, MW: 7, MD: 15, GF: 44, GA: 58 },
	{ team: "Sampdoria", MP: 38, MW: 8, MD: 10, GF: 27, GA: 58 },
	{ team: "Brescia", MP: 38, MW: 6, MD: 13, GF: 33, GA: 59 },
	{ team: "Citadella", MP: 38, MW: 5, MD: 14, GF: 32, GA: 56 },
	{ team: "Cosenza", MP: 38, MW: 3, MD: 9, GF: 28, GA: 69 },
  ];

  const italianSerieBFixtures = [
    ["Spezia", "Carrarese"],
    ["Sampdoria", "Modena"],
    ["Empoli", "Padova"],
	["Palermo", "Reggiana"],
	["Virtus Entella", "Juve Stabia"],
	["Catanzaro", "Sudtirol"],
	["Monza", "Mantova"],
	["Pescara", "Cesena"],
	["Venezia", "Bari"],
	["Frisonone", "Avellino"]
	
  ];

  italianSerieBTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  italianSerieBTeams.sort((a, b) => b.points - a.points);

  if (italianSerieBTable) {
    italianSerieBTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      italianSerieBTable.appendChild(row);
    });
  }

  if (italianSerieBPredictionBody) {
    italianSerieBFixtures.forEach(([home, away]) => {
      const homeTeam = italianSerieBTeams.find(t => t.team === home);
      const awayTeam = italianSerieBTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      italianSerieBPredictionBody.appendChild(row);
    });
  }
  
  
  const frenchLigueOneTeams = [
    { team: "PSG", MP: 34, MW: 26, MD: 6, GF: 92, GA: 35 },
    { team: "Marseille", MP: 34, MW: 20, MD: 5, GF: 74, GA: 47 },
    { team: "Monaco", MP: 34, MW: 18, MD: 7, GF:63, GA: 41 },
	{ team: "Nice", MP: 34, MW: 17, MD: 9, GF: 66, GA: 41 },
    { team: "Lille", MP: 34, MW: 17, MD: 9, GF: 52, GA: 36 },
    { team: "Lyon", MP: 34, MW: 17, MD: 6, GF: 65, GA: 46 },
    { team: "Strasbourg", MP: 34, MW: 16, MD: 9, GF: 56, GA: 44 },
    { team: "Lens", MP: 34, MW: 15, MD: 7, GF: 42, GA: 39 },
    { team: "Brest", MP: 34, MW: 15, MD: 5, GF: 52, GA: 59 },
	{ team: "Toulouse", MP: 34, MW: 11, MD: 9, GF: 44, GA: 43 },
	{ team: "Auxerre", MP: 34, MW: 11, MD: 9, GF: 48, GA: 51 },
	{ team: "Rennes", MP: 34, MW: 13, MD: 12, GF: 51, GA: 50 },
	{ team: "Nantes", MP: 34, MW: 8, MD: 12, GF: 48, GA: 51 },
	{ team: "Angers", MP: 34, MW: 10, MD: 6, GF: 32, GA: 53 },
	{ team: "Le Havre", MP: 34, MW: 10, MD: 4, GF: 40, GA: 71 },
	{ team: "Reims", MP: 34, MW: 8, MD: 9, GF: 33, GA: 47 },
	{ team: "St.Etienne", MP: 34, MW: 8, MD: 6, GF: 30, GA: 77 },
	{ team: "Montpellier", MP: 34, MW: 4, MD: 4, GF: 23, GA: 79 },
	
  ];

  const frenchLigueOneFixtures = [
    ["Auxerre", "Lorient"],
    ["Rennes", "Marseille"],
    ["Angers", "Paris FC"],
	["Nice", "Toulouse"],
	["Monaco", "Le Havre"],
	["Brest", "Lille"],
	["Nantes", "PSG"],
	["Lens", "Lyon"],
	["Metz", "Strasbourg"]
	
	
  ];

  frenchLigueOneTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  frenchLigueOneFixtures.sort((a, b) => b.points - a.points);

  if (frenchLigueOneTable) {
    frenchLigueOneTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      frenchLigueOneTable.appendChild(row);
    });
  }

  if (frenchLigueOnePredictionBody) {
    frenchLigueOneFixtures.forEach(([home, away]) => {
      const homeTeam = frenchLigueOneTeams.find(t => t.team === home);
      const awayTeam = frenchLigueOneTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      frenchLigueOnePredictionBody.appendChild(row);
    });
  }
  
  const frenchLigueTwoTeams = [
    { team: "Lorient", MP: 34, MW: 22, MD: 5, GF: 68, GA: 37 },
    { team: "Paris FC", MP: 34, MW: 21, MD: 6, GF: 55, GA: 33 },
    { team: "Metz", MP: 34, MW: 18, MD: 11, GF:64, GA: 34 },
	{ team: "Dunkerque", MP: 34, MW: 17, MD: 5, GF: 47, GA: 40 },
    { team: "Guingamp", MP: 34, MW: 17, MD: 4, GF: 57, GA: 45 },
    { team: "Annecy", MP: 34, MW: 14, MD: 9, GF: 42, GA: 43 },
    { team: "Laval", MP: 34, MW: 14, MD: 8, GF: 44, GA: 38 },
    { team: "Bastia", MP: 34, MW: 11, MD: 15, GF: 43, GA: 37 },
    { team: "Grenoble", MP: 34, MW: 13, MD: 7, GF: 43, GA: 44 },
	{ team: "Troyes", MP: 34, MW: 13, MD: 5, GF: 36, GA: 34 },
	{ team: "Amiens", MP: 34, MW: 13, MD: 4, GF: 38, GA: 50 },
	{ team: "Ajaccio", MP: 34, MW: 12, MD: 6, GF: 30, GA: 42 },
	{ team: "Pau", MP: 34, MW: 10, MD: 12, GF: 39, GA: 53 },
	{ team: "Rodez", MP: 34, MW: 9, MD: 12, GF: 56, GA: 54 },
	{ team: "Red Star", MP: 34, MW: 11, MD: 14, GF: 51, GA: 14 },
	{ team: "Clermont Foot", MP: 34, MW: 7, MD: 12, GF: 30, GA: 46 },
	{ team: "Martigues", MP: 34, MW: 9, MD: 5, GF: 29, GA: 56 },
	{ team: "Caen", MP: 34, MW: 5, MD: 7, GF: 31, GA: 58 },
	
  ];

  const frenchLigueTwoFixtures = [
    ["Guingamp", "Le Mans"],
    ["Pau", "Annecy"],
    ["Dunkerque", "Clermont Foot"],
	["Laval", "St. Etienne"],
	["Ajaccio", "Bastia"],
	["Rodez", "Nancy"],
	["Troyes", "Grenoble"],
	["Montpellier", "Red Star"],
	["Amiens", "Reims"]
	
	
  ];

  frenchLigueTwoTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  frenchLigueTwoFixtures.sort((a, b) => b.points - a.points);

  if (frenchLigueTwoTable) {
    frenchLigueTwoTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      frenchLigueTwoTable.appendChild(row);
    });
  }

  if (frenchLigueTwoPredictionBody) {
    frenchLigueTwoFixtures.forEach(([home, away]) => {
      const homeTeam = frenchLigueTwoTeams.find(t => t.team === home);
      const awayTeam = frenchLigueTwoTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      frenchLigueTwoPredictionBody.appendChild(row);
    });
  }
  
   const germanBundesligaTeams = [
    { team: "Bayern", MP: 34, MW: 25, MD: 7, GF: 99, GA: 32 },
    { team: "Leverkusen", MP: 34, MW: 19, MD: 12, GF: 72, GA: 43 },
    { team: "Frankfurt", MP: 34, MW: 17, MD: 9, GF:46, GA: 22 },
	{ team: "Dortmund", MP: 34, MW: 17, MD: 6, GF: 71, GA: 51 },
    { team: "Freiburg", MP: 34, MW: 16, MD: 7, GF: 49, GA: 53 },
    { team: "Mainz", MP: 34, MW: 14, MD: 10, GF: 55, GA: 43 },
    { team: "Leipzig", MP: 34, MW: 13, MD: 12, GF: 53, GA: 48 },
    { team: "Werder", MP: 34, MW: 14, MD: 9, GF: 54, GA: 57 },
    { team: "Stuttgart", MP: 34, MW: 14, MD: 8, GF: 64, GA: 53 },
	{ team: "Monchengladbach", MP: 34, MW: 13, MD: 6, GF: 55, GA: 57 },
	{ team: "Wolfsburg", MP: 34, MW: 11, MD: 10, GF: 56, GA: 54 },
	{ team: "Augsburg", MP: 34, MW: 11, MD: 10, GF: 35, GA: 51 },
	{ team: "Union Berlin", MP: 34, MW: 10, MD: 10, GF: 35, GA: 51 },
	{ team: "St. Pauli", MP: 34, MW: 8, MD: 8, GF: 28, GA: 41 },
	{ team: "Hoffenheim", MP: 34, MW: 7, MD: 11, GF: 46, GA: 68 },
	{ team: "Heidenheim", MP: 34, MW: 8, MD: 5, GF: 37, GA: 64 },
	{ team: "Holstein Kiel", MP: 34, MW: 6, MD: 7, GF: 49, GA: 80 },
	{ team: "Bochum", MP: 34, MW: 6, MD: 7, GF: 33, GA: 67 },
	
  ];

  const germanBundesligaFixtures = [
    ["Bayern", "Leipzig"],
    ["Leverkusen", "Hoffenheim"],
    ["Union Berlin", "Stuttgart"],
	["Heidenheim", "Wolfsburg"],
	["Freiburg", "Augsburg"],
	["Frankfurt", "Werder"],
	["St. Pauli", "Dortmund"],
	["Mainz", "Koln"],
	["Monchengladbach", "Hamburger"]
	
	
  ];

  germanBundesligaTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  germanBundesligaFixtures.sort((a, b) => b.points - a.points);

  if (germanBundesligaTable) {
    germanBundesligaTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      germanBundesligaTable.appendChild(row);
    });
  }

  if (germanBundesligaPredictionBody) {
    germanBundesligaFixtures.forEach(([home, away]) => {
      const homeTeam = germanBundesligaTeams.find(t => t.team === home);
      const awayTeam = germanBundesligaTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      germanBundesligaPredictionBody.appendChild(row);
    });
  }

  
   const germanBundesliga2Teams = [
    { team: "Koln", MP: 34, MW: 18, MD: 17, GF: 53, GA: 38 },
    { team: "Hamburger", MP: 34, MW: 16, MD: 11, GF: 78, GA: 44 },
    { team: "Elvesberg", MP: 34, MW: 16, MD: 10, GF:64, GA: 37 },
	{ team: "Paderborn", MP: 34, MW: 15, MD: 10, GF: 56, GA: 46 },
    { team: "Magdeburg", MP: 34, MW: 14, MD: 11, GF: 64, GA: 52 },
    { team: "Dusseldorf", MP: 34, MW: 14, MD: 11, GF: 57, GA: 52 },
    { team: "Kaiserslautern", MP: 34, MW: 15, MD: 18, GF: 56, GA: 55 },
    { team: "Karlsruher", MP: 34, MW: 14, MD: 10, GF: 57, GA: 55 },
    { team: "Hannover", MP: 34, MW: 13, MD: 12, GF: 41, GA: 36 },
	{ team: "Nurnberg", MP: 34, MW: 14, MD: 6, GF: 60, GA: 57 },
	{ team: "Hertha", MP: 34, MW: 12, MD: 8, GF: 49, GA: 51 },
	{ team: "Darmstadt", MP: 34, MW: 11, MD: 9, GF: 56, GA: 55 },
	{ team: "Greuther Furth", MP: 34, MW: 10, MD: 19, GF: 45, GA: 59 },
	{ team: "Schalke", MP: 34, MW: 10, MD: 8, GF: 52, GA: 62 },
	{ team: "Preuben Munster", MP: 34, MW: 7, MD: 11, GF: 46, GA: 68 },
	{ team: "Braunschweig", MP: 34, MW: 8, MD: 11, GF: 38, GA: 64 },
	{ team: "Ulm", MP: 34, MW: 6, MD: 12, GF: 36, GA: 48 },
	{ team: "Regensburg", MP: 34, MW: 6, MD: 7, GF: 23, GA: 73 },
	
  ];

  const germanBundesliga2Fixtures = [
    ["Elvesberg", "Kaiserslautern"],
    ["Preußen Münster", "Nurnberg"],
    ["Padeborn", "Dusseldorf"],
	["Hannover", "Magdeburg"],
	["Karlsruher", "Braunschweig"],
	["Schalke", "Bochum"],
	["Greuther Furth", "Holstein Kiel"],
	["Darmstadt", "Hertha"],
	["Arminia", "Dynamo"]
        
	
	
  ];

  germanBundesliga2Teams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  germanBundesliga2Fixtures.sort((a, b) => b.points - a.points);

  if (germanBundesliga2Table) {
    germanBundesliga2Teams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      germanBundesliga2Table.appendChild(row);
    });
  }

  if (germanBundesliga2PredictionBody) {
    germanBundesliga2Fixtures.forEach(([home, away]) => {
      const homeTeam = germanBundesliga2Teams.find(t => t.team === home);
      const awayTeam = germanBundesliga2Teams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      germanBundesliga2PredictionBody.appendChild(row);
    });
  }
  
  const netherlandsEredevesieTeams = [
    { team: "PSV", MP: 34, MW: 25, MD: 4, GF: 103, GA: 39 },
    { team: "Ajax", MP: 34, MW: 24, MD: 6, GF: 67, GA: 32 },
    { team: "Feyenoord", MP: 34, MW: 20, MD: 8, GF:76, GA: 38 },
	{ team: "Utrecht", MP: 34, MW: 18, MD: 10, GF: 62, GA: 45 },
    { team: "AZ Alkmaar", MP: 34, MW: 16, MD: 9, GF: 58, GA: 37 },
    { team: "Twente", MP: 34, MW: 15, MD: 9, GF: 62, GA: 49 },
    { team: "Go Ahead Eagles", MP: 34, MW: 14, MD: 9, GF: 57, GA: 55 },
    { team: "NEC", MP: 34, MW: 12, MD: 7, GF: 51, GA: 46 },
    { team: "Heerenveen", MP: 34, MW: 12, MD: 7, GF: 42, GA: 57 },
	{ team: "Zwolle", MP: 34, MW: 10, MD: 11, GF: 43, GA: 51 },
	{ team: "Fortuna Sittard", MP: 34, MW: 11, MD: 8, GF: 37, GA: 54 },
	{ team: "Sparta Rotterdam", MP: 34, MW: 9, MD: 12, GF: 39, GA: 43 },
	{ team: "Groningen", MP: 34, MW: 10, MD: 9, GF: 40, GA: 53 },
	{ team: "Heracles", MP: 34, MW: 9, MD: 11, GF: 42, GA: 53 },
	{ team: "NAC", MP: 34, MW: 8, MD: 9, GF: 34, GA: 58 },
	{ team: "Wilhelm II", MP: 34, MW: 6, MD: 8, GF: 34, GA: 56 },
	{ team: "RKC Waalwijk", MP: 34, MW: 6, MD: 7, GF: 44, GA: 74 },
	{ team: "Almere", MP: 34, MW: 4, MD: 10, GF: 23, GA: 79 },
	
  ];

  const netherlandsEredevesieFixtures = [
  ["Telstar", "Zwolle"],
  ["Excelsior", "Feyenoord"],
  ["Heracles", "NEC"],
	["Groningen", "Heerenveen"],
	["Go Ahead Eagles", "Ajax"],
	["Sparta Rotterdam", "Utrecht"],
//["Nantes", "Twente"],
	["Twente", "PSV"],
	["Volendam", "AZ Alkmaar"],
  ["NAC", "Fortuna Sittard"]
	
	
  ];

  netherlandsEredevesieTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  netherlandsEredevesieFixtures.sort((a, b) => b.points - a.points);

  if (netherlandsEredevesieTable) {
    netherlandsEredevesieTeams.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      `;
      netherlandsEredevesieTable.appendChild(row);
    });
  }

  if (netherlandsEredevesiePredictionBody) {
    netherlandsEredevesieFixtures.forEach(([home, away]) => {
      const homeTeam = netherlandsEredevesieTeams.find(t => t.team === home);
      const awayTeam = netherlandsEredevesieTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      netherlandsEredevesiePredictionBody.appendChild(row);
    });
  }
   const eersteDivisieTeams = [
    { team: "Volendam", MP: 38, MW: 26, MD: 4, GF: 87, GA: 48 },
    { team: "Excelsior", MP: 38, MW: 22, MD: 8, GF: 74, GA: 38 },
    { team: "Cambuur", MP: 38, MW: 22, MD: 5, GF: 63, GA: 42 },
    { team: "Den Haag", MP: 38, MW: 20, MD: 10, GF: 69, GA: 47 },
    { team: "Dordrecht", MP: 38, MW: 20, MD: 6, GF: 68, GA: 47 },
    { team: "De Graafschap", MP: 38, MW: 19, MD: 8, GF: 69, GA: 46 },
    { team: "Telstar", MP: 38, MW: 17, MD: 10, GF: 69, GA: 47 },
    { team: "Emmen", MP: 38, MW: 17, MD: 5, GF: 56, GA: 53 },
    { team: "Den Bosch", MP: 38, MW: 15, MD: 10, GF: 53, GA: 48 },
    { team: "Jong AZ", MP: 38, MW: 14, MD: 10, GF: 63, GA: 69 },
    { team: "Eindhoven", MP: 38, MW: 14, MD: 9, GF: 58, GA: 64 },
    { team: "Roda", MP: 38, MW: 13, MD: 10, GF: 49, GA: 57 },
    { team: "Helmond", MP: 38, MW: 12, MD: 10, GF: 53, GA: 61 },
    { team: "VVV", MP: 38, MW: 11, MD: 8, GF: 44, GA: 69 },
    { team: "MVV", MP: 38, MW: 10, MD: 10, GF: 52, GA: 59 },
    { team: "TOP Oss", MP: 38, MW: 8, MD: 14, GF: 31, GA: 61 },
    { team: "Jong Ajax", MP: 38, MW: 9, MD: 9, GF: 37, GA: 52 },
    { team: "Jong PSV", MP: 38, MW: 8, MD: 8, GF: 55, GA: 86 },
    { team: "Jong Utrecht", MP: 38, MW: 4, MD: 11, GF: 31, GA: 82 },
    { team: "Vitesse", MP: 38, MW: 11, MD: 11, GF: 54, GA: 73 }
  ];

  const eersteDivisieFixtures = [
    ["VVV", "Jong PSV"],
    ["Roda", "De Graafschap"],
	["Cambuur", "TOP Oss"],
	["RKC Waalwijk", "Helmond"],
	["MVV", "Dordercht"],
	["Emmen", "Almere"],
	["Wilhelm II", "Eindhoven"],
	["Jong Utrecht", "Den Haag"],
	["Jong Ajax", "Jong AZ"],
//	["De Grafschap", "VVV"]
  ];

  eersteDivisieTeams.forEach(t => {
    t.ML = t.MP - (t.MW + t.MD);
    t.GD = t.GF - t.GA;
    t.points = t.MW * 3 + t.MD;
    t.power = (t.points / (t.MP * 3)) * 100;
  });

  eersteDivisieTeams.sort((a, b) => b.points - a.points);

  if (eersteDivisieTableBody) {
    eersteDivisieTeams.forEach((team, i) => {
      const row =`
       <tr>
        <td>${i + 1}</td>
        <td>${team.team}</td>
        <td>${team.MP}</td>
        <td>${team.MW}</td>
        <td>${team.MD}</td>
        <td>${team.ML}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.points}</td>
      </tr>`;
      eersteDivisieTableBody.innerHTML += row;
    });
  }

  if (eersteDivisiePredictionBody) {
    eersteDivisieFixtures.forEach(([home, away]) => {
      const homeTeam = eersteDivisieTeams.find(t => t.team === home);
      const awayTeam = eersteDivisieTeams.find(t => t.team === away);
      if (!homeTeam || !awayTeam) return;

      const homePower = homeTeam.power + 10;
      const awayPower = awayTeam.power;
      const diff = homePower - awayPower;

      let prediction = "X (Draw)";
      if (diff >= 10) prediction = "1 (Home Win)";
      else if (diff >= 5) prediction = "1X (Home Win or Draw)";
      else if (diff <= -10) prediction = "2 (Away Win)";
      else if (diff <= -5) prediction = "X2";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${home}</td>
        <td>${away}</td>
        <td>${homePower.toFixed(2)}</td>
        <td>${awayPower.toFixed(2)}</td>
        <td>${prediction}</td>
      `;
      eersteDivisiePredictionBody.appendChild(row);
    });
  }

  const belgianProLeagueTeams = [
  { team: "Genk", MP: 30, MW: 21, MD: 5, GF: 55, GA: 33 },
  { team: "Club Brugge", MP: 30, MW: 17, MD: 8, GF: 65, GA: 36 },
  { team: "Union Saint Gilloise", MP: 30, MW: 15, MD: 10, GF: 49, GA: 25 },
  { team: "Anderlecht", MP: 30, MW: 15, MD: 6, GF: 50, GA: 27 },
  { team: "Antwerp", MP: 30, MW: 12, MD: 10, GF: 47, GA: 32 },
  { team: "Gent", MP: 30, MW: 11, MD: 12, GF: 41, GA: 33 },
  { team: "Standard", MP: 30, MW: 10, MD: 9, GF: 22, GA: 35 },
  { team: "Mechelen", MP: 30, MW: 0, MD: 8, GF: 45, GA: 40 },
  { team: "Westerlo", MP: 30, MW: 10, MD: 7, GF: 50, GA: 49 },
  { team: "Charleroi", MP: 30, MW: 10, MD: 7, GF: 36, GA: 36 },
  { team: "Oud Heverlee Leuven", MP: 30, MW: 8, MD: 13, GF: 28, GA: 33 },
  { team: "Dender", MP: 30, MW: 8, MD: 8, GF: 33, GA: 51 },
  { team: "Cercle Brugge", MP: 30, MW: 7, MD: 11, GF: 29, GA: 44 },
  { team: "STVV", MP: 30, MW: 7, MD: 10, GF: 41, GA: 56 },
  { team: "Kotrijk", MP: 30, MW: 7, MD: 5, GF: 28, GA: 55 },
  { team: "Beerschot", MP: 30, MW: 3, MD: 9, GF: 26, GA: 60 }
];

const belgianProLeagueFixtures = [
  ["Oud Heverlee Leuven", "Genk"],
  ["Zulte Waregem", "Club Brugge"],
  ["Mechelen", "Gent"],
   ["Union Saint Gilloise", "Standard"],
  ["Dender", "Anderlecht"],
  ["STVV", "La Louviere"],
  ["Charleroi", "AntwerpCercle Brugge"],
  ["Cercle Brugge", "Westerlo"]
];



/*const teams = belgianProLeagueTeams;
const fixtures = belgianProLeagueFixtures;
const tableBody = belgianProLeagueTableBody;
const predictionBody = belgianProLeaguePredictionBody;
*/

belgianProLeagueTeams.forEach(t => {
  t.ML = t.MP - (t.MW + t.MD);
  t.GD = t.GF - t.GA;
  t.points = t.MW * 3 + t.MD;
  t.power = (t.points / (t.MP * 3)) * 100;
});

belgianProLeagueTeams.sort((a, b) => b.points - a.points);

if (belgianProLeagueTableBody) {
  belgianProLeagueTeams.forEach((team, i) => {
    const row = `<tr>
      <td>${i + 1}</td>
      <td>${team.team}</td>
      <td>${team.MP}</td>
      <td>${team.MW}</td>
      <td>${team.MD}</td>
      <td>${team.ML}</td>
      <td>${team.GF}</td>
      <td>${team.GA}</td>
      <td>${team.GD}</td>
      <td>${team.points}</td>
    </tr>`;
    belgianProLeagueTableBody.innerHTML += row;
  });
}

if (belgianProLeaguePredictionBody) {
  belgianProLeagueFixtures.forEach(([home, away]) => {
    const homeTeam = belgianProLeagueTeams.find(t => t.team === home);
    const awayTeam = belgianProLeagueTeams.find(t => t.team === away);
    if (!homeTeam || !awayTeam) return;

    const homePower = homeTeam.power + 10;
    const awayPower = awayTeam.power;
    const diff = homePower - awayPower;

    let prediction = "X (Draw)";
    if (diff >= 10) prediction = "1 (Home Win)";
    else if (diff >= 5) prediction = "1X (Home Win or Draw)";
    else if (diff <= -10) prediction = "2 (Away Win)";
    else if (diff <= -5) prediction = "X2";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${home}</td>
      <td>${away}</td>
      <td>${homePower.toFixed(2)}</td>
      <td>${awayPower.toFixed(2)}</td>
      <td>${prediction}</td>
    `;
    belgianProLeaguePredictionBody.appendChild(row);
  });
}

const belgianChallengerProTeams = [
  { team: "Zulte Waregem", MP: 28, MW: 18, MD: 5, GF: 55, GA: 30 },
  { team: "La Louviere", MP: 28, MW: 17, MD: 8, GF: 50, GA: 24 },
  { team: "Daring Brussels", MP: 34, MW: 17, MD: 6, GF: 42, GA: 21 },
  { team: "Sk Beveren", MP: 28, MW: 14, MD: 9, GF: 41, GA: 47 },
  { team: "Patro Eisden", MP: 28, MW: 13, MD: 10, GF: 51, GA: 28 },
  { team: "Club NXT", MP: 28, MW: 14, MD: 5, GF: 46, GA: 35 },
 
  { team: "Lokeren-Temse", MP: 28, MW: 12, MD: 5, GF: 32, GA: 35 },
  { team: "Lierse", MP: 28, MW: 11, MD: 7, GF: 40, GA: 35 },
  { team: "RFc Liege", MP: 28, MW: 9, MD: 7, GF: 38, GA: 44 },
  { team: "Eupen", MP: 28, MW: 8, MD: 6, GF: 38, GA: 47 },
  { team: "Lommel", MP: 28, MW: 8, MD: 5, GF: 32, GA: 46 },
  { team: "Francs Borains", MP: 28, MW: 8, MD: 4, GF: 29, GA: 50 },
  { team: "RSCA Futures", MP: 28, MW: 5, MD: 8, GF: 41, GA: 54 },
  { team: "RFC Seraing", MP: 28, MW: 3, MD: 10, GF: 28, GA: 55 },
  { team: "Jong Genk", MP: 28, MW: 3, MD: 5, GF: 30, GA: 62 }
];

const belgianChallengerProFixtures = [
  ["Francs Borains", "Patro Eisden"],
  ["Sk Beveren", "Jong Genk"],
  ["Kotrijk", "Lierse"],
  ["Lierse", "SK Beveren"],
  ["Lommel", "ROC Charleroi"],
  ["Lokeren-Temse", "Daring Brussels"],
  ["Beerschot", "Eupen"],
  ["Jong Gent", "RSCA Futures"],
  ["RFc Liege", "RFC Seraing"]
];



/*const teams = belgianProLeagueTeams;
const fixtures = belgianProLeagueFixtures;
const tableBody = belgianProLeagueTableBody;
const predictionBody = belgianProLeaguePredictionBody;
*/

belgianChallengerProTeams.forEach(t => {
  t.ML = t.MP - (t.MW + t.MD);
  t.GD = t.GF - t.GA;
  t.points = t.MW * 3 + t.MD;
  t.power = (t.points / (t.MP * 3)) * 100;
});

belgianChallengerProTeams.sort((a, b) => b.points - a.points);

if (belgianChallengerProTableBody) {
  belgianChallengerProTeams.forEach((team, i) => {
    const row = `<tr>
      <td>${i + 1}</td>
      <td>${team.team}</td>
      <td>${team.MP}</td>
      <td>${team.MW}</td>
      <td>${team.MD}</td>
      <td>${team.ML}</td>
      <td>${team.GF}</td>
      <td>${team.GA}</td>
      <td>${team.GD}</td>
      <td>${team.points}</td>
    </tr>`;
    belgianChallengerProTableBody.innerHTML += row;
  });
}

if (belgianChallengerProPredictionBody) {
  belgianChallengerProFixtures.forEach(([home, away]) => {
    const homeTeam = belgianChallengerProTeams.find(t => t.team === home);
    const awayTeam = belgianChallengerProTeams.find(t => t.team === away);
    if (!homeTeam || !awayTeam) return;

    const homePower = homeTeam.power + 10;
    const awayPower = awayTeam.power;
    const diff = homePower - awayPower;

    let prediction = "X (Draw)";
    if (diff >= 10) prediction = "1 (Home Win)";
    else if (diff >= 5) prediction = "1X (Home Win or Draw)";
    else if (diff <= -10) prediction = "2 (Away Win)";
    else if (diff <= -5) prediction = "X2";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${home}</td>
      <td>${away}</td>
      <td>${homePower.toFixed(2)}</td>
      <td>${awayPower.toFixed(2)}</td>
      <td>${prediction}</td>
    `;
    belgianChallengerProPredictionBody.appendChild(row);
  });
}


  });