            let button = document.getElementById("button");
            let input = document.getElementById("input");
            let feedback = document.getElementById("feedback");
            let details = document.getElementById("details");


            button.addEventListener("click", function() {
                let input2 = input.value.replace(/\s/g, "").toLowerCase()
                let albums_songs = {
                    "sleeptodream": "Tidal",
                    "sullengirl": "Tidal",
                    "shadowboxer": "Tidal",
                    "criminal": "Tidal",
                    "slowlikehoney": "Tidal",
                    "thefirsttaste": "Tidal",
                    "neverisapromise": "Tidal",
                    "thechildisgone": "Tidal",
                    "paleseptember": "Tidal",
                    "carrion": "Tidal",

                    "onthebound": "When the Pawn...",
                    "toyourlove": "When the Pawn...",
                    "limp": "When the Pawn...",
                    "loveridden": "When the Pawn...",
                    "paperbag": "When the Pawn...",
                    "amistake": "When the Pawn...",
                    "fastasyoucan": "When the Pawn...",
                    "thewaythingsare": "When the Pawn...",
                    "getgone": "When the Pawn...",
                    "iknow": "When the Pawn...",

                    "extraordinarymachine": "Extraordinary Machine",
                    "gethimback": "Extraordinary Machine",
                    "o'sailor": "Extraordinary Machine",
                    "betterversionofme": "Extraordinary Machine",
                    "tymps": "Extraordinary Machine",
                    "partinggift": "Extraordinary Machine",
                    "window": "Extraordinary Machine",
                    "ohwell": "Extraordinary Machine",
                    "pleasepleaseplease": "Extraordinary Machine",
                    "redredred": "Extraordinary Machine",
                    "notaboutlove": "Extraordinary Machine",
                    "waltz": "Extraordinary Machine",

                    "everysinglenight": "The Idler Wheel...",
                    "daredevil": "The Idler Wheel...",
                    "valentine": "The Idler Wheel...",
                    "jonathan": "The Idler Wheel...",
                    "leftalone": "The Idler Wheel...",
                    "werewolf": "The Idler Wheel...",
                    "periphery": "The Idler Wheel...",
                    "regret": "The Idler Wheel...",
                    "anythingwewant": "The Idler Wheel...",
                    "hotknife": "The Idler Wheel...",
                    "largo": "The Idler Wheel...",

                    "iwantyoutoloveme": "Fetch the Bolt Cutters",
                    "shameika": "Fetch the Bolt Cutters",
                    "fetchtheboltcutters": "Fetch the Bolt Cutters",
                    "underthetable": "Fetch the Bolt Cutters",
                    "relay": "Fetch the Bolt Cutters",
                    "rackofhis": "Fetch the Bolt Cutters",
                    "newspaper": "Fetch the Bolt Cutters",
                    "ladies": "Fetch the Bolt Cutters",
                    "heavyballoon": "Fetch the Bolt Cutters",
                    "cosmonauts": "Fetch the Bolt Cutters",
                    "forher": "Fetch the Bolt Cutters",
                    "drumset": "Fetch the Bolt Cutters",
                    "onigo": "Fetch the Bolt Cutters",
                }

                let singles = {
                    "lovemore": "Single",
                    "acrosstheuniverse": "Single",
                }

                if (input2 in albums_songs)
                {
                    feedback.innerHTML = `Album: ${albums_songs[song]}`;
                    let album_name = albums_songs[input2] + "_details.html";
                    //ChatGPT helped with using setAttribute and syntax for this line so that the link to the new page can be set to whatever album is
                    document.getElementById("details").setAttribute("href", album_name)
                    document.getElementById("details").style.display = "block";
                }
                else if (input2 in singles)
                {
                    feedback.innerHTML = "Your input was a single, please input a song from a full album."
                }
                else if (!(input2 in albums_songs))
                    {
                    let found = false;
                    for (let song in albums_songs) {
                        let tally = 0;
                        if (input2.length === song.length) {
                            for (let i = 0; i < song.length; i++) {
                                if (input2[i] === song[i]) {
                                    tally = tally + 1;
                                } else {
                                    continue;
                                }
                            }
                            if (tally >= input2.length - 2) {
                                //ChatGPT helped with proper syntax and initialization for tally and found
                                tally = 0;
                                found = true;
                                //ChatGPT helped with syntax for changing feedback to the album title
                                feedback.innerHTML = `Album: ${albums_songs[song]}`;
                                let album_name = albums_songs[song] + "_details.html";
                                document.getElementById("details").setAttribute("href", album_name)
                                document.getElementById("details").style.display = "block";

                                continue;
                            }
                            else {
                                continue;
                            }

                        }
                        else {
                            continue;
                        }
                    }
                    if (found === false) {
                        feedback.innerHTML = "Your search was not a Fiona Apple song, please try again."
                    }


                }
            })
