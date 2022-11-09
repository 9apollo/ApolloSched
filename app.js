// Error catcher.
let ERR1 = "UNEXPECTED_ERROR";

// Initialize variable p for paragraph.
let p = "p";

// Get the dates.
let getMonth = hydra.getClock("mn");
let getDay = hydra.getClock("d");
let getHour = hydra.getClock("h");
let getMinute = hydra.getClock("m");
let getSecond = hydra.getClock("s");
let totalSeconds = hydra.getClock("ts");

// Get ID in every text elements.
let month = hydra.bring(p, "month");
let day = hydra.bring(p, "day");
let hour = hydra.bring(p, "hour");
let minute = hydra.bring(p, "minute");
let meridian = hydra.bring(p, "meridian");
let greeting = hydra.bring(p, "greeting");
let username = hydra.bring(p, "username");
let narrator = hydra.bring(p, "narrator");
let subject = hydra.bring(p, "subject");
let instructor = hydra.bring(p, "instructor");
let locator = hydra.bring(p, "locator");
let locate = hydra.bring(p, "location");
let queue_state = hydra.bring(p, "queue-state");
let queue = hydra.bring(p, "queue");
let username_text = hydra.bring("input", "user-name");
let ry = hydra.bringTag(p);
let yr = ry[6].childNodes[0].length;

// Create and array for all text elements
let meridians = ["AM", "PM"];
let greetings_initial = ["Hi", "Hello"];
let greetings = ["good morning", "good day", "good afternoon", "good evening"];
let subjects = ["GEC 3", "P.E.", "ITCOM 1", "MATH 3", "CPROG 1", "GEC 4", "VACANT", "GEE 9"];
let prefix = ["Sir ", "Mr. ", "Ms. ", "Mrs. "];

// Write them to the text elements.

// For the month
hydra.clock(month, "mn", 0);

// For the day
hydra.clock(day, "d", 0);

// For the hour
hydra.clock(hour, "h", 0);

// For the minute
hydra.clock(minute, "m", 0);

// If the clock value equals to 0 to 11 then set to AM otherwise PM
getHour >= 0 && getHour <= 11 ? meridian.innerHTML = meridians[0]: meridian.innerHTML = meridians[1];

// Create all greetings depends on the time of the day
hydra.update(() => {
  if (getHour >= 0 && getHour <= 11) {
    greeting.innerHTML = "Hello, " + greetings[0];
  } else if (getHour == 12) {
    greeting.innerHTML = "Have a " + greetings[1];
  } else if (getHour >= 13 && getHour <= 17) {
    greeting.innerHTML = "Hi, " + greetings[2];
  } else {
    greeting.innerHTML = "Hi, " + greetings[3];
  }
});

// Get the input of the username entered by an user otherwise we set to default to USER
let get_username = localStorage.username;
let get_fontSize = localStorage.fontSize;

get_username == undefined || get_username == "" ? username.innerHTML = "User": username.innerHTML = get_username;
username.style.fontSize = get_fontSize;

narrator.innerHTML = "Today's class is";

// Set the function if the day is M-W-F T-Th or Weekend.
let setWeekEnd = () => {
  subject.innerHTML = "NO CLASS";
  instructor.innerHTML = "N/A";
  locate.innerHTML = "N/A";
  queue.innerHTML = "N/A";
};

