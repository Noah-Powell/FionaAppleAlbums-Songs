let songs = {
            "Sleep to Dream": "Dissonant",
            "Sullen Girl": "Melodic",
            "Shadowboxer": "Melodic",
            "Criminal": "Energetic",
            "Slow Like Honey": "Melodic",
            "The First Taste": "Melodic",
            "Never Is a Promise": "Melodic",
            "The Child Is Gone": "Melodic",
            "Pale September": "Calm",
            "Carrion": "Calm",

            "On The Bound": "Energetic",
            "To Your Love": "Energetic",
            "Limp": "Energetic",
            "Love Ridden": "Melodic",
            "Paper Bag": "Melodic",
            "A Mistake": "Energetic",
            "Fast As You Can": "Energetic",
            "The Way Things Are": "Melodic",
            "Get Gone": "Melodic",
            "I Know": "Calm",

            "Extraordinary Machine": "Dissonant",
            "Get Him Back": "Energetic",
            "O'Sailor": "Dissonant",
            "Better Version Of Me": "Energetic",
            "Tymps": "Energetic",
            "Parting Gift": "Melodic",
            "Window": "Dissonant",
            "Oh Well": "Melodic",
            "Please Please Please": "Energetic",
            "Red Red Red": "Calm",
            "Not About Love": "Energetic",
            "Waltz": "Melodic",

            "Every Single Night": "Dissonant",
            "Daredevil": "Energetic",
            "Valentine": "Melodic",
            "Jonathan": "Calm",
            "Left Alone": "Energetic",
            "Werewolf": "Melodic",
            "Periphery": "Energetic",
            "Regret": "Melodic",
            "Any Thing We Want": "Melodic",
            "Hot Knife": "Energetic",
            "Largo": "Melodic",

            "I Want You To Love Me": "Melodic",
            "Shameika": "Energetic",
            "Fetch The Bolt Cutters": "Dissonant",
            "Under The Table": "Energetic",
            "Relay": "Energetic",
            "Rack of His": "Dissonant",
            "Newspaper": "Dissonant",
            "Ladies": "Melodic",
            "Heavy Balloon": "Dissonant",
            "Cosmonauts": "Melodic",
            "For Her": "Dissonant",
            "Drumset": "Melodic",
            "On I Go": "Dissonant",

            "Love More": "Calm",
            "Across The Universe": "Melodic",
        }

        let button1 = document.getElementById("button1");
        let button2 = document.getElementById("button2");
        let button3 = document.getElementById("button3");
        let button4 = document.getElementById("button4");
        let list = document.getElementById("list");
        button1.addEventListener("click", function() {
            list.innerHTML = ""
            //Change the object to an array
            //ChatGPT helped with this syntax
            let melodic_songs = Object.entries(songs);
            //Find all of the keys with the Melodic value
            //ChatGPT helped with syntax and logic
            let melodic2 = melodic_songs.filter(([key, value]) => value === "Melodic");
            //Keep only the keys
            //ChatGPT helped with syntax
            let melodic3 = melodic2.map(([key]) => key);
            //Randomly sort the array of songs
            //Duck helped with randomzing syntax
            melodic3.sort(() => Math.random() - 0.5);
            //Take the first 4 songs in the array
            //Duck helped with slice syntax
            let final = melodic3.slice(0, 4);
            //Loop through each song in the Final array
            for (song in final) {
                //Create a list item
                //Duck helped explain creating list and list elements
                let final5 = document.createElement("li")
                //Add the first song
                final5.textContent = final[song];
                //Append the song to the list
                list.appendChild(final5);
            }

        });

        button2.addEventListener("click", function() {
            list.innerHTML = ""
            let calm_songs = Object.entries(songs);
            let calm2 = calm_songs.filter(([key, value]) => value === "Calm");
            let calm3 = calm2.map(([key]) => key);
            calm3.sort(() => Math.random() - 0.5);
            let final = calm3.slice(0, 4);
            for (song in final) {
                let final5 = document.createElement("li")
                final5.textContent = final[song];
                list.appendChild(final5);
            }
        });

        button3.addEventListener("click", function() {
            list.innerHTML = ""
            let energetic_songs = Object.entries(songs);
            let energetic2 = energetic_songs.filter(([key, value]) => value === "Energetic");
            let energetic3 = energetic2.map(([key]) => key);
            energetic3.sort(() => Math.random() - 0.5);
            let final = energetic3.slice(0, 4);
            for (song in final) {
                let final5 = document.createElement("li")
                final5.textContent = final[song];
                list.appendChild(final5);
            }
        });

        button4.addEventListener("click", function() {
            list.innerHTML = ""
            let dissonant_songs = Object.entries(songs);
            let dissonant2 = dissonant_songs.filter(([key, value]) => value === "Dissonant");
            let dissonant3 = dissonant2.map(([key]) => key);
            dissonant3.sort(() => Math.random() - 0.5);
            let final = dissonant3.slice(0, 4);
            for (song in final) {
                let final5 = document.createElement("li")
                final5.textContent = final[song];
                list.appendChild(final5);
            }
        });
   
