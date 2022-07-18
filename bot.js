const Twit = require("twit");

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
};

const Twitter = new Twit(config);

function retweet() {
  Twitter.get(
    "search/tweets",
    {
      q: "#schoolofcode", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // if there no errors
      if (!err && data.statuses[0]) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted #SchoolOfCode!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log(
          "Something went wrong while SEARCHING for #schoolofcode..."
        );
      }
    }
  );
}

function retweetSOC() {
  Twitter.get(
    "search/tweets",
    {
      q: "from:@theSchoolOfCode", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // if there no errors
      if (!err && data.statuses[0]) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted School Of Code!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log(
          "Something went wrong while SEARCHING for @theSchoolOfCode..."
        );
      }
    }
  );
}

function variationRetweet() {
  Twitter.get(
    "search/tweets",
    {
      q: "#SOCBootcamp", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // console.log(data);
      // if there no errors
      if (!err && data.statuses[0].id_str) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted #SOCBootcamp!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log("Something went wrong while SEARCHING #SOCBootcamp...");
      }
    }
  );
}

function demoDayRetweet() {
  Twitter.get(
    "search/tweets",
    {
      q: "#SOCDemoDay", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // console.log(data);
      // if there no errors
      if (!err && data.statuses[0].id_str) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted #SOCDemoDay!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log("Something went wrong while SEARCHING #SOCDemoDay...");
      }
    }
  );
}

// function hello() {
//   Twitter.post("statuses/update", { status: "hello world!" }, function (
//     err,
//     data,
//     response
//   ) {
//     console.log(data);
//   });
// }

retweet();
setInterval(retweet, 3600000);

retweetSOC();
setInterval(retweetSOC, 3600000);

variationRetweet();
setInterval(variationRetweet, 3600000);

// demoDayRetweet();
// setInterval(demoDayRetweet, 60000);

// hello();
