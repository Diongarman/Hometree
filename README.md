# Hometree
## Build
Run the following inside the folder path 'Hometree'
1) `npm init`

Run the following inside the folder path 'Hometree/dist'
1) `npm run start`

## Choice of stack

I have decided to use TypeScript(TS) and SCSS to implement this small project. The reason I have decided to do this is twofold, firstly TS ensures safer code and secondly, I have no experience with TS so this project is a better insight into how I work with new technologies.

## Reading this Repo

To understand the code in this repo, please only read the source code, the contents of which are inside 'Hometree/sass' and 'Hometree/ts'.

## Using application

The application is fairly self-explanatory, however there are a few quirks.

Select a number by clicking the box that contains it and then clicking the yellow button at the bottom, this will increment the basket quantity number in the top right corner.

If a number that is already in the basket is selected the yellow button will be disabled. An animation upon hovering on and off of this button will denote that it is active.

Add a favourite by selecting a number and then clicking the grey star button at the bottom. You cannot currently favourite a number that is already in the basket, I will be working to fix this soon.

You can only select one favourite number.

If you refresh the screen, your favourite number will be persisted. This is done by using the sessionStorage object. All other items are lost from the basket upon refresh.





