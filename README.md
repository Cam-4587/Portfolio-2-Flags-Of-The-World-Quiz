# Flags of the World Quiz !!!
![Image showing website's responsiveness on different devices](<assets/images/read_me_images/am_I_responsive_image.png>)

The flags of the world quiz is a quiz that you can try with friends, family and colleagues to test yourself against a timer of 15 seconds to see if you can match all 25 flags to the correct countries that they represent.

By Cameron Conroy

# UX design
## Colour
My project is minimalistic in terms of its page structure so I added some color to the quiz to make it  more visually appealing to the user.  I added a background colour of RGB (78, 155, 226) to the body section, and rather than the quiz section having a white background I chose a background colour of #ebf8f8 that contrasts nicely with the page background colour and allows flags with white in it to be visible on the page. 

## Font
I imported the font from Google Fonts and chose the "Freeman" font  This is  it appealed to me as a font that when used made the quiz look more like a game for users to enjoy rather than a formal-looking quiz.
## Images 
The only images that appear in this quiz are the ones to display the flags seen in the questions. They have a width of 320 pixels with slightly varying heights across the images so that these images will have enough resolution to be clearly seen by the user. The images for the flags came from [Download flag icons of all countries | Flagpedia.net](https://flagpedia.net/download/icons)

# User Stories
## User
 * As a user I want to play a quiz that looks like a game rather than a formal quiz.
 * As a user I want to have control over when I can start and restart the quiz.
 * As a user I want to have the number of correct and incorrect answers tracked throughout the quiz.
 * As a user I want to play the quiz again when I complete it.

# Wireframes
## Desktop and Mobile Wireframes
    ![Mobile and Desktop wireframes created on Balsamiq](<assets/images/read_me_images/mobile_and_desktop_wireframes.png>)
# Existing Features
## Start button
    The game starts with a start button that is large and easily for users to press. It gives the user control over when they want to start the quiz.
    ![Start section](<assets/images/read_me_images/start_section.png>)
## Header
    Featured at the top of the quiz box the header shows the name of the Quiz : Flags of the World Quiz!!! that clearly tells the user what the Quiz is. Underneath the header is the question placed underneath that is present throughout the questions.
## The Question section
    Featured at the top of the quiz box the header shows the name of the Quiz : Flags of the World Quiz!!! that clearly tells the user what the Quiz is. Underneath the header is the question placed underneath that is present throughout the questions.

    The flag is centred below the question and is paced between the question and the answer boxes. The answer boxes are placed below the flag and are arranged in a 2 by 2 grid giving the user 4 potential answers to select from.

    Underneath the answer grid is displayed the number of correct answers, the number of incorrect answers and the question number along the bottom of the quiz section.
    ![question section](<assets/images/read_me_images/question_section.png>)
## Correct and Incorrect answers
    If the answer selected is correct the correct answer will highlight in green. If the incorrect answer is selected, the correct answer is highlighted in green and the selected incorrect answer is highlighted in red.The correct and incorrect counts are incremented accordingly and the question number increases when you move onto the next question also.
    ![correct and incorrect answers also showing question number incrementing](<assets/images/read_me_images/correct_and_incorrect_answers.png>)
## Timer
  In the top right-hand corner of the quiz section, there is a timer that counts down from 15. Between 15 and 10 seconds the timer is red, between 10 and 5 seconds the timer is orange, between 5 and 0 seconds the timer is red and when time has run out the timer turns blue and a message of Time out is displayed. When the timer runs out the correct answer is highlighted the next button is displayed.
![timer with different times and different background colours] (<assets/images/read_me_images/timer.png>)

## The end of the quiz/restart section
When the quiz has finished the end section of the quiz is displayed that displays how many questions you got correct out of the number of questions that exist in the index. Below is a button to restart the quiz. This button takes you back to the start button of the quiz. The restart button taking you back to the start button gives the user even more control over when they want to restart the quiz.
![End of the quiz and restart button](<assets/images/read_me_images/end_of_quiz_section.png>)

# Testing
 ... I have tested this game for responsiveness on Google Chrome and Microsoft Edge on the following devices:


| iPhone SE| iPhone XR|iPhone 12 pro|iPhone 14 max pro|
| pixel 7| Samsung Galaxy S8+ |Samsung Galaxy S20 Ultra|iPad mini|
| iPad Air|iPad Pro|Surface Pro 7|Surface Duo|Galaxy Z fold 5|
|Samsung Galxy A51/71| Nest Hub | Nest Hub Max|

... I have confirmed that the answers are always correct and that the start, next and restart buttons work.

I have tested the website on Lighthouse in Chrome dev tools for both Desktop and mobile devices and it passes all of the tests for performance, accessibility, best practices and SEO.

![Lighthouse tests for Desktop and mobile devices](<assets/images/read_me_images/lighthouse_testing.png>)

# Unfixed bugs
* There are no bugs that prevent the quiz being functional.
* However on smaller screens the selected answer doesn't highlight in red or green but the incorrect/correct count increases to indicate a correct or incorrect answer and if the incorrect answer is selected, the correct answer is highlighted in green to show what the correct answer is.
* The hover mechanism is still in place after the answer is selected, but the buttons still disable and the green/red background Colours still present themselves indicating correct/incorrect answers.

# Deployment
The site was deployed to Github pages. The steps to deploy are as follows:
    * In the Github repository, navigate to the Settings tab.
    * Then in the pages section in the code and automation section select 'Deploy from a branch' in main and /root. I then saved that deployment.
    * The repository then provided the link for the completed website
    * The live link can be found here - [Flags of the World Quiz] (https://cam-4587.github.io/Portfolio-2-Flags-of-the-world-quiz/)
# Credits
## Content
*  This video produced by Web dev simplified helped to design my quiz with a start and restart button as well as creating a hidden class that helped to hide and reveal HTML elements throughout the quiz [Build A Quiz App with Javascript](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1047s)

* This video produced by GreatStack helped to design my website by having the questions array in a way I have done, assigning true and false values to each of the answers so they can be referenced in the Javascript code. Also for the positioning of the quiz section, it is kept in the centre of the webpage across different devices and the correct answers are highlighted in green and incorrect answers are highlighted in red as well as displaying the next button after the answer is selected. [How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1856s&pp=ygUPZ3JlYXRzdGFjayBxdWl6)

* MDN Web docs were used to help me arrange the answer buttons in the quiz section in a 2 by 2 grid [Auto-placement in grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)

* This quiz produced by my Code Institue mentor helped desing my website by having a timer introduced that counts down from 15, changing colour depending on how much time is left on the timer and ending the question when the timer runs out. [Geo Master](https://alan-bushell.github.io/geo-masters/#)

## Media
The flag image files originated from [Download flag icons of all countries | Flagpedia.net](https://flagpedia.net/download/icons)

The fonts used was  the 'freeman' font that was imported from google fonts Freeman - Google Fonts [Freeman - Google Fonts](<https://fonts.google.com/specimen/Freeman?query=freeman>)

The favicon used originated from Flaticon [Globe favicon](<https://www.flaticon.com/free-icon/worldwide_814513?term=globe&page=1&position=8&origin=search&related_id=814513>)