let setMWF = () => {
  let subjects = ["ARRIVAL", "HGP", "ENGLISH", "HEALTH BREAK", "MAPEH", "AP", "LUNCH BREAK", "SCIENCE(1st. SEM)", "SCIENCE(2nd. SEM)", "MATH", "CGI"];
  let instructors = ["N/A", "E. GARCILLAN", "C. SIRINGAN", "R. TURINGAN", "V. MACABABBAD", "GENEROSE CONDE", "L. LIGUTAN", "N/A"];

  // 6:45 - 7:00
  if (totalSeconds >= 24300 && totalSeconds <= 25200) {
    subject.textContent = subjects[0];
    instructor.textContent = instructors[0];
    locate.textContent = "?";
    queue.textContent = subjects[1];
  }

  // 7:00 - 8:00
  else if (totalSeconds >= 25200 && totalSeconds <= 28800) {
    subject.textContent = subjects[1];
    instructor.textContent = instructors[1];
    locate.textContent = "?";
    queue.textContent = subjects[2];
  }

  // 8:00 - 9:20
  else if (totalSeconds >= 28800 && totalSeconds <= 33600) {
    subject.textContent = subjects[2];
    instructor.textContent = instructors[2];
    locate.textContent = "?";
    queue.textContent = subjects[3];
  }

  // 9:20 - 9:40
  else if (totalSeconds >= 33600 && totalSeconds <= 34800) {
    subject.textCotent = subjects[3];
    instructor.textContent = instructors[3];
    locate.textContent = "?";
    queue.textContent = subjects[4];
  }

  // 9:40 - 11:00
  else if (totalSeconds >= 34800 && totalSeconds <= 39600) {
    subject.textContent = subjects[4];
    instructor.textContent = instructors[4];
    locate.textContent = "?";
    queue.textContent = subjects[5];
  }
  
  // 11:00 - 12:00
  else if(totalSeconds >= 39600 && totalSeconds <= 43200) {
    subject.textContent = subjects[5];
    instructor.textContent = instructors[5];
    locate.textContent = "?";
    queue.textContent = subjects[6];
  }
  
  // 12:00 - 1:00
  else if(totalSeconds >= 43200 && totalSeconds <= 46800) {
    subject.textContent = subjects[6];
    instructor.textContent = instructors[6];
    locate.textContent = "?";
    queue.textContent = subjects[7];
  }
  
  // 1:00 - 2:20
  else if(totalSeconds >= 46800 && totalSeconds <= 51600) {
    subject.textContent = subjects[7];
    instructor.textContent = instructors[7];
    locate.textContent = "?";
    queue.textContent = subjects[9];
  }
  
  // 2:20 - 3:40
  else if(totalSeconds >= 51600 && totalSeconds <= 56400) {
    subject.textContent = subjects[9];
    instructor.textContent = instructors[7];
    locate.textContent = "?";
    queue.textContent = "VACANT";
  }
  
  // 3:40 - 4:00
  else if(totalSeconds >= 56400 && totalSeconds <= 57600) {
    subject.textContent = "VACANT";
    instructor.textContent = "N/A";
    locate.textContent = "N/A";
    queue.textContent = subjects[10];
  }
  
  // 4:00 - 4:30
  else if(totalSeconds >= 57600 && totalSeconds <= 59400) {
    subject.textContent = subjects[10];
    instructor.textContent = instructors[10];
    locate.textContent = "N/A";
    queue.textContent = "NO CLASS"
  }
  
  else {
    subject.textContent = "NO CLASS";
    instructor.textContent = "NO CLASS";
    locate.textContent = "N/A";
    queue.textContent = "N/A"
  }
};

let setTTh = () => {
  let subjects = ["ARRIVAL", "TLE-ICT", "HEALTH BREAK", "FILIPINO", "ENHANCMENT ACT.", "LUNCH BREAK"];
  let instructors = ["N/A", "?", "N/A", "G. LUMABAS", "N/A", "N/A"];
  
  // 6:45 - 7:00
  if(totalSeconds >= 24300 && totalSeconds <= 25200) {
    subject.textContent = subjects[0];
    instructor.textContent = instructors[0];
    locate.textContent = "?";
    queue.textContent = subjects[1];
  }
  
  // 7:00 - 9:00
  else if(totalSeconds >= 25200 && totalSeconds <= 32400) {
    subject.textContent = subjects[1];
    instructor.textContent = instructors[1];
    locate.textContent = "?";
    queue.textContent = subjects[2];
  }
  
  // 9:00 - 9:20
  else if(totalSeconds >= 32400 && totalSeconds <= 33600) {
    subject.textContent = subject[2];
    instructor.textContent = instructors[2];
    locate.textContent = "?";
    queue.textContent = subjects[3];
  }
  
  // 9:20 - 11:20
  else if(totalSeconds >= 33600 && totalSeconds <= 40800) {
    subject.textContent = subjects[3];
    instructor.textContent = instructors[3];
    locate.textContent = "?";
    queue.textContent = subjects[4];
  }
  
  // 11:20 - 12:00
  else if(totalSeconds >= 40800 && totalSeconds <= 43200) {
    subject.textContent = subjects[4];
    instructor.textContent = instructors[4];
    locate.textContent = "?";
    queue.textContent = subjects[5];
  }
  
  // 12:00
  else if(totalSeconds == 43200)
    subject.textContent = subjects[5];
    instructors.textContent = instructors[5];
    locate.textContent = "N/A";
    queue.textContent = "NO CLASS";
  }
  
  else {
    subject.textContent = "NO CLASS";
    instructors.textContent = "NO CLASS";
    locate.textContent = "NO CLASS";
    queue.textContent = "NO CLASS";
  }
};

hydra.update(() => {
  // We used Odd or Even system to to get and exact value of the day with the same schedule
  getDay == 0 || getDay == 6 ? setWeekEnd(): getDay % 2 != 0 ? setMWF(): setTTh();
});

locator.innerHTML = "AT";

queue_state.innerHTML = "NEXT";
