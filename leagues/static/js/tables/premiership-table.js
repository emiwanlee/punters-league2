/*class Primiership{
constructor(Teams, MP, MW, Points, MD, ML, GF, GA, GD){
this.Teams = Teams; 
this.MP = MP;
this.MW = MW;
//this.Points = Points;
this.MD = MD;
//this.ML = ML;
this.GF = GF;
this.GA = GA;
//this.GD = GD;
}

calculateML(){
return this.MP - (this.MW + this.MD);
}
calculateGD(){
return this.GF - this.GA;
}

calculatePoints(){
return (this.MW * 3) + (this.MD * 1);
}

displayName() {
        const standingsTable = document.getElementById("standings");
        const row = document.createElement("tr");
        const ML = this.calculateML();
		const GD = this.calculateGD();
		const Points = this.calculatePoints()
        // Populate the row with team data
        row.innerHTML = `
          <td>${this.Teams}</td>
          <td>${this.MP}</td>
          <td>${this.MW}</td>
          <td>${this.MD}</td>
          <td>${ML}</td>
          <td>${this.GF}</td>
          <td>${this.GA}</td>
          <td>${GD}</td>
          <td>${Points}</td>
        `;

        // Append the row to the table
        standingsTable.appendChild(row);
      }
	  }
	  

    // Create instances of Primiership
    const team1 = new Primiership("Liverpool", 16, 12, 3, 1, 37, 16,  39);
	const team2 = new Primiership("Chelsea", 17, 10, 5, 2, 37, 19, 18, 35);

    // Display the teams in the table
    team1.displayName();
    team2.displayName();
*/
const SN =["SN", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const MP = ["MP", 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25];
const MW = ["MW", 18, 15, 14, 13, 12, 12, 12, 10, 10, 9, 10, 9, 7, 7, 8, 7, 5, 3, 4, 2];
const MD = ["MD", 6, 8, 5, 5, 7, 7, 5, 9, 8, 10, 4, 3, 9, 9, 5, 6, 4, 8, 5, 3];
const GF = ["GF", 60, 51, 41, 52, 44, 47, 42, 38, 35, 38, 43, 49, 29, 27, 28, 29, 35, 23, 25, 19];
const GA = ["GA", 24, 22, 29, 35, 29, 34, 33, 33, 38, 38, 42, 37, 32, 31, 35, 47, 54, 50, 55, 57];


//Goal differences Calculations
const gd1 = GF[1] - GA[1];
 console.log(gd1);

 const gd2 = GF[2] - GA[2];
 console.log(gd2);

 const gd3 = GF[3] - GA[3];
 console.log(gd3);

const gd4 = GF[4] - GA[4];
 console.log(gd4);

 const gd5 = GF[5] - GA[5];
 console.log(gd5);

 const gd6 = GF[6] - GA[6];
 console.log(gd6);
 
 const gd7 = GF[7] - GA[7];
 console.log(gd7);
 
  const gd8 = GF[8] - GA[8];
 console.log(gd8);
 
  const gd9 = GF[9] - GA[9];
 console.log(gd9);
 
  const gd10 = GF[10] - GA[10];
 console.log(gd10);
 
  const gd11 = GF[11] - GA[11];
 console.log(gd11);
 
  const gd12 = GF[12] - GA[12];
 console.log(gd12);
 
  const gd13 = GF[13] - GA[13];
 console.log(gd13);
 
  const gd14 = GF[14] - GA[14];
 console.log(gd14);


 const gd15 = GF[15] - GA[15];
 console.log(gd15);
 
  let gd16 = GF[16] - GA[16];
 console.log(gd16);
 
  let gd17 = GF[17] - GA[17];
 console.log(gd17);
 
  let gd18 = GF[18] - GA[18];
 console.log(gd18);
 
  let gd19 = GF[19] - GA[19];
 console.log(gd19);
 
  let gd20 = GF[20] - GA[20];
 console.log(gd20);
 
 
  //Points Calculations
 let pts1 = (MW[1] * 3) + (MD[1] * 1);

 let pts2 = (MW[2] * 3) + (MD[2] * 1);

 let pts3 = (MW[3] * 3) + (MD[3] * 1);

 let pts4 = (MW[4] * 3) + (MD[4] * 1);
 
 let pts5 = (MW[5] * 3) + (MD[5] * 1);

 let pts6 = (MW[6] * 3) + (MD[6] * 1);
 
 let pts7 = (MW[7] * 3) + (MD[7] * 1);
  
 let pts8 = (MW[8] * 3) + (MD[8] * 1);
    
let pts9 = (MW[9] * 3) + (MD[9] * 1);

 let pts10 = (MW[10] * 3) + (MD[10] * 1);
 
let pts11 = (MW[11] * 3) + (MD[11] * 1);
  
 let pts12 = (MW[12] * 3) + (MD[12] * 1);
   
  let pts13 = (MW[13] * 3) + (MD[13] * 1);
  
   let pts14 = (MW[14] * 3) + (MD[14] * 1);
   
    let pts15 = (MW[15] * 3) + (MD[15] * 1);
	
	let pts16 = (MW[16] * 3) + (MD[16] * 1);
	 
let pts17 = (MW[17] * 3) + (MD[17] * 1);

 let pts18 = (MW[18] * 3) + (MD[18] * 1);
 
  let pts19 = (MW[19] * 3) + (MD[19] * 1);
  
   let pts20 = (MW[20] * 3) + (MD[20] * 1);
	 

 

 //Matches Lost Calculations
const ml1 = MP[1] - (MW[1] + MD[1]); 
 console.log(ml1);

 const ml2 = MP[2] - (MW[2] + MD[2]); 
 console.log(ml2);

 const ml3 = MP[3] - (MW[3] + MD[3]); 
 console.log(ml3);

 const ml4 = MP[4] - (MW[4] + MD[4]); 
 console.log(ml4);

 const ml5 = MP[5] - (MW[5] + MD[5]); 
 console.log(ml5);

 const ml6 = MP[6] - (MW[6] + MD[6]); 
 console.log(ml6);
 
  const ml7 = MP[7] - (MW[7] + MD[7]); 
 console.log(ml7);
 
  const ml8 = MP[8] - (MW[8] + MD[8]); 
 console.log(ml8);
 
  const ml9 = MP[9] - (MW[9] + MD[9]); 
 console.log(ml9);

 const ml10 = MP[10] - (MW[10] + MD[10]); 
 console.log(ml10);
 
  const ml11 = MP[11] - (MW[11] + MD[11]); 
 console.log(ml11);
 
  const ml12 = MP[12] - (MW[12] + MD[12]); 
 console.log(ml12);
 
  const ml13 = MP[13] - (MW[13] + MD[13]); 
 console.log(ml13);
 
  const ml14 = MP[14] - (MW[14] + MD[14]); 
 console.log(ml14);
 
  const ml15 = MP[15] - (MW[15] + MD[15]); 
 console.log(ml15);
 
  const ml16 = MP[16] - (MW[16] + MD[16]); 
 console.log(ml16);
 
  const ml17 = MP[17] - (MW[17] + MD[17]); 
 console.log(ml17);
 
  const ml18 = MP[18] - (MW[18] + MD[18]); 
 console.log(ml18);
 
  const ml19 = MP[19] - (MW[19] + MD[19]); 
 console.log(ml9);
 
  const ml20 = MP[20] - (MW[20] + MD[20]); 
 console.log(ml20);
 
 


let teams = ["Teams", "Liverpool", "Arsenal", "Nottingham", "Manchester City", "Bournemouth", "Chelsea",
 "Newcastle", "Fulham", "Aston Villa", "Brighton", "Brentford", "Tottenham", "Crystal Palace", 
 "Everton", "Manchester United", "West Ham", "Wolves", "Ipswich", "Leicester", "Southampton"];
//let MP = ["MP", 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
//let MW = ["MW", 29, 27, 26, 23, 22, 21];
//let MD = ["MD", 4, 5, 7, 5, 2, 1];
let ML = ["ML", ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10, ml11, ml12, ml13, ml14, ml15, ml16,
ml17, ml18, ml19, ml20];

let GD = ["GD", gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10, gd11, gd12, gd13, gd14, gd15, gd16, 
gd17, gd18, gd19, gd20];

let Points = ["Points", pts1, pts2, pts3, pts4, pts5, pts6, pts7, pts8, pts9, pts10, pts11, pts12,
pts13, pts14, pts15, pts16, pts17, pts18, pts19, pts20];
let sn = "";
let text ="";
let text1 = "";
let text2 = "";
let text3 = "";
let text4 = "";
let text5 = "";
let text6 = "";
let text7 = "";
let text8 = "";
for(i = 0; i < teams.length; i++){
	sn +=SN[i] + "<br>" + "<br>";
    text +=teams[i] + "<br>" + "<br>";
    text1 +=MP[i] + "<br>" + "<br>";
    text2 +=MW[i] + "<br>" + "<br>";
    text3 +=MD[i] + "<br>" + "<br>";
    text4 +=ML[i] + "<br>" + "<br>";
    text5 +=GF[i] + "<br>" + "<br>";
    text6 +=GA[i] + "<br>" + "<br>";
    text7 +=GD[i] + "<br>" + "<br>";
    text8 +=Points[i] + "<br>" + "<br>";
   //console.log(teams[i]);
  // console.log(MP[i]);
   //document.getElementById("demo").innerHTML=text;
   //document.getElementById("demo").innerHTML=text1;
}
/*
document.getElementById("serial_number").innerHTML=sn;
document.getElementById("demo").innerHTML=text;
   document.getElementById("demo_played").innerHTML=text1;
   document.getElementById("demo_won").innerHTML=text2;
   document.getElementById("demo_drawn").innerHTML=text3;
   document.getElementById("demo_lost").innerHTML=text4;
   document.getElementById("demo_goals_for").innerHTML=text5;
   document.getElementById("demo_goals_against").innerHTML=text6;
   document.getElementById("demo_goals_difference").innerHTML=text7;
   document.getElementById("demo_goals_points").innerHTML=text8;
*/

//This is the code for % win, draw, loss calculation
   const win_ratio_liverpool = (MW[1] / MP[1] ) * 100;
   const draw_ratio_liverpool = (MD[1] / MP[1] ) * 100;
   const loss_ratio_liverpool = (ML[1] / MP[1] ) * 100;


   const win_ratio_arsenal = (MW[2] / MP[2] ) * 100;
   const draw_ratio_arsenal = (MD[2] / MP[2] ) * 100;
   const loss_ratio_arsenal = (ML[2] / MP[2] ) * 100;

   const win_ratio_nottingham = (MW[3] / MP[3] ) * 100;
   const draw_ratio_nottingham = (MD[3] / MP[3] ) * 100;
   const loss_ratio_nottingham = (ML[3] / MP[3] ) * 100;

   const win_ratio_man_city = (MW[4] / MP[4] ) * 100;
   const draw_ratio_man_city = (MD[4] / MP[4] ) * 100;
   const loss_ratio_man_city = (ML[4] / MP[4] ) * 100;

   const win_ratio_bournemouth = (MW[5] / MP[5] ) * 100;
   const draw_ratio_bournemouth = (MD[5] / MP[5] ) * 100;
   const loss_ratio_bournemouth = (ML[5] / MP[5] ) * 100;

   const win_ratio_chelsea = (MW[6] / MP[6] ) * 100;
   const draw_ratio_chelsea = (MD[6] / MP[6] ) * 100;
   const loss_ratio_chelsea = (ML[6] / MP[6] ) * 100;

   const win_ratio_newcastle = (MW[7] / MP[7] ) * 100;
   const draw_ratio_newcastle = (MD[7] / MP[7] ) * 100;
   const loss_ratio_newcastle = (ML[7] / MP[7] ) * 100;

   const win_ratio_fulham = (MW[8] / MP[8] ) * 100;
   const draw_ratio_fulham = (MD[8] / MP[8] ) * 100;
   const loss_ratio_fulham = (ML[8] / MP[8] ) * 100;
   
   const win_ratio_aston_villa = (MW[9] / MP[9] ) * 100;
   const draw_ratio_aston_villa = (MD[9] / MP[9] ) * 100;
   const loss_ratio_aston_villa = (ML[9] / MP[9] ) * 100;

   const win_ratio_brighton = (MW[10] / MP[10] ) * 100;
   const draw_ratio_brighton = (MD[10] / MP[10] ) * 100;
   const loss_ratio_brighton = (ML[10] / MP[10] ) * 100;
   

   const win_ratio_brentford = (MW[11] / MP[11] ) * 100;
   const draw_ratio_brentford = (MD[11] / MP[11] ) * 100;
   const loss_ratio_brentford = (ML[11] / MP[11] ) * 100;

   const win_ratio_crystal_palace = (MW[12] / MP[12] ) * 100;
   const draw_ratio_crystal_palace = (MD[12] / MP[12] ) * 100;
   const loss_ratio_crystal_palace = (ML[12] / MP[12] ) * 100;

   const win_ratio_everton = (MW[13] / MP[13] ) * 100;
   const draw_ratio_everton = (MD[13] / MP[13] ) * 100;
   const loss_ratio_everton = (ML[13] / MP[13] ) * 100;

   const win_ratio_man_utd = (MW[14] / MP[14] ) * 100;
   const draw_ratio_man_utd = (MD[14] / MP[14] ) * 100;
   const loss_ratio_man_utd = (ML[14] / MP[14] ) * 100;

   const win_ratio_tottenham = (MW[15] / MP[15] ) * 100;
   const draw_ratio_tottenham = (MD[15] / MP[15] ) * 100;
   const loss_ratio_tottenham = (ML[15] / MP[15] ) * 100;

   const win_ratio_west_ham = (MW[16] / MP[16] ) * 100;
   const draw_ratio_west_ham = (MD[16] / MP[16] ) * 100;
   const loss_ratio_west_ham = (ML[16] / MP[16] ) * 100;

   const win_ratio_wolves = (MW[17] / MP[17] ) * 100;
   const draw_ratio_wolves = (MD[17] / MP[17] ) * 100;
   const loss_ratio_wolves = (ML[17] / MP[17] ) * 100;

   const win_ratio_ipswich = (MW[18] / MP[18] ) * 100;
   const draw_ratio_ipswich = (MD[18] / MP[18] ) * 100;
   const loss_ratio_ipswich = (ML[18] / MP[18] ) * 100;

   const win_ratio_leicester = (MW[19] / MP[19] ) * 100;
   const draw_ratio_leicester = (MD[19] / MP[19] ) * 100;
   const loss_ratio_leicester = (ML[19] / MP[19] ) * 100;


   const win_ratio_southampton = (MW[20] / MP[20] ) * 100;
   const draw_ratio_southampton = (MD[20] / MP[20] ) * 100;
   const loss_ratio_southampton = (ML[20] / MP[20] ) * 100;

document.getElementById("ars-wr").innerHTML = win_ratio_arsenal.toFixed(0) + "%";
document.getElementById("ars-dr").innerHTML = draw_ratio_arsenal.toFixed(0) + "%";
document.getElementById("ars-lr").innerHTML = loss_ratio_arsenal.toFixed(0) + "%";

document.getElementById("cry-wr").innerHTML = win_ratio_crystal_palace.toFixed(0) + "%";
document.getElementById("cry-dr").innerHTML = draw_ratio_crystal_palace.toFixed(0) + "%";
document.getElementById("cry-lr").innerHTML = loss_ratio_crystal_palace.toFixed(0) + "%";


document.getElementById("che-wr").innerHTML = win_ratio_chelsea.toFixed(0) + "%";
document.getElementById("che-dr").innerHTML = draw_ratio_chelsea.toFixed(0) + "%";
document.getElementById("che-lr").innerHTML = loss_ratio_chelsea.toFixed(0) + "%";

document.getElementById("bre-wr").innerHTML = win_ratio_brentford.toFixed(0) + "%";
document.getElementById("bre-dr").innerHTML = draw_ratio_brentford.toFixed(0) + "%";
document.getElementById("bre-lr").innerHTML = loss_ratio_brentford.toFixed(0) + "%";

document.getElementById("not-wr").innerHTML = win_ratio_nottingham.toFixed(0) + "%";
document.getElementById("not-dr").innerHTML = draw_ratio_nottingham.toFixed(0) + "%";
document.getElementById("not-lr").innerHTML = loss_ratio_nottingham.toFixed(0) + "%";

document.getElementById("ips-wr").innerHTML = win_ratio_ipswich.toFixed(0) + "%";
document.getElementById("ips-dr").innerHTML = draw_ratio_ipswich.toFixed(0) + "%";
document.getElementById("ips-lr").innerHTML = loss_ratio_ipswich.toFixed(0) + "%";

document.getElementById("eve-wr").innerHTML = win_ratio_everton.toFixed(0) + "%";
document.getElementById("eve-dr").innerHTML = draw_ratio_everton.toFixed(0) + "%";
document.getElementById("eve-lr").innerHTML = loss_ratio_everton.toFixed(0) + "%";

document.getElementById("lei-wr").innerHTML = win_ratio_leicester.toFixed(0) + "%";
document.getElementById("lei-dr").innerHTML = draw_ratio_leicester.toFixed(0) + "%";
document.getElementById("lei-lr").innerHTML = loss_ratio_leicester.toFixed(0) + "%";



document.getElementById("sou-wr").innerHTML = win_ratio_southampton.toFixed(0) + "%";
document.getElementById("sou-dr").innerHTML = draw_ratio_southampton.toFixed(0) + "%";
document.getElementById("sou-lr").innerHTML = loss_ratio_southampton.toFixed(0) + "%";

document.getElementById("che-wr").innerHTML = win_ratio_chelsea.toFixed(0) + "%";
document.getElementById("che-dr").innerHTML = draw_ratio_chelsea.toFixed(0) + "%";
document.getElementById("che-lr").innerHTML = loss_ratio_chelsea.toFixed(0) + "%";


document.getElementById("bou-wr").innerHTML = win_ratio_bournemouth.toFixed(0) + "%";
document.getElementById("bou-dr").innerHTML = draw_ratio_bournemouth.toFixed(0) + "%";
document.getElementById("bou-lr").innerHTML = loss_ratio_bournemouth.toFixed(0) + "%";


document.getElementById("ful-wr").innerHTML = win_ratio_fulham.toFixed(0) + "%";
document.getElementById("ful-dr").innerHTML = draw_ratio_fulham.toFixed(0) + "%";
document.getElementById("ful-lr").innerHTML = loss_ratio_fulham.toFixed(0) + "%";

document.getElementById("wol-wr").innerHTML = win_ratio_wolves.toFixed(0) + "%";
document.getElementById("wol-dr").innerHTML = draw_ratio_wolves.toFixed(0) + "%";
document.getElementById("wol-lr").innerHTML = loss_ratio_wolves.toFixed(0) + "%";


document.getElementById("new-wr").innerHTML = win_ratio_newcastle.toFixed(0) + "%";
document.getElementById("new-dr").innerHTML = draw_ratio_newcastle.toFixed(0) + "%";
document.getElementById("new-lr").innerHTML = loss_ratio_newcastle.toFixed(0) + "%";


document.getElementById("bri-wr").innerHTML = win_ratio_brighton.toFixed(0) + "%";
document.getElementById("bri-dr").innerHTML = draw_ratio_brighton.toFixed(0) + "%";
document.getElementById("bri-lr").innerHTML = loss_ratio_brighton.toFixed(0) + "%";


document.getElementById("whu-wr").innerHTML = win_ratio_west_ham.toFixed(0) + "%";
document.getElementById("whu-dr").innerHTML = draw_ratio_west_ham.toFixed(0) + "%";
document.getElementById("whu-lr").innerHTML = loss_ratio_west_ham.toFixed(0) + "%";

document.getElementById("mnu-wr").innerHTML = win_ratio_man_utd.toFixed(0) + "%";
document.getElementById("mnu-dr").innerHTML = draw_ratio_man_utd.toFixed(0) + "%";
document.getElementById("mnu-lr").innerHTML = loss_ratio_man_utd.toFixed(0) + "%";


document.getElementById("tot-wr").innerHTML = win_ratio_tottenham.toFixed(0) + "%";
document.getElementById("tot-dr").innerHTML = draw_ratio_tottenham.toFixed(0) + "%";
document.getElementById("tot-lr").innerHTML = loss_ratio_tottenham.toFixed(0) + "%";


document.getElementById("ast-wr").innerHTML = win_ratio_aston_villa.toFixed(0) + "%";
document.getElementById("ast-dr").innerHTML = draw_ratio_aston_villa.toFixed(0) + "%";
document.getElementById("ast-lr").innerHTML = loss_ratio_aston_villa.toFixed(0) + "%";


document.getElementById("mnc-wr").innerHTML = win_ratio_man_city.toFixed(0) + "%";
document.getElementById("mnc-dr").innerHTML = draw_ratio_man_city.toFixed(0) + "%";
document.getElementById("mnc-lr").innerHTML = loss_ratio_man_city.toFixed(0) + "%";


document.getElementById("liv-wr").innerHTML = win_ratio_liverpool.toFixed(0) + "%";
document.getElementById("liv-dr").innerHTML = draw_ratio_liverpool.toFixed(0) + "%";
document.getElementById("liv-lr").innerHTML = loss_ratio_liverpool.toFixed(0) + "%";


document.getElementById("ars-wr").innerHTML = win_ratio_arsenal.toFixed(0) + "%";
document.getElementById("ars-dr").innerHTML = draw_ratio_arsenal.toFixed(0) + "%";
document.getElementById("ars-lr").innerHTML = loss_ratio_arsenal.toFixed(0) + "%";


   //Matches Lost Calculations
  /* let ml1 = MP[1] - (MW[1] + MD[1]); 
   console.log(ml1);

   let ml2 = MP[2] - (MW[2] + MD[2]); 
   console.log(ml2);

   let ml3 = MP[3] - (MW[3] + MD[3]); 
   console.log(ml3);

   let ml4 = MP[4] - (MW[4] + MD[4]); 
   console.log(ml4);

   let ml5 = MP[5] - (MW[5] + MD[5]); 
   console.log(ml5);

   let ml6 = MP[6] - (MW[6] + MD[6]); 
   console.log(ml6);
   
   
   //const a = "Chukwuemeka";
//console.log(a);
//const tinko = alert("Who Dey");
//document.getElementById("sem").innerHTML = tinko;

function liverpool(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function arsenal(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function nottingham(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function chelsea(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
function manCity(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
function newcastle(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
function brighton(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
function fulham(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
function astonVilla(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
function bournemouth(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function brentford(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function crystalPalace(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function manchesterUnited(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function tottenham(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function everton(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function westHam(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function wolves(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function ipswich(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function leicester(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}

function southampton(Team, MP, MW, MD, GF, GA) {
  const ML = MP - (MW + MD); // Matches Lost
  const GD = GF - GA;        // Goal Difference
  const Points = (MW * 3) + (MD * 1); // Total Points

  return {
    Team,
    MP,
    MW,
    MD,
    ML,
    GF,
    GA,
    GD,
    Points,
  };
}
// Get stats for both teams
const statsLiverpool = liverpool("Liverpool", 29, 21, 7, 69, 27);
const statsArsenal = arsenal("Arsenal", 29, 16, 10, 53, 24);
const statsNottingham = nottingham("Nottingham", 29, 16, 6, 49, 35);
const statsChelsea = chelsea("Chelsea", 29, 14, 7, 53, 37);
const statsManchesterCity = manCity("Manchester City", 29, 14, 6, 55, 40);
const statsNewcastle = newcastle("Newcastle", 29, 14, 5, 38, 9);
const statsBrighton = brighton("Brighton", 29, 12, 11, 48, 42);
const statsFulham = fulham("Fulham", 29, 12, 9, 43, 38);
const statsAstonVilla = astonVilla("Aston Villa", 29, 12, 9, 41, 45);
const statsBournemouth = bournemouth("Bournemouth", 29, 12, 8, 48, 36);
const statsBrentford = brentford("Brentford", 29, 12, 5, 50, 45);
const statsCrystalPalace = crystalPalace("Crystal Palace", 28, 10, 9, 36, 33);
const statsManchesterUnited = manchesterUnited("Manchester United", 29, 10, 7, 37, 40);
const statsTottenham = tottenham("Tottenham", 28, 10, 4, 55, 43);
const statsEverton = everton("Everton", 29, 7, 13, 32, 36);
const statsWestHam = westHam("West Ham", 29, 9, 7, 33, 49);
const statsWolves = wolves("Wolves", 29, 7, 5, 40, 58);
const statsIpswich = ipswich("Ipswich", 29, 3, 8, 62, 34);
const statsLeicester = leicester("Leicester", 29, 4, 5, 26, 65);
const statsSouthampton = southampton("Southampton", 29, 2, 3, 21, 70);
// Display Liverpool Stats
/*document.getElementById("liverpool-info").innerHTML = `
  <strong>Team:</strong> ${statsLiverpool.Team}<br>
  <strong>Matches Played:</strong> ${statsLiverpool.MP}<br>
  <strong>Matches Won:</strong> ${statsLiverpool.MW}<br>
  <strong>Matches Drawn:</strong> ${statsLiverpool.MD}<br>
  <strong>Matches Lost:</strong> ${statsLiverpool.ML}<br>
  <strong>Goals For:</strong> ${statsLiverpool.GF}<br>
  <strong>Goals Against:</strong> ${statsLiverpool.GA}<br>
  <strong>Goal Difference:</strong> ${statsLiverpool.GD}<br>
  <strong>Points:</strong> ${statsLiverpool.Points}
`;

// Display Arsenal Stats
document.getElementById("arsenal-info").innerHTML = `
  <strong>Team:</strong> ${statsArsenal.Team}<br>
  <strong>Matches Played:</strong> ${statsArsenal.MP}<br>
  <strong>Matches Won:</strong> ${statsArsenal.MW}<br>
  <strong>Matches Drawn:</strong> ${statsArsenal.MD}<br>
  <strong>Matches Lost:</strong> ${statsArsenal.ML}<br>
  <strong>Goals For:</strong> ${statsArsenal.GF}<br>
  <strong>Goals Against:</strong> ${statsArsenal.GA}<br>
  <strong>Goal Difference:</strong> ${statsArsenal.GD}<br>
  <strong>Points:</strong> ${statsArsenal.Points}
`;

// Display Goal Difference and Points for Liverpool (from destructured values)
document.getElementById("sem").innerHTML = `
  <strong>Liverpool - Goal Difference:</strong> ${statsLiverpool.GD} 
  <strong>Points:</strong> ${statsLiverpool.Points}
`;

const teamArsWinRatio = (statsArsenal.MW / statsArsenal.MP) * 100;
console.log (teamArsWinRatio.toFixed(2) + "%");

const teamLivWinRatio = (statsLiverpool.MW / statsLiverpool.MP) * 100;
console.log (teamLivWinRatio.toFixed(2) + "%");

const teamNotWinRatio = (statsNottingham.MW / statsNottingham.MP) * 100;
console.log (teamNotWinRatio.toFixed(2) + "%");

const teamCheWinRatio = (statsChelsea.MW / statsChelsea.MP) * 100;
console.log (teamCheWinRatio.toFixed(2) + "%");

const teamMNCWinRatio = (statsManchesterCity.MW / statsManchesterCity.MP) * 100;
console.log (teamMNCWinRatio.toFixed(2) + "%");

const teamNewWinRatio = (statsNewcastle.MW / statsNewcastle.MP) * 100;
console.log (teamNewWinRatio.toFixed(2) + "%");

const teamBriWinRatio = (statsBrighton.MW / statsBrighton.MP) * 100;
console.log (teamBriWinRatio.toFixed(2) + "%");

const teamFulWinRatio = (statsFulham.MW / statsFulham.MP) * 100;
console.log (teamFulWinRatio.toFixed(2) + "%");

const teamAstWinRatio = (statsAstonVilla.MW / statsAstonVilla.MP) * 100;
console.log (teamAstWinRatio.toFixed(2) + "%");

const teamBouWinRatio = (statsBournemouth.MW / statsBournemouth.MP) * 100;
console.log (teamBouWinRatio.toFixed(2) + "%");

const teamBreWinRatio = (statsBrentford.MW / statsBrentford.MP) * 100;
console.log (teamBreWinRatio.toFixed(2) + "%");

const teamCryWinRatio = (statsCrystalPalace.MW / statsCrystalPalace.MP) * 100;
console.log (teamCryWinRatio.toFixed(2) + "%");

const teamMNUWinRatio = (statsManchesterUnited.MW / statsManchesterUnited.MP) * 100;
console.log (teamMNUWinRatio.toFixed(2) + "%");

const teamTotWinRatio = (statsTottenham.MW / statsTottenham.MP) * 100;
console.log (teamTotWinRatio.toFixed(2) + "%");

const teamEveWinRatio = (statsEverton.MW / statsEverton.MP) * 100;
console.log (teamEveWinRatio.toFixed(2) + "%");

const teamWHUWinRatio = (statsWestHam.MW / statsWestHam.MP) * 100;
console.log (teamWHUWinRatio.toFixed(2) + "%");


const teamWolWinRatio = (statsWolves.MW / statsWolves.MP) * 100;
console.log (teamWolWinRatio.toFixed(2) + "%");


const teamIpsWinRatio = (statsIpswich.MW / statsIpswich.MP) * 100;
console.log (teamIpsWinRatio.toFixed(2) + "%");


const teamLeiWinRatio = (statsLeicester.MW / statsLeicester.MP) * 100;
console.log (teamLeiWinRatio.toFixed(2) + "%");


const teamSouWinRatio = (statsSouthampton.MW / statsSouthampton.MP) * 100;
console.log (teamSouWinRatio.toFixed(2) + "%");


if((teamLivWinRatio - teamArsWinRatio) >= 15){
console.log("Home team likely to win");}
else if((teamLivWinRatio - teamArsWinRatio) <= 15){
console.log("Away team likely to win")
}else{
console.log("Cannot tell")
};
// Calculation for the various team ratios
const livWinRatio = (statsLiverpool.MW / statsLiverpool.MP) * 100;
const livDrawRatio = (statsLiverpool.MD / statsLiverpool.MP) * 100;
const livLoseRatio = (statsLiverpool.ML / statsLiverpool.MP) * 100;

const arsWinRatio = (statsArsenal.MW / statsArsenal.MP) * 100;
const arsDrawRatio = (statsArsenal.MD / statsArsenal.MP) * 100;
const arsLoseRatio = (statsArsenal.ML / statsArsenal.MP) * 100;

const notWinRatio = (statsNottingham.MW / statsNottingham.MP) * 100;
const notDrawRatio = (statsNottingham.MD / statsNottingham.MP) * 100;
const notLoseRatio = (statsNottingham.ML / statsNottingham.MP) * 100;

const cheWinRatio = (statsChelsea.MW / statsChelsea.MP) * 100;
const cheDrawRatio = (statsChelsea.MD / statsChelsea.MP) * 100;
const cheLoseRatio = (statsChelsea.ML / statsChelsea.MP) * 100;

const mncWinRatio = (statsManchesterCity.MW / statsManchesterCity.MP) * 100;
const mncDrawRatio = (statsManchesterCity.MD / statsManchesterCity.MP) * 100;
const mncLoseRatio = (statsManchesterCity.ML / statsManchesterCity.MP) * 100;

const newWinRatio = (statsNewcastle.MW / statsNewcastle.MP) * 100;
const newDrawRatio = (statsNewcastle.MD / statsNewcastle.MP) * 100;
const newLoseRatio = (statsNewcastle.ML / statsNewcastle.MP) * 100;

const briWinRatio = (statsBrighton.MW / statsBrighton.MP) * 100;
const briDrawRatio = (statsBrighton.MD / statsBrighton.MP) * 100;
const briLoseRatio = (statsBrighton.ML / statsBrighton.MP) * 100;

const fulWinRatio = (statsFulham.MW / statsFulham.MP) * 100;
const fulDrawRatio = (statsFulham.MD / statsFulham.MP) * 100;
const fulLoseRatio = (statsFulham.ML / statsFulham.MP) * 100;

const astWinRatio = (statsAstonVilla.MW / statsAstonVilla.MP) * 100;
const astDrawRatio = (statsAstonVilla.MD / statsAstonVilla.MP) * 100;
const astLoseRatio = (statsAstonVilla.ML / statsAstonVilla.MP) * 100;

const bouWinRatio = (statsBournemouth.MW / statsBournemouth.MP) * 100;
const bouDrawRatio = (statsBournemouth.MD / statsBournemouth.MP) * 100;
const bouLoseRatio = (statsBournemouth.ML / statsBournemouth.MP) * 100;

const breWinRatio = (statsBrentford.MW / statsBrentford.MP) * 100;
const breDrawRatio = (statsBrentford.MD / statsBrentford.MP) * 100;
const breLoseRatio = (statsBrentford.ML / statsBrentford.MP) * 100;

const cryWinRatio = (statsCrystalPalace.MW / statsCrystalPalace.MP) * 100;
const cryDrawRatio = (statsCrystalPalace.MD / statsCrystalPalace.MP) * 100;
const cryLoseRatio = (statsCrystalPalace.ML / statsCrystalPalace.MP) * 100;

const mnuWinRatio = (statsManchesterUnited.MW / statsManchesterUnited.MP) * 100;
const mnuDrawRatio = (statsManchesterUnited.MD / statsManchesterUnited.MP) * 100;
const mnuLoseRatio = (statsManchesterUnited.ML / statsManchesterUnited.MP) * 100;

const totWinRatio = (statsTottenham.MW / statsTottenham.MP) * 100;
const totDrawRatio = (statsTottenham.MD / statsTottenham.MP) * 100;
const totLoseRatio = (statsTottenham.ML / statsTottenham.MP) * 100;

const eveWinRatio = (statsEverton.MW / statsEverton.MP) * 100;
const eveDrawRatio = (statsEverton.MD / statsEverton.MP) * 100;
const eveLoseRatio = (statsEverton.ML / statsEverton.MP) * 100;

const whuWinRatio = (statsWestHam.MW / statsWestHam.MP) * 100;
const whuDrawRatio = (statsWestHam.MD / statsWestHam.MP) * 100;
const whuLoseRatio = (statsWestHam.ML / statsWestHam.MP) * 100;

const wolWinRatio = (statsWolves.MW / statsWolves.MP) * 100;
const wolDrawRatio = (statsWolves.MD / statsWolves.MP) * 100;
const wolLoseRatio = (statsWolves.ML / statsWolves.MP) * 100;

const ipsWinRatio = (statsIpswich.MW / statsIpswich.MP) * 100;
const ipsDrawRatio = (statsIpswich.MD / statsIpswich.MP) * 100;
const ipsLoseRatio = (statsIpswich.ML / statsIpswich.MP) * 100;

const leiWinRatio = (statsLeicester.MW / statsLeicester.MP) * 100;
const leiDrawRatio = (statsLeicester.MD / statsLeicester.MP) * 100;
const leiLoseRatio = (statsLeicester.ML / statsLeicester.MP) * 100;

const souWinRatio = (statsSouthampton.MW / statsSouthampton.MP) * 100;
const souDrawRatio = (statsSouthampton.MD / statsSouthampton.MP) * 100;
const souLoseRatio = (statsSouthampton.ML / statsSouthampton.MP) * 100;

/*
const winRatioEve = document.getElementById("eve-wr");
winRatioEve.textContent = `${eveWinRatio.toFixed(0)}%` ;

const drawRatioEve = document.getElementById("eve-dr");
drawRatioEve.textContent = `${eveDrawRatio.toFixed(0)}%` ;

const loseRatioEve = document.getElementById("eve-lr");
loseRatioEve.textContent = `${eveLoseRatio.toFixed(0)}%` ;

const winRatioWHU = document.getElementById("whu-wr");
winRatioWHU.textContent = `${whuWinRatio.toFixed(0)}%` ;

const drawRatioWHU = document.getElementById("whu-dr");
drawRatioWHU.textContent = `${whuDrawRatio.toFixed(0)}%` ;


const teamRatio = [
  { 
    name: "liv", 
    winRatio: livWinRatio, 
    drawRatio: livDrawRatio, 
    loseRatio: livLoseRatio 
  },
  { 
    name: "ars", 
    winRatio: arsWinRatio, 
    drawRatio: arsDrawRatio, 
    loseRatio: arsLoseRatio 
  },
  { 
    name: "not", 
    winRatio: notWinRatio, 
    drawRatio: notDrawRatio, 
    loseRatio: notLoseRatio 
  },
  
  { 
    name: "che" ,
    winRatio: cheWinRatio, 
    drawRatio: cheDrawRatio, 
    loseRatio: cheLoseRatio 
  },
  
  { 
    name: "mnc", 
    winRatio: mncWinRatio, 
    drawRatio: mncDrawRatio, 
    loseRatio: mncLoseRatio 
  },
  
  { 
    name: "new", 
    winRatio: newWinRatio, 
    drawRatio: newDrawRatio, 
    loseRatio: newLoseRatio 
  },
  
  { 
    name: "bri", 
    winRatio: briWinRatio, 
    drawRatio: briDrawRatio, 
    loseRatio: briLoseRatio 
  },
  
  { 
    name: "ful", 
    winRatio: fulWinRatio, 
    drawRatio: fulDrawRatio, 
    loseRatio: fulLoseRatio 
  },
  
  { 
    name: "ast", 
    winRatio: astWinRatio, 
    drawRatio: astDrawRatio, 
    loseRatio: astLoseRatio 
  },
  
  { 
    name: "bou", 
    winRatio: bouWinRatio, 
    drawRatio: bouDrawRatio, 
    loseRatio: bouLoseRatio 
  },
  
  { 
    name: "bre", 
    winRatio: breWinRatio, 
    drawRatio: breDrawRatio, 
    loseRatio: breLoseRatio 
  },
  
  { 
    name: "cry", 
    winRatio: cryWinRatio, 
    drawRatio: cryDrawRatio, 
    loseRatio: cryLoseRatio 
  },
  
  { 
    name: "mnu", 
    winRatio: mnuWinRatio, 
    drawRatio: mnuDrawRatio, 
    loseRatio: mnuLoseRatio 
  },
  
  { 
    name: "tot", 
    winRatio: totWinRatio, 
    drawRatio: totDrawRatio, 
    loseRatio: totLoseRatio 
  },
  
  { 
    name: "eve", 
    winRatio: eveWinRatio, 
    drawRatio: eveDrawRatio, 
    loseRatio: eveLoseRatio 
  },
  
  { 
    name: "whu", 
    winRatio: whuWinRatio, 
    drawRatio: whuDrawRatio, 
    loseRatio: whuLoseRatio 
  },
  
  { 
    name: "wol", 
    winRatio: wolWinRatio, 
    drawRatio: wolDrawRatio, 
    loseRatio: wolLoseRatio 
  },
  
  { 
    name: "ips", 
    winRatio: ipsWinRatio, 
    drawRatio: ipsDrawRatio, 
    loseRatio: ipsLoseRatio 
  },
  
  { 
    name: "lei", 
    winRatio: leiWinRatio, 
    drawRatio: leiDrawRatio, 
    loseRatio: leiLoseRatio 
  },
  
  { 
    name: "sou", 
    winRatio: souWinRatio, 
    drawRatio: souDrawRatio, 
    loseRatio: souLoseRatio 
  },
  
  // Add other teams here...
];




const teams =[ 
  { name: 'Liverpool', winRatio: livWinRatio, loseRatio: livLoseRatio, drawRatio: livDrawRatio },
  { name: 'Arsenal', winRatio: arsWinRatio, loseRatio: arsLoseRatio, drawRatio: arsDrawRatio },
  { name: 'Nottingham', winRatio: notWinRatio,  loseRatio: notLoseRatio, drawRatio: notDrawRatio },
  { name: 'Chelsea', winRatio: cheWinRatio,  loseRatio: cheLoseRatio, drawRatio: cheDrawRatio  },
  { name: 'Manchester City', winRatio: mncWinRatio, loseRatio: mncLoseRatio, drawRatio: mncDrawRatio  },
  { name: 'Newcastle', winRatio: newWinRatio,  loseRatio: newLoseRatio, drawRatio: newDrawRatio  },
  { name: 'Brighton', winRatio: briWinRatio,  loseRatio: briLoseRatio, drawRatio: briDrawRatio  },
  { name: 'Fulham', winRatio: fulWinRatio,  loseRatio: fulLoseRatio, drawRatio: fulDrawRatio  },
  { name: 'Aston Villa', winRatio: astWinRatio,  loseRatio: astLoseRatio, drawRatio: astDrawRatio  },
  { name: 'Bournemouth', winRatio: bouWinRatio,  loseRatio: bouLoseRatio, drawRatio: bouDrawRatio  },
  { name: 'Brentford', winRatio: breWinRatio,  loseRatio: breLoseRatio, drawRatio: breDrawRatio  },
  { name: 'Crystal Palace', winRatio: cryWinRatio,  loseRatio: cryLoseRatio, drawRatio: cryDrawRatio  },
  { name: 'Manchester United', winRatio: mnuWinRatio,  loseRatio: mnuLoseRatio, drawRatio: mnuDrawRatio  },
  { name: 'Tottenham', winRatio: totWinRatio,  loseRatio: totLoseRatio, drawRatio: totDrawRatio  },
  { name: 'Everton', winRatio: eveWinRatio,  loseRatio: eveLoseRatio, drawRatio: eveDrawRatio  },
  { name: 'West Ham', winRatio: whuWinRatio,  loseRatio: whuLoseRatio, drawRatio: whuDrawRatio  },
  { name: 'Wolves', winRatio: wolWinRatio,  loseRatio: wolLoseRatio, drawRatio: wolDrawRatio  },
  { name: 'Ipsich', winRatio: ipsWinRatio,  loseRatio: ipsLoseRatio, drawRatio: ipsDrawRatio  },
  { name: 'Leicester', winRatio: leiWinRatio,  loseRatio: leiLoseRatio, drawRatio: leiDrawRatio  },
  { name: 'Southampton', winRatio: souWinRatio, loseRatio: souLoseRatio, drawRatio: souDrawRatio  },
  ];
  
  teams.forEach((team, index) => {
  // Liverpool
  if (index === 0) {
    const winRatiosLiverpool = document.getElementById("liv-wr");
    winRatiosLiverpool.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosLiverpool = document.getElementById("liv-dr");
    drawRatiosLiverpool.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosLiverpool = document.getElementById("liv-lr");
    loseRatiosLiverpool.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Arsenal
  if (index === 1) {
    const winRatiosArsenal = document.getElementById("ars-wr");
    winRatiosArsenal.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosArsenal = document.getElementById("ars-dr");
    drawRatiosArsenal.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosArsenal = document.getElementById("ars-lr");
    loseRatiosArsenal.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Nottingham Forest
  if (index === 2) {
    const winRatiosNottingham = document.getElementById("not-wr");
    winRatiosNottingham.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosNottingham = document.getElementById("not-dr");
    drawRatiosNottingham.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosNottingham = document.getElementById("not-lr");
    loseRatiosNottingham.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Chelsea
  if (index === 3) {
    const winRatiosChelsea = document.getElementById("che-wr");
    winRatiosChelsea.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosChelsea = document.getElementById("che-dr");
    drawRatiosChelsea.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosChelsea = document.getElementById("che-lr");
    loseRatiosChelsea.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Manchester City
  if (index === 4) {
    const winRatiosManchesterCity = document.getElementById("mnc-wr");
    winRatiosManchesterCity.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosManchesterCity = document.getElementById("mnc-dr");
    drawRatiosManchesterCity.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosManchesterCity = document.getElementById("mnc-lr");
    loseRatiosManchesterCity.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Newcastle
  if (index === 5) {
    const winRatiosNewcastle = document.getElementById("new-wr");
    winRatiosNewcastle.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosNewcastle = document.getElementById("new-dr");
    drawRatiosNewcastle.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosNewcastle = document.getElementById("new-lr");
    loseRatiosNewcastle.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Brighton
  if (index === 6) {
    const winRatiosBrighton = document.getElementById("bri-wr");
    winRatiosBrighton.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosBrighton = document.getElementById("bri-dr");
    drawRatiosBrighton.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosBrighton = document.getElementById("bri-lr");
    loseRatiosBrighton.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Fulham
  if (index === 7) {
    const winRatiosFulham = document.getElementById("ful-wr");
    winRatiosFulham.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosFulham = document.getElementById("ful-dr");
    drawRatiosFulham.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosFulham = document.getElementById("ful-lr");
    loseRatiosFulham.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Aston Villa
  if (index === 8) {
    const winRatiosAstonVilla = document.getElementById("ast-wr");
    winRatiosAstonVilla.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosAstonVilla = document.getElementById("ast-dr");
    drawRatiosAstonVilla.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosAstonVilla = document.getElementById("ast-lr");
    loseRatiosAstonVilla.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Bournemouth
  if (index === 9) {
    const winRatiosBournemouth = document.getElementById("bou-wr");
    winRatiosBournemouth.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosBournemouth = document.getElementById("bou-dr");
    drawRatiosBournemouth.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosBournemouth = document.getElementById("bou-lr");
    loseRatiosBournemouth.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Brentford
  if (index === 10) {
    const winRatiosBrentford = document.getElementById("bre-wr");
    winRatiosBrentford.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosBrentford = document.getElementById("bre-dr");
    drawRatiosBrentford.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosBrentford = document.getElementById("bre-lr");
    loseRatiosBrentford.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Crystal Palace
  if (index === 11) {
    const winRatiosCrystalPalace = document.getElementById("cry-wr");
    winRatiosCrystalPalace.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosCrystalPalace = document.getElementById("cry-dr");
    drawRatiosCrystalPalace.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosCrystalPalace = document.getElementById("cry-lr");
    loseRatiosCrystalPalace.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Manchester United
  if (index === 12) {
    const winRatiosManchesterUnited = document.getElementById("mnu-wr");
    winRatiosManchesterUnited.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosManchesterUnited = document.getElementById("mnu-dr");
    drawRatiosManchesterUnited.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosManchesterUnited = document.getElementById("mnu-lr");
    loseRatiosManchesterUnited.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Tottenham
  if (index === 13) {
    const winRatiosTottenham = document.getElementById("tot-wr");
    winRatiosTottenham.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosTottenham = document.getElementById("tot-dr");
    drawRatiosTottenham.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosTottenham = document.getElementById("tot-lr");
    loseRatiosTottenham.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Everton
  if (index === 14) {
    const winRatiosEverton = document.getElementById("eve-wr");
    winRatiosEverton.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosEverton = document.getElementById("eve-dr");
    drawRatiosEverton.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosEverton = document.getElementById("eve-lr");
    loseRatiosEverton.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // West Ham
  if (index === 15) {
    const winRatiosWestHam = document.getElementById("whu-wr");
    winRatiosWestHam.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosWestHam = document.getElementById("whu-dr");
    drawRatiosWestHam.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosWestHam = document.getElementById("whu-lr");
    loseRatiosWestHam.textContent = team.loseRatio.toFixed(0) + "%";
  }
  // Wolves (index 16)
  if (index === 16) {
    const winRatiosWolves = document.getElementById("wol-wr");
    winRatiosWolves.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosWolves = document.getElementById("wol-dr");
    drawRatiosWolves.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosWolves = document.getElementById("wol-lr");
    loseRatiosWolves.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Ipswich
  if (index === 17) {
    const winRatiosIpswich = document.getElementById("ips-wr");
    winRatiosIpswich.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosIpswich = document.getElementById("ips-dr");
    drawRatiosIpswich.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosIpswich = document.getElementById("ips-lr");
    loseRatiosIpswich.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Leicester
  if (index === 18) {
    const winRatiosLeicester = document.getElementById("lei-wr");
    winRatiosLeicester.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosLeicester = document.getElementById("lei-dr");
    drawRatiosLeicester.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosLeicester = document.getElementById("lei-lr");
    loseRatiosLeicester.textContent = team.loseRatio.toFixed(0) + "%";
  }
  
  // Southampton
  if (index === 19) {
    const winRatiosSouthampton = document.getElementById("sou-wr");
    winRatiosSouthampton.textContent = team.winRatio.toFixed(0) + "%";
  
    const drawRatiosSouthampton = document.getElementById("sou-dr");
    drawRatiosSouthampton.textContent = team.drawRatio.toFixed(0) + "%";
  
    const loseRatiosSouthampton = document.getElementById("sou-lr");
    loseRatiosSouthamptontextContent = team.loseRatio.toFixed(0) + "%";
  }
});

teams.forEach((team) => {
  if (teams[16].winRatio - teams[15].winRatio > 10) {
    console.log("Home team likely to win");
  } else if (teams[16].winRatio - teams[15].winRatio < 1) {
    console.log("Away team to win or draw");
  }
});
  
  /*
   const winRatiosArsenal = document.getElementById("ars-wr");
  winRatiosArsenal.textContent = teams[1].winRatio.toFixed(0) + "%";
  
  const drawRatiosArsenal = document.getElementById("ars-dr");
  drawRatiosArsenal.textContent = teams[1].drawRatio.toFixed(0) + "%";
  
  const loseRatiosArsenal = document.getElementById("ars-lr");
  loseRatiosArsenal.textContent = teams[1].loseRatio.toFixed(0) + "%";
  */

  
 /* 
  teams.forEach(team => {
  const winRatioElement = document.getElementById(`${team.name}-wr`);
  winRatioElement.textContent = `${team.winRatio.toFixed(0)}%`;

  const drawRatioElement = document.getElementById(`${team.name}-dr`);
  drawRatioElement.textContent = `${team.drawRatio.toFixed(0)}%`;

  const loseRatioElement = document.getElementById(`${team.name}-lr`);
  loseRatioElement.textContent = `${team.loseRatio.toFixed(0)}%`;
});

  
  teams.forEach(team => {
   const toWin = document.getElementById(`verdict-${team.name.toLowerCase().replace('','')}`);
   let verdict ="";
   
     if (team.winRatio > whuWinRatio && team.winRatio > whuWinRatio) {
    verdict = `Home team (${team.name}) to win`;
  } else if (team.winRatio == eveWinRatio && team.winRatio == whuWinRatio) {
    verdict = `Likely to draw`;
  } else if (team.winRatio < eveWinRatio || team.winRatio < whuWinRatio) {
    verdict = `Home team (${team.name}) likely to lose`;
  } else {
    verdict = `Cannot tell`;
  }
  
  // Update the verdict for the current team
  toWin.textContent = verdict;
});
*/
  
  /*
const loseRatioWHU = document.getElementById("whu-lr");
loseRatioWHU.textContent = `${whuLoseRatio.toFixed(0)}%` ;
loseRatioWHU.style.color = "red";
const toWin = document.getElementById("verdict");
if (teamEveWinRatio > teamWHUWinRatio){
toWin.textContent = `Home team to win`;
}else if (teamEveWinRatio == teamMNCWinRatio){
toWin.textContent =`Likely to draw`;
}else if (teamEveWinRatio < teamMNCWinRatio){
toWin.textContent = `Home team likely to lose`;
}else{
toWin.textContent = `Cannot tell`;
}
*/
