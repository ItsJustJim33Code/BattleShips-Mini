<img src="" width="200" />

Welcome to Battleships Mini

# Battleships Mini game.

**October 25th, 2024**

 <img src="" width="260"/> <img src="" height="750" width="850"/> <img src="" width="260"/> 

## Description

This website allows an interactive Battleship mini game to be played on different difficulties with a score of games won and games lost, along with a reset ability to 
reset the game to the start to try again without refreshing the page.

the features within this website include;

- Landing page

  - `Description` - Description shows the game name, the requirement to win the game.

  <img src="" width="260"/>

  <img src="" width="700"/>

  - `Torpedos Hit Counter` - Shows how many torpedos have actually hit the 'target' / 'Ship' and when the number matches the win requirement it sends an alert to the user letting them know theyve won.

  <img src="" width="260"/>

  <img src="" width="700"/>

  - `Torpedos Left Counter` - Shows the amount of torpedos you have left to fire depending on the difficulty of the game selected e.g. easy mode = 50, medium mode = 40, hard mode = 30 and impossible mode = 20. Once all torpedos have been fired the game ends, sending an alert to the user letting them know the game is over.

    <img src="" width="260"/>

  <img src="" width="700"/>

  - `Games Won Counter` - When you have reached the win requirement this counter increases by 1 and changes from black text to green to represent this visually back to the user.

  <img src="" width="260"/>

  <img src="" width="700"/>

  - `Games Lost Counter` - when all the torpedos have been fired and the number decreases to 0 indicating game over, this counter increases by 1 and changes text from black to red to represent this visually back to the user.

    <img src="" width="260"/>

  <img src="" width="700"/>

  - `GameBoard` - .

  <img src="./assets/images/readme images/tothetopbutton.png" width="100" height="150"/>

  - `Game Difficulty Buttons` - 

  <img src="./assets/images/readme images/usefullinksmobilescreenshot.png" width="260"/>

  <img src="./assets/images/readme images/usefullinksdesktopscreenshot.png" width="700"/>

  - `Reset Game Button` - 

  <img src="./assets/images/readme images/footermobilescreenshot.png" width="260"/>

  <img src="./assets/images/readme images/footerdesktopscreenshot.png" width="700"/>

  ## Planned updates / Challenges

  - Planned changes
    - 
    - 
    - 

- Challenges
  - When playing the game and pressing the easy button, it doesnt reset the game like the other buttons due as it creates a loop within the function, so i needed to add to the 
  select difficulty function that when the easy button is pressed, the reset game button is also clicked within javascript.
  - 
  - 
  - 

## Testing

- 
- 
- 
- 

## Validator Testing

- HTML Validator
  - No issues found
- CSS3 Validator
  - 1 issue present due to using external stylesheet i.e Google Fonts

#### Game Page Lighthouse

<img src="" width="350"/>

## Bugs / Issues

- Current bugs / issues
  - Issue when the difficulty buttons are clicked it enlarges the space in which the background takes up which can be noticeable to the user but currently isnt a seamless 
  transition of different state.
  - Issue on devices smaller than 721px 

## Usage

Within GitPod please open up a bash shell and type the below

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py` if your Python file is named `app.py`, of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.


## Screenshots

### Mobile Screenshots

####
<img src="" width="260"/>

### Desktop Screenshots

#### Game Page

<img src="" height="700" width="1000"/>

## References

- `FireTorpedo Function` - source code from http://www.kirupa.com/html5/handling_events_for_many_elements.htm: + https://github.com/LearnTeachCode/Battleship-JavaScript 
- `Create Gameboard Function` - ChatGPT using the following questions ("how can i make sure that this code belows first removes all the divs it creates and then rebuilds the divs after" + "how can i randomise this array while making sure that i have 1s in a row of certain lengths" + "static gameboard above + can i define the sizes of the groups of 1s in a variable and assign those to the board and then fill with 0s?")
- `Create the grid squares within the div via javascript` - https://github.com/LearnTeachCode/Battleship-JavaScript
- `Increment and Decrement scores and various other code` - Love Maths Walkthrough project via Code Institute
- 
- 
- 

## Contact

  - `Email:` jamestaylor21@btinternet.com
  - `Linkedin:` https://www.linkedin.com/in/james-taylor-33686b66/
  - `GitHub:` https://github.com/ItsJustJim33Code

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**October 22, 2024,** - Website released v1.0


