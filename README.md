# FionaAppleAlbums-Songs
- A place to find albums, songs, and information about Fiona Apple's music!
## Purpose & Features
- FionaAppleAlbums-Songs
- It is designed to help you find albums based on your song search, give you album details, and give song recomendations based on your mood.
- It has an album finding feature, it finds what album your favorite Fiona Apple song is from.
- It gives you a link to an information page about the album that provides the release date, full album title, and highlights (popular songs) from the album.
- It has a song finding feature that gives you song recomendations based on your mood/feeling you are after. It gives you 4 song recomendations when you click on your desired song type, and if you aren't happy with the songs that were recomended, you can click the same button again to find 4 other songs that fit your selected mood.

## File Structure
- album_finder.html --> file that has the album finder search page
- album_script.js --> file that has the JavaScript for album_finder.html
- album.css --> file that has the styling CSS for the individual album pages
- Extraordinary Machine_details.html --> file that contains information about the album (release date, full title, and highlights) in the form of words and buttons/dropdowns
- Fetch The Bolt Cutters_details.html --> file that contains information about the album (release date, full title, and highlights) in the form of words and buttons/dropdowns
- finder.css --> file that styles both the album finder and song finder pages with CSS
- index.html --> file that has the "homepage" with buttons where the user can select the program they would like to use
- song_finder.html --> file that contains buttons for the user to click based on what type of song they want to hear
- song_finder.js --> file contains an object(list) with songs(keys) and their tone/mood(values), file contains event listeners for button clicks, displays a randomized 4 songs that match the mood of whatever the user selects
- style.css --> file contians styling for the "homepage", includes background image, border, button styling (apple icon)
- The Idler Wheel..._details.html --> file that contains information about the album (release date, full title, and highlights) in the form of words and buttons/dropdowns
- Tidal_details.html --> file that contains information about the album (release date, full title, and highlights) in the form of words and buttons/dropdowns
- When the Pawn.._details.html --> file that contains information about the album (release date, full title, and highlights) in the form of words and buttons/dropdowns

## Instructions
Video Link: https://youtu.be/XzvHAqxyqnI
Live Website Link: https://noah-powell.github.io/FionaAppleAlbums-Songs/?authuser=1
- The user can select either Album Finder or Song Finder
- The user can input(type) into the Album Finder search bar a Fiona Apple song to find out what album that song is from
- The user can click on the details page link that pops up to learn more about the album that their inputted song is from
- The user can select Song Finder and select the type of song they want to listen to
- If the user wants more song recommendations, they can re-click the button to get new song recommendations
- If the user wants a different type of song recommendation than originally selected, all they have to do is select a new button

## Credits
- CS50 AI Duck helped with a logic issue setting href to # so that it can be changed later, that way the link to the album details page changes depending on the album
- CS50 AI Duck helped with syntax for randomizing the order of the array
- CS50 AI Duck helped with slice syntax for taking the first 4 songs of an array
- CS50 AI Duck helped with using padding, suggested to make sure that formatting elements have enough space around them
- CS50 AI Duck helped explain creating list and list elements to create a new lsit of only 4 songs
- ChatGPT helped setting max width to prevent formatting issues when feedback and details are displayed
- ChatGPT helped with using setAttribute so that the link to the new page can be set to whatever album is, basically updates the link to be accurate
- ChatGPT helped with logic issues with proper placement of variables found and tally so that they would be accurate
- ChatGPT helped with syntax for changing the value of variables
- ChatGPT helped with using position:, left:, transform: --- Position: absolute makes sure the dropdown doesn't change the formatting of the information above,
  left and transform helps adjust the horizontal alignment to keep the dropdown centered
- ChatGPT helped with using white-space: pre-wrap to format the album title when the dropdown was clicked so that it was a paragraph and spaced properly
- ChatGPT helped with flex-direction and justify-content to help format page vertically
- ChatGPT helped with this syntax for turning an object into an array
- ChatGPT helped with syntax and logic for seperating keys and values

## Screenshots
![screenshots](images)

