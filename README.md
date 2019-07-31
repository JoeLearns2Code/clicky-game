# Clicky-Game

Clicky-Game is a React.js application memory game.  The object of the game is to click on a character's portrait no more than once in a given game round.  For each unique character you click on, you will gain one score point.  Your score will continue to increase as long as you click on unique characters you have not clicked on previously.  Click the same character more than once and the game is over.

## Getting Started

Clicky-Game is deployed via Heroku.  A direct link for the Heroku can be found here: https://jl2cnews-clicky-game.herokuapp.com/

Files and other information can be found on GitHub here: https://github.com/JoeLearns2Code/clicky-game

If you wish to deploy locally, please see the Prerequisites and Installing sections below.  Otherwise, you can access the program from the Heroku link.

## Instructions

Begin the game by clicking on one of the characters.  Your score will go up by one point, and the character portraits will be shuffled.  As long as you do not click on the same character twice, your score will continue to increase(up to the highest possible total of 12).  If you click on the same character, the game will end and your score will return to 0.  However, the highest score you achieved before the game ended will be displayed as the high score.


### Prerequisites

The data can be pulled directly from GitHub via GitBash on PC or via Terminal on Mac.  If you are new to this process, please follow the directions below:

When you have accessed the repository page on GitHub, you may simply download a Zip file and extract it to a directory of your choosing.  Alternatively, you may download the data directly to your device via GitBash if you have an SSH key.  More on adding an SSH key can be found here: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account


### Installing

Once you have the repository cloned, you will also need to have the basic npm package library installed.  Simply type "npm install" in the console when you are within the main folder.  



## Testing

HTML files can be validated here: https://validator.w3.org/#validate_by_input

If you are using Chrome as your browser, React elements(props, states, etc.) can be viewed by installing the following extension: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en 


## Deployment

Navigate to https://github.com/ to clone.  Carefully follow the installation instructions above to deploy locally.


## Built With

Visual Studio Code: https://code.visualstudio.com/
React.js: https://reactjs.org/
Node.js: https://nodejs.org/en/  
Heroku: https://dashboard.heroku.com 


## Contributing

Feel free to fork the repository for your own study.  


## Versioning

Use github for version control (https://github.com/your/project/tags).


## In development

Further complexity could be added to this game by creating additional states such as a "win" condition.  Currently, it is only possible to ultimately lose the game with a maximum high score of 12.

## Authors

* **Joe Hutchinson**

## License

This project is not licensed.

## Acknowledgments

* Joe Rehfuss
* Trae Shanks
* Lan Truong
* Abdul Aziz

Thank you to my instructor & TA's.