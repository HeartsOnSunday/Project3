function generateCharacter() {
  
  var cpuChoice = 99;
  
  var charname = [
    "Allister Thorne", 
    "Arya", 
    "Robert Baratheon", 
    "Branden Stark", 
    "Brienne", 
    "Bronn", 
    "Catelyn Stark",
    "Cersei", 
    "Daario Naharis", 
    "Daenarys", 
    "Davos",
    "Gendry", 
    "Gregor Clegane - Mountain", 
    "Hodor", 
    "Jamie Lannister", 
    "Jaqen H'ghar", 
    "Joffrey", 
    "Jon",
    "Jorah", 
    "Drogo",
    "LittleFinger",
    "Mance Rader", 
    "Margarie", 
    "Doran Martell", 
    "Melissandra", 
    "Missandei",
    "Jeor Mormont", 
    "Ned Stark", 
    "Oberyn Martel", 
    "Olenna", 
    "Osha", 
    "Podrick", 
    "Pycell", 
    "Qyburn", 
    "Ramsay", 
    "Robb Stark", 
    "Roose Bolton", 
    "Ros", 
    "Samwell", 
    "Sandor Clegane - The Hound",
    "Sansa", 
    "Shae", 
    "Stannis",
    "The High Sparrow", 
    "Theon", 
    "Tommen Barathon", 
    "Tormund",
    "Tyrion", 
    "Tywin", 
    "Viserys", 
    "Vrays", 
    "Mirri Maz the Duur Witch", 
    "Ygritt"
    ]; 
  var charTitle = [
    "Acting Lord Commander of the Night's Watch", "Faceless Men", "King of the 7 Kingdoms", "The Three Eyed Raven", "Baratheon/Stark", "Sellsword", "Stark", "Baratheon", "Sellsword", "Mother of Dragons", "Baratheon/Stark", "Baratheon", "Lannister", "Stark", "Lord Commander of the Kingsguard", "Faceless Men", "King of the Seven Kingdoms", "Night's Watch", "Targaryen", "Dothraki khalasar", "Independent", "King Beyond the wall", "Lannister", "Dornish", "Lord of the Light", "Targaryen", "Lord Commander of the Night's Watch", "Hand to the King", "Dornish", "Lady of Highgarden", "Wildling", "Lannister", "Lannister", "Lannister", "Bolton", "King in the North", "Warden of the North", "Prostitute", "Night's Watch", "Lannister/Brotherhood with out Banners", "Lannister/Bolton", "Lannister", "King of the Andalls and the First Men", "High Septon", "Stark", "Lannister", "Wildling", "Hand of the Queen", "Hand of the King", "Advisor to the King", "Lannister/Targaryen", "Gypsy Tribe", "Wildling"];
  var randomize = Math.floor(Math.random() * charname.length);
  var  character = charname[randomize];
  var title = charTitle[randomize];
  console.log(character);
  console.log(title);

  

// var example = [
//     {
//       name: "bob",
//       title: "burger master"
//     }
  
//   ]
  
  //var picsrc = ["LG.jpg","NG.jpg","CG.jpg","LN.jpg","TN.jpg","CN.jpg","LE.jpg","NE.jpg","CE.jpg"];
  
  //var alignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

  //var stats = ["Honorable and Humane", "Practical and Humane", "Independent and Humane", "Honorable and Realistic", "Practical and Realistic", "Independent and Realistic", "Honorable and Determined", "Practical and Determined", "Independent and Deterined"];

  
  //var house = ["House Stark", "House Stark", "House Tarly", "House Stark", "House Stark", "No House", "House Lannister", "House Baelish", "House Baratheon"];
  
  //   if (randomize > 0 && randomize <= 11) {
  // cpuChoice = "0";}
  // else if(randomize >=12 && randomize <= 22) {cpuChoice = "1";}
  // else if(randomize >=23 && randomize < 33) {cpuChoice = "2";}
  // else if(randomize >=34 && randomize < 44) {cpuChoice = "3";}
  // else if(randomize >=45 && randomize < 55) {cpuChoice = "4";}
  // else if(randomize >=56 && randomize < 66) {cpuChoice = "5";}
  // else if(randomize >=67 && randomize < 77) {cpuChoice = "6";}
  // else if(randomize >=78 && randomize < 88) {cpuChoice = "7";}
  // else {cpuChoice = "8";}
  
  document.getElementById("character").innerHTML = ""+charname[randomize];
  document.getElementById("title").innerHTML = ""+charTitle[randomize];
  //document.getElementById("test").innerHTML = ""+charname[randomize];
  // console.log(charname[cpuChoice]);
  // console.log(charTitle[cpuChoice]);
  // console.log(randomize); 
  // console.log(character);
// !!!!!!!!! console.log(character);
  
  // for (var i = 0; i < charname.length; i++) {
  //   console.log("start");
  //   //document.getElementById("test").innerHTML = ""+charname[i];
  //   console.log("stop");
  // }
}
  
function tweetIt() {
  var gotCharacter = document.getElementById("character").innerText;
  var gotTitle = document.getElementById("title").innerText;
  var tweetUrl = 'https://twitter.com/share?text=' + "My results from the Game of Thrones Character Generator: " + 
    encodeURIComponent(gotCharacter) + ": " +
    encodeURIComponent(gotTitle)
    '.' + "Get your character here -->";
    
  window.open(tweetUrl);
}
  
  //document.getElementById("charpic").innerHTML = "<img src='"+picsrc[cpuChoice]+"'>";
  
  
  //document.getElementById("alignment").innerHTML = alignment[cpuChoice];


//document.getElementById("stats").innerHTML = ""+stats[cpuChoice];

// document.getElementById("house").innerHTML = ""+house[cpuChoice];
  

