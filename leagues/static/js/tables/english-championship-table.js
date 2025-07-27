

const SN =["SN", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const MP = ["MP", 41, 42, 40, 41, 42, 41, 41, 41, 40, 41, 41, 42, 41, 41, 42, 42, 41, 41, 41, 42, 42, 42, 41, 41];
const MW = ["MW", 28, 26, 26, 23, 19, 20, 17, 18, 18, 17, 17, 15, 15, 12, 12, 12, 12, 12, 11, 11, 9, 12, 11, 4];
const MD = ["MD", 4, 9, 9, 9, 12, 8, 12, 9, 7, 10, 5, 9, 8, 15, 11, 11, 11, 10, 10, 12, 16, 7, 9, 11 ];
const GF = ["GF", 79, 76, 84, 78, 64, 75, 66, 56, 58, 57, 46, 44, 51, 57, 49, 40, 39, 56, 40, 57, 46, 35, 45, 32];
const GA = ["GA", 37, 33, 52, 52, 41, 60, 49, 56, 53, 52, 57, 45, 50, 55, 62, 54, 54, 66, 56, 66, 69, 66, 63, 82];


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
 
 let gd21 = GF[21] - GA[21];
 console.log(gd21);
 
 let gd22 = GF[22] - GA[22];
 console.log(gd22);
 
 let gd23 = GF[23] - GA[23];
 console.log(gd23);
 
 let gd24 = GF[24] - GA[24];
 console.log(gd24);
 
 
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
	 
	 let pts21 = (MW[21] * 3) + (MD[21] * 1);
	 
	 let pts22 = (MW[22] * 3) + (MD[22] * 1);
	 
	 let pts23 = (MW[23] * 3) + (MD[23] * 1);
	 
	 let pts24 = (MW[24] * 3) + (MD[24] * 1);

 

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
 
 const ml21 = MP[21] - (MW[21] + MD[21]); 
 console.log(ml21);
 
 const ml22 = MP[22] - (MW[22] + MD[22]); 
 console.log(ml22);
 
 const ml23 = MP[23] - (MW[23] + MD[23]); 
 console.log(ml23);
 
 const ml24 = MP[24] - (MW[24] + MD[24]); 
 console.log(ml24);
 
 


let teams = ["Teams", "Leicester", "Leeds", "Ipswich", "Southampton", "West Brom", "Norwich",
 "Coventry", "Preston", "Middlesbrough", "Hull", "Cardiff", "Bristol", "Sunderland", 
 "Watford", "Swansea", "QPR", "Milwall", "Blackburn", "Stoke", "Plymouth",
 "Huddersfield", "Sheffield Wednesday", "Birmingham", "Rotherham"];
//let MP = ["MP", 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
//let MW = ["MW", 29, 27, 26, 23, 22, 21];
//let MD = ["MD", 4, 5, 7, 5, 2, 1];
let ML = ["ML", ml1, ml2, ml3, ml4, ml5, ml6, ml7, ml8, ml9, ml10, ml11, ml12, ml13, ml14, ml15, ml16,
ml17, ml18, ml19, ml20, ml21, ml22, ml23, ml24];

let GD = ["GD", gd1, gd2, gd3, gd4, gd5, gd6, gd7, gd8, gd9, gd10, gd11, gd12, gd13, gd14, gd15, gd16, 
gd17, gd18, gd19, gd20, gd21, gd22, gd23, gd24];

let Points = ["Points", pts1, pts2, pts3, pts4, pts5, pts6, pts7, pts8, pts9, pts10, pts11, pts12,
pts13, pts14, pts15, pts16, pts17, pts18, pts19, pts20, pts21, pts22, pts23, pts24];
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


   const win_ratio_leicester = (MW[2] / MP[2] ) * 100;
   const draw_ratio_leicester = (MD[2] / MP[2] ) * 100;
   const loss_ratio_leicester = (ML[2] / MP[2] ) * 100;


   const win_ratio_ipswich = (MW[3] / MP[3] ) * 100;
   const draw_ratio_ipswich = (MD[3] / MP[3] ) * 100;
   const loss_ratio_ipswich = (ML[3] / MP[3] ) * 100;

   const win_ratio_southampton = (MW[4] / MP[4] ) * 100;
   const draw_ratio_southampton = (MD[4] / MP[4] ) * 100;
   const loss_ratio_southapton = (ML[4] / MP[4] ) * 100;

   const win_ratio_leeds = (MW[1] / MP[1] ) * 100;
   const draw_ratio_leeds = (MD[1] / MP[1] ) * 100;
   const loss_ratio_leeds = (ML[1] / MP[1] ) * 100;

   const win_ratio_westbrom = (MW[5] / MP[5] ) * 100;
   const draw_ratio_westbrom = (MD[5] / MP[5] ) * 100;
   const loss_ratio_westbrom = (ML[5] / MP[5] ) * 100;

   const win_ratio_sunderland = (MW[12] / MP[12] ) * 100;
   const draw_ratio_sunderland = (MD[12] / MP[12] ) * 100;
   const loss_ratio_sunderland = (ML[12] / MP[12] ) * 100;

   const win_ratio_hull = (MW[7] / MP[7] ) * 100;
   const draw_ratio_hull = (MD[7] / MP[7] ) * 100;
   const loss_ratio_hull = (ML[7] / MP[7] ) * 100;

   const win_ratio_coventry = (MW[8] / MP[8] ) * 100;
   const draw_ratio_coventry = (MD[8] / MP[8] ) * 100;
   const loss_ratio_coventry = (ML[8] / MP[8] ) * 100;

   const win_ratio_cardiff = (MW[11] / MP[11] ) * 100;
   const draw_ratio_cardiff = (MD[11] / MP[11] ) * 100;
   const loss_ratio_cardiff = (ML[11] / MP[11] ) * 100;

   const win_ratio_watford = (MW[13] / MP[13] ) * 100;
   const draw_ratio_watford = (MD[13] / MP[13] ) * 100;
   const loss_ratio_watford = (ML[13] / MP[13] ) * 100;
   

   const win_ratio_bristol = (MW[14] / MP[14] ) * 100;
   const draw_ratio_bristol = (MD[14] / MP[14] ) * 100;
   const loss_ratio_bristol = (ML[14] / MP[14] ) * 100;

   const win_ratio_middlesbrough = (MW[10] / MP[10] ) * 100;
   const draw_ratio_middlesbrough = (MD[10] / MP[10] ) * 100;
   const loss_ratio_middlesbrough = (ML[10] / MP[10] ) * 100;

   const win_ratio_norwich = (MW[6] / MP[6] ) * 100;
   const draw_ratio_norwich = (MD[6] / MP[6] ) * 100;
   const loss_ratio_norwich = (ML[6] / MP[6] ) * 100;

   const win_ratio_preston = (MW[9] / MP[9] ) * 100;
   const draw_ratio_preston = (MD[9] / MP[9] ) * 100;
   const loss_ratio_preston = (ML[9] / MP[9] ) * 100;

   const win_ratio_millwall = (MW[16] / MP[16] ) * 100;
   const draw_ratio_millwall = (MD[16] / MP[16] ) * 100;
   const loss_ratio_milwall = (ML[16] / MP[16] ) * 100;

   const win_ratio_swansea = (MW[15] / MP[15] ) * 100;
   const draw_ratio_swansea = (MD[15] / MP[15] ) * 100;
   const loss_ratio_swansea = (ML[15] / MP[15] ) * 100;

   const win_ratio_blackburn = (MW[17] / MP[17] ) * 100;
   const draw_ratio_blackburn = (MD[17] / MP[17] ) * 100;
   const loss_ratio_blackburn = (ML[17] / MP[17] ) * 100;

   const win_ratio_plymouth = (MW[18] / MP[18] ) * 100;
   const draw_ratio_plymouth = (MD[18] / MP[18] ) * 100;
   const loss_ratio_plymouth = (ML[18] / MP[18] ) * 100;

   const win_ratio_stoke = (MW[19] / MP[19] ) * 100;
   const draw_ratio_stoke = (MD[19] / MP[14] ) * 100;
   const loss_ratio_stoke = (ML[19] / MP[19] ) * 100;


   const win_ratio_birmingham = (MW[21] / MP[21] ) * 100;
   const draw_ratio_birmingham = (MD[21] / MP[21] ) * 100;
   const loss_ratio_birmingham = (ML[21] / MP[21] ) * 100;



   const win_ratio_huddersfield = (MW[22] / MP[22] ) * 100;
   const draw_ratio_huddersfield = (MD[22] / MP[22] ) * 100;
   const loss_ratio_huddersfield = (ML[22] / MP[22] ) * 100;


   const win_ratio_sheffield = (MW[23] / MP[23] ) * 100;
   const draw_ratio_sheffield = (MD[23] / MP[23] ) * 100;
   const loss_ratio_sheffield = (ML[23] / MP[23] ) * 100;


   const win_ratio_qpr = (MW[20] / MP[20] ) * 100;
   const draw_ratio_qpr = (MD[20] / MP[20] ) * 100;
   const loss_ratio_qpr = (ML[20] / MP[20] ) * 100;


   const win_ratio_rotherham = (MW[24] / MP[24] ) * 100;
   const draw_ratio_rotherham = (MD[24] / MP[24] ) * 100;
   const loss_ratio_rotherham = (ML[24] / MP[24] ) * 100;
/*
document.getElementById("lei-wr").innerHTML = win_ratio_leicester.toFixed(0) + "%";
document.getElementById("lei-dr").innerHTML = draw_ratio_leicester.toFixed(0) + "%";
document.getElementById("lei-lr").innerHTML = loss_ratio_leicester.toFixed(0) + "%";

document.getElementById("ips-wr").innerHTML = win_ratio_ipswich.toFixed(0) + "%";
document.getElementById("ips-dr").innerHTML = draw_ratio_ipswich.toFixed(0) + "%";
document.getElementById("ips-lr").innerHTML = loss_ratio_ipswich.toFixed(0) + "%";


document.getElementById("sou-wr").innerHTML = win_ratio_southampton.toFixed(0) + "%";
document.getElementById("sou-dr").innerHTML = draw_ratio_southampton.toFixed(0) + "%";
document.getElementById("sou-lr").innerHTML = loss_ratio_southapton.toFixed(0) + "%";
*/
document.getElementById("lee-wr").innerHTML = win_ratio_leeds.toFixed(0) + "%";
document.getElementById("lee-dr").innerHTML = draw_ratio_leeds.toFixed(0) + "%";
document.getElementById("lee-lr").innerHTML = loss_ratio_leeds.toFixed(0) + "%";

document.getElementById("wes-wr").innerHTML = win_ratio_westbrom.toFixed(0) + "%";
document.getElementById("wes-dr").innerHTML = draw_ratio_westbrom.toFixed(0) + "%";
document.getElementById("wes-lr").innerHTML = loss_ratio_westbrom.toFixed(0) + "%";

document.getElementById("sun-wr").innerHTML = win_ratio_sunderland.toFixed(0) + "%";
document.getElementById("sun-dr").innerHTML = draw_ratio_sunderland.toFixed(0) + "%";
document.getElementById("sun-lr").innerHTML = loss_ratio_sunderland.toFixed(0) + "%";

document.getElementById("hul-wr").innerHTML = win_ratio_hull.toFixed(0) + "%";
document.getElementById("hul-dr").innerHTML = draw_ratio_hull.toFixed(0) + "%";
document.getElementById("hul-lr").innerHTML = loss_ratio_hull.toFixed(0) + "%";



document.getElementById("cov-wr").innerHTML = win_ratio_coventry.toFixed(0) + "%";
document.getElementById("cov-dr").innerHTML = draw_ratio_coventry.toFixed(0) + "%";
document.getElementById("cov-lr").innerHTML = loss_ratio_coventry.toFixed(0) + "%";


document.getElementById("car-wr").innerHTML = win_ratio_cardiff.toFixed(0) + "%";
document.getElementById("car-dr").innerHTML = draw_ratio_cardiff.toFixed(0) + "%";
document.getElementById("car-lr").innerHTML = loss_ratio_cardiff.toFixed(0) + "%";


document.getElementById("wat-wr").innerHTML = win_ratio_watford.toFixed(0) + "%";
document.getElementById("wat-dr").innerHTML = draw_ratio_watford.toFixed(0) + "%";
document.getElementById("wat-lr").innerHTML = loss_ratio_watford.toFixed(0) + "%";

document.getElementById("bri-wr").innerHTML = win_ratio_bristol.toFixed(0) + "%";
document.getElementById("bri-dr").innerHTML = draw_ratio_bristol.toFixed(0) + "%";
document.getElementById("bri-lr").innerHTML = loss_ratio_bristol.toFixed(0) + "%";


document.getElementById("mid-wr").innerHTML = win_ratio_middlesbrough.toFixed(0) + "%";
document.getElementById("mid-dr").innerHTML = draw_ratio_middlesbrough.toFixed(0) + "%";
document.getElementById("mid-lr").innerHTML = loss_ratio_middlesbrough.toFixed(0) + "%";


document.getElementById("nor-wr").innerHTML = win_ratio_norwich.toFixed(0) + "%";
document.getElementById("nor-dr").innerHTML = draw_ratio_norwich.toFixed(0) + "%";
document.getElementById("nor-lr").innerHTML = loss_ratio_norwich.toFixed(0) + "%";

document.getElementById("pre-wr").innerHTML = win_ratio_preston.toFixed(0) + "%";
document.getElementById("pre-dr").innerHTML = draw_ratio_preston.toFixed(0) + "%";
document.getElementById("pre-lr").innerHTML = loss_ratio_preston.toFixed(0) + "%";


document.getElementById("mil-wr").innerHTML = win_ratio_millwall.toFixed(0) + "%";
document.getElementById("mil-dr").innerHTML = draw_ratio_millwall.toFixed(0) + "%";
document.getElementById("mil-lr").innerHTML = loss_ratio_milwall.toFixed(0) + "%";


document.getElementById("swa-wr").innerHTML = win_ratio_swansea.toFixed(0) + "%";
document.getElementById("swa-dr").innerHTML = draw_ratio_swansea.toFixed(0) + "%";
document.getElementById("swa-lr").innerHTML = loss_ratio_swansea.toFixed(0) + "%";


document.getElementById("bla-wr").innerHTML = win_ratio_blackburn.toFixed(0) + "%";
document.getElementById("bla-dr").innerHTML = draw_ratio_blackburn.toFixed(0) + "%";
document.getElementById("bla-lr").innerHTML = loss_ratio_blackburn.toFixed(0) + "%";

document.getElementById("ply-wr").innerHTML = win_ratio_plymouth.toFixed(0) + "%";
document.getElementById("ply-dr").innerHTML = draw_ratio_plymouth.toFixed(0) + "%";
document.getElementById("ply-lr").innerHTML = loss_ratio_plymouth.toFixed(0) + "%";


document.getElementById("sto-wr").innerHTML = win_ratio_stoke.toFixed(0) + "%";
document.getElementById("sto-dr").innerHTML = draw_ratio_stoke.toFixed(0) + "%";
document.getElementById("sto-lr").innerHTML = loss_ratio_stoke.toFixed(0) + "%";

/*
document.getElementById("bir-wr").innerHTML = win_ratio_birmingham.toFixed(0) + "%";
document.getElementById("bir-dr").innerHTML = draw_ratio_birmingham.toFixed(0) + "%";
document.getElementById("bir-lr").innerHTML = loss_ratio_birmingham.toFixed(0) + "%";
*/

document.getElementById("hud-wr").innerHTML = win_ratio_huddersfield.toFixed(0) + "%";
document.getElementById("hud-dr").innerHTML = draw_ratio_huddersfield.toFixed(0) + "%";
document.getElementById("hud-lr").innerHTML = loss_ratio_huddersfield.toFixed(0) + "%";


document.getElementById("she-wr").innerHTML = win_ratio_sheffield.toFixed(0) + "%";
document.getElementById("she-dr").innerHTML = draw_ratio_sheffield.toFixed(0) + "%";
document.getElementById("she-lr").innerHTML = loss_ratio_sheffield.toFixed(0) + "%";


document.getElementById("qpr-wr").innerHTML = win_ratio_qpr.toFixed(0) + "%";
document.getElementById("qpr-dr").innerHTML = draw_ratio_qpr.toFixed(0) + "%";
document.getElementById("qpr-lr").innerHTML = loss_ratio_qpr.toFixed(0) + "%";


/*
document.getElementById("rot-wr").innerHTML = win_ratio_rotherham.toFixed(0) + "%";
document.getElementById("rot-dr").innerHTML = draw_ratio_rotherham.toFixed(0) + "%";
document.getElementById("rot-lr").innerHTML = loss_ratio_rotherham.toFixed(0) + "%";
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