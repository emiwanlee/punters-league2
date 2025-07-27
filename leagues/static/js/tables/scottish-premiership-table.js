

const SN =["SN", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MP = ["MP", 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38];
const MW = ["MW", 29, 27, 20, 14, 13, 10, 12, 11, 10, 8, 8, 5];
const MD = ["MD", 6, 4, 8, 14, 8, 12, 12, 13, 13, 11, 11, 10];
const GF = ["GF", 95, 87, 54, 46, 46, 49, 48, 52, 56, 29, 38, 29];
const GA = ["GA", 30, 32, 42, 44, 52, 68, 52, 59, 59, 54, 67, 70];


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
 

 


let teams = ["Teams", "Celtic", "Rangers", "Hearts", "Kilmarnork", "St. Mirren", "Dundee",
 "Aberdeen", "Hibernian","Motherwell", "St. Johnstone", "Ross County", "Livingston"];
//let MP = ["MP", 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
//let MW = ["MW", 29, 27, 26, 23, 22, 21];
//let MD = ["MD", 4, 5, 7, 5, 2, 1];
let ML = ["ML", ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10, ml11, ml12]

let GD = ["GD", gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10, gd11, gd12];

let Points = ["Points", pts1, pts2, pts3, pts4, pts5, pts6, pts7, pts8, pts9, pts10, pts11, pts12];
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
   const win_ratio_celtic = (MW[1] / MP[1] ) * 100;
   const draw_ratio_celtic = (MD[1] / MP[1] ) * 100;
   const loss_ratio_celtic = (ML[1] / MP[1] ) * 100;


   const win_ratio_rangers = (MW[2] / MP[2] ) * 100;
   const draw_ratio_rangers = (MD[2] / MP[2] ) * 100;
   const loss_ratio_rangers = (ML[2] / MP[2] ) * 100;

   const win_ratio_hearts = (MW[3] / MP[3] ) * 100;
   const draw_ratio_hearts = (MD[3] / MP[3] ) * 100;
   const loss_ratio_hearts = (ML[3] / MP[3] ) * 100;

   const win_ratio_kilmarnock = (MW[4] / MP[4] ) * 100;
   const draw_ratio_kilmarnock = (MD[4] / MP[4] ) * 100;
   const loss_ratio_kilmarnock = (ML[4] / MP[4] ) * 100;

   const win_ratio_st_mirren = (MW[5] / MP[5] ) * 100;
   const draw_ratio_st_mirren = (MD[5] / MP[5] ) * 100;
   const loss_ratio_st_mirren = (ML[5] / MP[5] ) * 100;

   const win_ratio_dundee = (MW[6] / MP[6] ) * 100;
   const draw_ratio_dundee = (MD[6] / MP[6] ) * 100;
   const loss_ratio_dundee = (ML[6] / MP[6] ) * 100;

   const win_ratio_aberdeen = (MW[7] / MP[7] ) * 100;
   const draw_ratio_aberdeen = (MD[7] / MP[7] ) * 100;
   const loss_ratio_aberdeen = (ML[7] / MP[7] ) * 100;

   const win_ratio_hibernan = (MW[8] / MP[8] ) * 100;
   const draw_ratio_hibernian = (MD[8] / MP[8] ) * 100;
   const loss_ratio_hibernian = (ML[8] / MP[8] ) * 100;

   const win_ratio_motherwell = (MW[9] / MP[9] ) * 100;
   const draw_ratio_motherwell = (MD[9] / MP[9] ) * 100;
   const loss_ratio_motherwell = (ML[9] / MP[9] ) * 100;

   const win_ratio_st_johnsone = (MW[10] / MP[10] ) * 100;
   const draw_ratio_st_johnstone = (MD[10] / MP[10] ) * 100;
   const loss_ratio_st_johnstone = (ML[10] / MP[10] ) * 100;
   

   const win_ratio_ross_county = (MW[11] / MP[11] ) * 100;
   const draw_ratio_ross_county = (MD[11] / MP[11] ) * 100;
   const loss_ratio_ross_county = (ML[11] / MP[11] ) * 100;

   const win_ratio_dundee_united = (MW[12] / MP[12] ) * 100;
   const draw_ratio_dundee_united = (MD[12] / MP[12] ) * 100;
   const loss_ratio_dundee_united = (ML[12] / MP[12] ) * 100;

 

  



document.getElementById("cel-wr").innerHTML = win_ratio_celtic.toFixed(0) + "%";
document.getElementById("cel-dr").innerHTML = draw_ratio_celtic.toFixed(0) + "%";
document.getElementById("cel-lr").innerHTML = loss_ratio_celtic.toFixed(0) + "%";

document.getElementById("ran-wr").innerHTML = win_ratio_rangers.toFixed(0) + "%";
document.getElementById("ran-dr").innerHTML = draw_ratio_rangers.toFixed(0) + "%";
document.getElementById("ran-lr").innerHTML = loss_ratio_rangers.toFixed(0) + "%";

document.getElementById("hea-wr").innerHTML = win_ratio_hearts.toFixed(0) + "%";
document.getElementById("hea-dr").innerHTML = draw_ratio_hearts.toFixed(0) + "%";
document.getElementById("hea-lr").innerHTML = loss_ratio_hearts.toFixed(0) + "%";

document.getElementById("kil-wr").innerHTML = win_ratio_kilmarnock.toFixed(0) + "%";
document.getElementById("kil-dr").innerHTML = draw_ratio_kilmarnock.toFixed(0) + "%";
document.getElementById("kil-lr").innerHTML = loss_ratio_kilmarnock.toFixed(0) + "%";


document.getElementById("stm-wr").innerHTML = win_ratio_st_mirren.toFixed(0) + "%";
document.getElementById("stm-dr").innerHTML = draw_ratio_st_mirren.toFixed(0) + "%";
document.getElementById("stm-lr").innerHTML = loss_ratio_st_mirren.toFixed(0) + "%";


document.getElementById("dun-wr").innerHTML = win_ratio_dundee.toFixed(0) + "%";
document.getElementById("dun-dr").innerHTML = draw_ratio_dundee.toFixed(0) + "%";
document.getElementById("dun-lr").innerHTML = loss_ratio_dundee.toFixed(0) + "%";

document.getElementById("abe-wr").innerHTML = win_ratio_aberdeen.toFixed(0) + "%";
document.getElementById("abe-dr").innerHTML = draw_ratio_aberdeen.toFixed(0) + "%";
document.getElementById("abe-lr").innerHTML = loss_ratio_aberdeen.toFixed(0) + "%";


document.getElementById("hib-wr").innerHTML = win_ratio_hibernan.toFixed(0) + "%";
document.getElementById("hib-dr").innerHTML = draw_ratio_hibernian.toFixed(0) + "%";
document.getElementById("hib-lr").innerHTML = loss_ratio_hibernian.toFixed(0) + "%";


document.getElementById("mot-wr").innerHTML = win_ratio_motherwell.toFixed(0) + "%";
document.getElementById("mot-dr").innerHTML = draw_ratio_motherwell.toFixed(0) + "%";
document.getElementById("mot-lr").innerHTML = loss_ratio_motherwell.toFixed(0) + "%";

document.getElementById("stj-wr").innerHTML = win_ratio_st_johnsone.toFixed(0) + "%";
document.getElementById("stj-dr").innerHTML = draw_ratio_st_johnstone.toFixed(0) + "%";
document.getElementById("stj-lr").innerHTML = loss_ratio_st_johnstone.toFixed(0) + "%";


document.getElementById("ros-wr").innerHTML = win_ratio_ross_county.toFixed(0) + "%";
document.getElementById("ros-dr").innerHTML = draw_ratio_ross_county.toFixed(0) + "%";
document.getElementById("ros-lr").innerHTML = loss_ratio_ross_county.toFixed(0) + "%";

/*
document.getElementById("duu-wr").innerHTML = win_ratio_dundee_united.toFixed(0) + "%";
document.getElementById("duu-dr").innerHTML = draw_ratio_dundee_united.toFixed(0) + "%";
document.getElementById("duu-lr").innerHTML = loss_ratio_dundee_united.toFixed(0) + "%";
*/





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