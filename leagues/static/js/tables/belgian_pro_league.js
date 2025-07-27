

const SN =["SN", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const MP = ["MP", 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28];
const MW = ["MW", 21, 16, 12, 12, 13, 11, 11, 11, 9, 7, 7, 6, 6, 5, 6, 4];
const MD = ["MD", 5, 9, 9, 9, 4, 10, 10, 6, 10, 8, 7, 10, 8, 8, 3, 6 ];
const GF = ["GF", 59, 54, 55, 50, 38, 49, 45, 33, 33, 40, 26, 25, 32, 29, 23, 18];
const GA = ["GA", 29, 29, 26, 26, 31, 27, 33, 30, 41, 50, 43, 38, 42, 57, 53, 54];


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
 
  
 

 
 


let teams = ["Teams", "Union Saint Gilloise", "Anderlecht", "Antwerp", "Club Brugge", "Mechelen", "Cercle Brugge",
 "Genk", "Gent", "STVV", "Standard", "Westerlo", "Charleroi", "Oud Hervee Leuven", 
 "RWDM", "Eupen", "Kotrijk"];
//let MP = ["MP", 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
//let MW = ["MW", 29, 27, 26, 23, 22, 21];
//let MD = ["MD", 4, 5, 7, 5, 2, 1];
let ML = ["ML", ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10, ml11, ml12, ml13, ml14, ml15, ml16];

let GD = ["GD", gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10, gd11, gd12, gd13, gd14, gd15, gd16];

let Points = ["Points", pts1, pts2, pts3, pts4, pts5, pts6, pts7, pts8, pts9, pts10, pts11, pts12,
pts13, pts14, pts15, pts16];
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
   const win_ratio_union_st_gilloise = (MW[1] / MP[1] ) * 100;
   const draw_ratio_union_st_gilloise = (MD[1] / MP[1] ) * 100;
   const loss_ratio_union_st_gilloise = (ML[1] / MP[1] ) * 100;


   const win_ratio_anderlecht = (MW[2] / MP[2] ) * 100;
   const draw_ratio_anderlecht = (MD[2] / MP[2] ) * 100;
   const loss_ratio_anderlecht = (ML[2] / MP[2] ) * 100;

   const win_ratio_antwerp = (MW[3] / MP[3] ) * 100;
   const draw_ratio_antwerp = (MD[3] / MP[3] ) * 100;
   const loss_ratio_antwerp = (ML[3] / MP[3] ) * 100;

   const win_ratio_club_brugge = (MW[4] / MP[4] ) * 100;
   const draw_ratio_club_brugge = (MD[4] / MP[4] ) * 100;
   const loss_ratio_Club_brugge = (ML[4] / MP[4] ) * 100;

   const win_ratio_mechelen = (MW[5] / MP[5] ) * 100;
   const draw_ratio_mechelen = (MD[5] / MP[5] ) * 100;
   const loss_ratio_mechelen = (ML[5] / MP[5] ) * 100;

   const win_ratio_cercle_brugge = (MW[6] / MP[6] ) * 100;
   const draw_ratio_cercle_brugge = (MD[6] / MP[6] ) * 100;
   const loss_ratio_cercle_brugge = (ML[6] / MP[6] ) * 100;

   const win_ratio_genk = (MW[7] / MP[7] ) * 100;
   const draw_ratio_genk = (MD[7] / MP[7] ) * 100;
   const loss_ratio_genk = (ML[7] / MP[7] ) * 100;

   const win_ratio_gent = (MW[8] / MP[8] ) * 100;
   const draw_ratio_gent = (MD[8] / MP[8] ) * 100;
   const loss_ratio_gent = (ML[8] / MP[8] ) * 100;

   const win_ratio_stvv = (MW[9] / MP[9] ) * 100;
   const draw_ratio_stvv = (MD[9] / MP[9] ) * 100;
   const loss_ratio_stvv = (ML[9] / MP[9] ) * 100;

   const win_ratio_standard = (MW[10] / MP[10] ) * 100;
   const draw_ratio_standard = (MD[10] / MP[10] ) * 100;
   const loss_ratio_standard = (ML[10] / MP[10] ) * 100;
   

   const win_ratio_westerlo = (MW[11] / MP[11] ) * 100;
   const draw_ratio_westerlo = (MD[11] / MP[11] ) * 100;
   const loss_ratio_westerlo = (ML[11] / MP[11] ) * 100;

   const win_ratio_charleroi = (MW[12] / MP[12] ) * 100;
   const draw_ratio_charleroi = (MD[12] / MP[12] ) * 100;
   const loss_ratio_charleroi = (ML[12] / MP[12] ) * 100;

   const win_ratio_oud_hervee_leuven = (MW[13] / MP[13] ) * 100;
   const draw_ratio_oud_hervee_leuven = (MD[13] / MP[13] ) * 100;
   const loss_ratio_oud_hervee_leuven = (ML[13] / MP[13] ) * 100;

   const win_ratio_rwdm = (MW[14] / MP[14] ) * 100;
   const draw_ratio_rwdm = (MD[14] / MP[14] ) * 100;
   const loss_ratio_rwdm = (ML[14] / MP[14] ) * 100;

   const win_ratio_eupen = (MW[15] / MP[15] ) * 100;
   const draw_ratio_eupen = (MD[15] / MP[15] ) * 100;
   const loss_ratio_eupen = (ML[15] / MP[15] ) * 100;

   const win_ratio_kotrijk = (MW[16] / MP[16] ) * 100;
   const draw_ratio_kotrijk = (MD[16] / MP[16] ) * 100;
   const loss_ratio_kotrijk = (ML[16] / MP[16] ) * 100;


document.getElementById("uni-wr").innerHTML = win_ratio_union_st_gilloise.toFixed(0) + "%";
document.getElementById("uni-dr").innerHTML = draw_ratio_union_st_gilloise.toFixed(0) + "%";
document.getElementById("uni-lr").innerHTML = loss_ratio_union_st_gilloise.toFixed(0) + "%";

document.getElementById("and-wr").innerHTML = win_ratio_anderlecht.toFixed(0) + "%";
document.getElementById("and-dr").innerHTML = draw_ratio_anderlecht.toFixed(0) + "%";
document.getElementById("and-lr").innerHTML = loss_ratio_anderlecht.toFixed(0) + "%";


document.getElementById("ant-wr").innerHTML = win_ratio_antwerp.toFixed(0) + "%";
document.getElementById("ant-dr").innerHTML = draw_ratio_antwerp.toFixed(0) + "%";
document.getElementById("ant-lr").innerHTML = loss_ratio_antwerp.toFixed(0) + "%";

document.getElementById("clu-wr").innerHTML = win_ratio_club_brugge.toFixed(0) + "%";
document.getElementById("clu-dr").innerHTML = draw_ratio_club_brugge.toFixed(0) + "%";
document.getElementById("clu-lr").innerHTML = loss_ratio_Club_brugge.toFixed(0) + "%";

document.getElementById("mec-wr").innerHTML = win_ratio_mechelen.toFixed(0) + "%";
document.getElementById("mec-dr").innerHTML = draw_ratio_mechelen.toFixed(0) + "%";
document.getElementById("mec-lr").innerHTML = loss_ratio_mechelen.toFixed(0) + "%";


document.getElementById("cer-wr").innerHTML = win_ratio_cercle_brugge.toFixed(0) + "%";
document.getElementById("cer-dr").innerHTML = draw_ratio_cercle_brugge.toFixed(0) + "%";
document.getElementById("cer-lr").innerHTML = loss_ratio_cercle_brugge.toFixed(0) + "%";

document.getElementById("gek-wr").innerHTML = win_ratio_genk.toFixed(0) + "%";
document.getElementById("gek-dr").innerHTML = draw_ratio_genk.toFixed(0) + "%";
document.getElementById("gek-lr").innerHTML = loss_ratio_genk.toFixed(0) + "%";

document.getElementById("get-wr").innerHTML = win_ratio_gent.toFixed(0) + "%";
document.getElementById("get-dr").innerHTML = draw_ratio_gent.toFixed(0) + "%";
document.getElementById("get-lr").innerHTML = loss_ratio_gent.toFixed(0) + "%";


document.getElementById("stv-wr").innerHTML = win_ratio_stvv.toFixed(0) + "%";
document.getElementById("stv-dr").innerHTML = draw_ratio_stvv.toFixed(0) + "%";
document.getElementById("stv-lr").innerHTML = loss_ratio_stvv.toFixed(0) + "%";


document.getElementById("sta-wr").innerHTML = win_ratio_standard.toFixed(0) + "%";
document.getElementById("sta-dr").innerHTML = draw_ratio_standard.toFixed(0) + "%";
document.getElementById("sta-lr").innerHTML = loss_ratio_standard.toFixed(0) + "%";

document.getElementById("wes-wr").innerHTML = win_ratio_westerlo.toFixed(0) + "%";
document.getElementById("wes-dr").innerHTML = draw_ratio_westerlo.toFixed(0) + "%";
document.getElementById("wes-lr").innerHTML = loss_ratio_westerlo.toFixed(0) + "%";


document.getElementById("cha-wr").innerHTML = win_ratio_charleroi.toFixed(0) + "%";
document.getElementById("cha-dr").innerHTML = draw_ratio_charleroi.toFixed(0) + "%";
document.getElementById("cha-lr").innerHTML = loss_ratio_charleroi.toFixed(0) + "%";


document.getElementById("oud-wr").innerHTML = win_ratio_oud_hervee_leuven.toFixed(0) + "%";
document.getElementById("oud-dr").innerHTML = draw_ratio_oud_hervee_leuven.toFixed(0) + "%";
document.getElementById("oud-lr").innerHTML = loss_ratio_oud_hervee_leuven.toFixed(0) + "%";

/*document.getElementById("rwd-wr").innerHTML = win_ratio_rwdm.toFixed(0) + "%";
document.getElementById("rwd-dr").innerHTML = draw_ratio_rwdm.toFixed(0) + "%";
document.getElementById("rwd-lr").innerHTML = loss_ratio_rwdm.toFixed(0) + "%";


document.getElementById("eup-wr").innerHTML = win_ratio_eupen.toFixed(0) + "%";
document.getElementById("eup-dr").innerHTML = draw_ratio_eupen.toFixed(0) + "%";
document.getElementById("eup-lr").innerHTML = loss_ratio_eupen.toFixed(0) + "%";
*/

document.getElementById("kot-wr").innerHTML = win_ratio_kotrijk.toFixed(0) + "%";
document.getElementById("kot-dr").innerHTML = draw_ratio_kotrijk.toFixed(0) + "%";
document.getElementById("kot-lr").innerHTML = loss_ratio_kotrijk.toFixed(0) + "%";









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