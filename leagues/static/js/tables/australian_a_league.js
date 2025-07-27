

const SN =["SN", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const MP = ["MP", 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 23, 24, 23];
const MW = ["MW", 13, 13, 12, 11, 11, 9, 9, 9, 8, 5, 6, 3, 2];
const MD = ["MD", 8, 4, 5, 6, 6, 7, 6, 5, 5, 10, 6, 5, 5];
const GF = ["GF", 44, 34, 49, 52, 41, 49, 49, 46, 40, 26, 25, 20, 26];
const GA = ["GA", 23, 22, 33, 37, 32, 38, 52, 38, 39, 47, 37, 55, 48];


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

 
 

 


let teams = ["Teams", "Auckland", "Melbourne City", "Western United", "Western Sydney", "Melbourne Victory", "Sydney FC",
 "Adelaide United", "Macarthur", "Newcastle Jets", "Central Coast", "Wellington Phoenix", "Perth Glory", "Brisbane Roar"];
//let MP = ["MP", 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
//let MW = ["MW", 29, 27, 26, 23, 22, 21];
//let MD = ["MD", 4, 5, 7, 5, 2, 1];
let ML = ["ML", ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10, ml11, ml12, ml13];

let GD = ["GD", gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10, gd11, gd12, gd13];

let Points = ["Points", pts1, pts2, pts3, pts4, pts5, pts6, pts7, pts8, pts9, pts10, pts11, pts12,
pts13];
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

//This is the code for % win, draw, loss calculation
const win_ratio_auckland = (MW[1] / MP[1] ) * 100;
const draw_ratio_auckland = (MD[1] / MP[1] ) * 100;
const loss_ratio_auckland = (ML[1] / MP[1] ) * 100;


const win_ratio_melbourne_city = (MW[2] / MP[2] ) * 100;
const draw_ratio_melbourne_city = (MD[2] / MP[2] ) * 100;
const loss_ratio_melbourne_city = (ML[2] / MP[2] ) * 100;

const win_ratio_western_united = (MW[3] / MP[3] ) * 100;
const draw_ratio_western_united = (MD[3] / MP[3] ) * 100;
const loss_ratio_western_united = (ML[3] / MP[3] ) * 100;

const win_ratio_western_sydney = (MW[4] / MP[4] ) * 100;
const draw_ratio_western_sydney = (MD[4] / MP[4] ) * 100;
const loss_ratio_western_sydney = (ML[4] / MP[4] ) * 100;

const win_ratio_melbourne_victory = (MW[5] / MP[5] ) * 100;
const draw_ratio_melbourne_victory = (MD[5] / MP[5] ) * 100;
const loss_ratio_melbourne_victory = (ML[5] / MP[5] ) * 100;

const win_ratio_sydney_fc = (MW[6] / MP[6] ) * 100;
const draw_ratio_sydney_fc = (MD[6] / MP[6] ) * 100;
const loss_ratio_sydney_fc = (ML[6] / MP[6] ) * 100;

const win_ratio_adelaide_united = (MW[7] / MP[7] ) * 100;
const draw_ratio_adelaide_united = (MD[7] / MP[7] ) * 100;
const loss_ratio_adelaide_united = (ML[7] / MP[7] ) * 100;

const win_ratio_macarthur = (MW[8] / MP[8] ) * 100;
const draw_ratio_macarthur = (MD[8] / MP[8] ) * 100;
const loss_ratio_macarthur = (ML[8] / MP[8] ) * 100;

const win_ratio_newcastle_jets = (MW[9] / MP[9] ) * 100;
const draw_ratio_newcastle_jets = (MD[9] / MP[9] ) * 100;
const loss_ratio_newcastle_jets = (ML[9] / MP[9] ) * 100;

const win_ratio_central_coast = (MW[10] / MP[10] ) * 100;
const draw_ratio_central_coast = (MD[10] / MP[10] ) * 100;
const loss_ratio_central_coast = (ML[10] / MP[10] ) * 100;


const win_ratio_wellington_phoenix = (MW[11] / MP[11] ) * 100;
const draw_ratio_wellington_phoenix = (MD[11] / MP[11] ) * 100;
const loss_ratio_wellington_phoenix = (ML[11] / MP[11] ) * 100;

const win_ratio_perth_glory = (MW[12] / MP[12] ) * 100;
const draw_ratio_perth_glory = (MD[12] / MP[12] ) * 100;
const loss_ratio_perth_glory = (ML[12] / MP[12] ) * 100;

const win_ratio_brisbane_roar = (MW[13] / MP[13] ) * 100;
const draw_ratio_brisbane_roar = (MD[13] / MP[13] ) * 100;
const loss_ratio_brisbane_roar = (ML[13] / MP[13] ) * 100;




document.getElementById("auc-wr").innerHTML = win_ratio_auckland.toFixed(0) + "%";
document.getElementById("auc-dr").innerHTML = draw_ratio_auckland.toFixed(0) + "%";
document.getElementById("auc-lr").innerHTML = loss_ratio_auckland.toFixed(0) + "%";

document.getElementById("mbc-wr").innerHTML = win_ratio_melbourne_city.toFixed(0) + "%";
document.getElementById("mbc-dr").innerHTML = draw_ratio_melbourne_city.toFixed(0) + "%";
document.getElementById("mbc-lr").innerHTML = loss_ratio_melbourne_city.toFixed(0) + "%";


document.getElementById("wtu-wr").innerHTML = win_ratio_western_united.toFixed(0) + "%";
document.getElementById("wtu-dr").innerHTML = draw_ratio_western_united.toFixed(0) + "%";
document.getElementById("wtu-lr").innerHTML = loss_ratio_western_united.toFixed(0) + "%";

document.getElementById("wts-wr").innerHTML = win_ratio_western_sydney.toFixed(0) + "%";
document.getElementById("wts-dr").innerHTML = draw_ratio_western_sydney.toFixed(0) + "%";
document.getElementById("wts-lr").innerHTML = loss_ratio_western_sydney.toFixed(0) + "%";


document.getElementById("mbv-wr").innerHTML = win_ratio_melbourne_victory.toFixed(0) + "%";
document.getElementById("mbv-dr").innerHTML = draw_ratio_melbourne_victory.toFixed(0) + "%";
document.getElementById("mbv-lr").innerHTML = loss_ratio_melbourne_victory.toFixed(0) + "%";

document.getElementById("syd-wr").innerHTML = win_ratio_sydney_fc.toFixed(0) + "%";
document.getElementById("syd-dr").innerHTML = draw_ratio_sydney_fc.toFixed(0) + "%";
document.getElementById("syd-lr").innerHTML = loss_ratio_sydney_fc.toFixed(0) + "%";

document.getElementById("ade-wr").innerHTML = win_ratio_adelaide_united.toFixed(0) + "%";
document.getElementById("ade-dr").innerHTML = draw_ratio_adelaide_united.toFixed(0) + "%";
document.getElementById("ade-lr").innerHTML = loss_ratio_adelaide_united.toFixed(0) + "%";


document.getElementById("mac-wr").innerHTML = win_ratio_macarthur.toFixed(0) + "%";
document.getElementById("mac-dr").innerHTML = draw_ratio_macarthur.toFixed(0) + "%";
document.getElementById("mac-lr").innerHTML = loss_ratio_macarthur.toFixed(0) + "%";


document.getElementById("new-wr").innerHTML = win_ratio_newcastle_jets.toFixed(0) + "%";
document.getElementById("new-dr").innerHTML = draw_ratio_newcastle_jets.toFixed(0) + "%";
document.getElementById("new-lr").innerHTML = loss_ratio_newcastle_jets.toFixed(0) + "%";

document.getElementById("cen-wr").innerHTML = win_ratio_central_coast.toFixed(0) + "%";
document.getElementById("cen-dr").innerHTML = draw_ratio_central_coast.toFixed(0) + "%";
document.getElementById("cen-lr").innerHTML = loss_ratio_central_coast.toFixed(0) + "%";


document.getElementById("wel-wr").innerHTML = win_ratio_wellington_phoenix.toFixed(0) + "%";
document.getElementById("wel-dr").innerHTML = draw_ratio_wellington_phoenix.toFixed(0) + "%";
document.getElementById("wel-lr").innerHTML = loss_ratio_wellington_phoenix.toFixed(0) + "%";


document.getElementById("bri-wr").innerHTML = win_ratio_brisbane_roar.toFixed(0) + "%";
document.getElementById("bri-dr").innerHTML = draw_ratio_brisbane_roar.toFixed(0) + "%";
document.getElementById("bri-lr").innerHTML = loss_ratio_brisbane_roar.toFixed(0) + "%";



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
   console.log(ml6);*/