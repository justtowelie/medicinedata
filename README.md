# web scraper for company information and logo using Cypress.io
site: https://www.medicines.org.uk/emc/browse-companies


This is my first time ever creating a web scraper and theres a much nicer way I would've rather done it but concious of time so gone for a "as long as it fits the reqs" approach.

How to run:

Clone or download this repository. Assuming you have npm installed.
> npm install 
> to run it headless type "npm run test:headless"
> to run it headed type "npm run test:headed"
> to run it in debug mode "npm run open:cypress" and then select DataGrab.js


Reporter is located in "mochawesome-report" open the mochawesome.html in a browse (e.g. right click using VS code and assuming you have live server, run with live server)



::::: What I would've liked to change :::::


I've took an approach where I'm manually clicking each page and extracting the data based of the requirement "first, third and last company"
Ideally I would've liked to get "homePage.selectLeftOrRight" to work where as my idea here was to make it recursive so that this one method could do the whole test
But I kept running into issues with trying to make it go to the next page, it would go to "B" grab the data and then go to B again and grab the data.

I've left the code in.

Observed a slight issue with screenshot, it appears to be grabbing the "emc" logo partially as well, would ideally look into it more for a resolution.














