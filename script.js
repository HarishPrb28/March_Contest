function OpeningCeremony(callback) {
  console.log("Let the games begin");
  setTimeout(() => {
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    callback(score, Race100M);
  }, 1000);
}

function Race100M(score, callback) {
  console.log("Score before Race100M:", score);
  setTimeout(() => {
    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };
    const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
    score[sorted[0][0]] += 50;
    score[sorted[1][0]] += 25;
    console.log(
      `${sorted[0][0]} came first with ${sorted[0][1]} seconds, and gets 50 points`
    );
    console.log(
      `${sorted[1][0]} came second with ${sorted[1][1]} seconds, and gets 25 points`
    );
    console.log("Score after Race100M:", score);
    callback(score, LongJump);
  }, 3000);
}

function LongJump(score, callback) {
  console.log("Score before LongJump:", score);
  setTimeout(() => {
    const colors = ["red", "blue", "green", "yellow"];
    const index = Math.floor(Math.random() * 4);
    const color = colors[index];
    score[color] += 150;
    console.log(`${color} won the Long Jump with 150 points`);
    console.log("Score after LongJump:", score);
    callback(score, HighJump);
  }, 2000);
}

function HighJump(score, callback) {
  console.log("Score before HighJump:", score);
  const color = prompt("What colour secured the highest jump?");
  if (score[color]) {
    score[color] += 100;
    console.log(`${color} gets 100 points for winning the High Jump`);
    console.log("Score after HighJump:", score);
    callback(score, AwardCeremony);
  } else if (color) {
    console.log("Event was cancelled");
    console.log("Score after HighJump:", score);
    callback(score, AwardCeremony);
  }
}

function AwardCeremony(score) {
  console.log("Score at the Award Ceremony:", score);
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  console.log(`${sorted[0][0]} came first with ${sorted[0][1]} points.`);
  console.log(`${sorted[1][0]} came second with ${sorted[1][1]} points.`);
  console.log(`${sorted[2][0]} came third with ${sorted[2][1]} points.`);
}

OpeningCeremony((score, nextCallback) => {
  nextCallback(score, (score, nextCallback) => {
    nextCallback(score, (score, nextCallback) => {
      nextCallback(score, (score, nextCallback) => {
        nextCallback(score);
      });
    });
  });
});
