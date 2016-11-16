## Nacho Favorite Client

Presented by General Assembly, Neural Shunt Media, and Github Pages.The client for the Nacho Favorite API based on the GA front-end template.
This project is a demonstration of the power of tortilla chips and cheese,
just like git-hub pages and heroku, rails and javascript, or handlebars and
my mustache when these forces come together they are to be taken very
seriously.

You can witness this beauty of this project first hand at the following url:
 https://nlkassad.github.io/nacho-favorite-client/


## Planning Resources

The following resources were used for planning this project.

-   [Trello](https://trello.com/b/vbknujSV/nacho-favorite)
-   [Project Purpose Statement](https://drive.google.com/open?id=1EQUxEk582odHH4nDJJ56IKQKRQu1AHBSSZksSr5N7VM)
-   [User Stories](https://drive.google.com/open?id=15ZJXG5YBctTq7kMu7QqYoxuMhzcyBIYLjGWTcxPMIy0)
- [ERD](https://drive.google.com/open?id=1QYYaHC0X2DYrZ6TNQLDir0rSSjhdtaKk6jM3CNTIA18)
- [Wireframe](https://drive.google.com/open?id=1w74VPB7aa10qJBIVEAOJVT_tf2hZf2w6h5EVlCsSzgc)
- [Wireframe Photo](https://drive.google.com/open?id=0B2g5s7-X_yMnWFNWWEZEcVp5cEU)
- [Pseudocode](https://drive.google.com/open?id=1QjFgfZgvt2hcl_IVP-DVprrPjwB-fDi7avxiYy-1rSU)

## Project Planning outline

Scope out project and get feedback on idea.
Design initial data structure, ERD, and sample tables
Consult with Chris on data structure, reformatted and simplified after discussion
Scope changed to make goals more attainable.
Revision to ERD and data documents to reflect updates to scope changes and
data structure.
Review project requirements and lay out project plan in Trello
Run through code in Pseudocode document.
Take api template and create local version.
Build out api structure.
Deploy to heroku
Build out front end
Deploy to gh-pages
Connect front end to back end
Revise visual formatting on front end
Update back end to include auth
Update event handlers for better interface

## Problem solving and major issues:

Issue with Heroku deploy, was in notes on the project as well as comments
from students from previous cohorts.
Consistent issues with client origin, either wrong value or not updated.
Issues with using gif in page, may have been webpack issue but didn't want to
deploy in non-working state.
Problems with fields and entry values. Still don't like how this is handled.
The selector option is better from a user experience but still not ideal.
Dynamically loading items and targeting them is very hard. The items need
to be loaded in the proper way with event handlers that can find them,
this also may lead to confusing naming.


## Unresolved issues:

Handlebars is functioning but the code has too much duplication.
This could use a rework after I learn how to separate the elements in
a more useful fashion.
Discovered a last minute issue with the zero value registering as null. because
of this I've switched to loggin the meh value as 101, this needs to be
switched to a more appropriate reference.
I'm currently not displaying a sorted return view.
Users can create multiple reviews on items, not broken but not the original
intended experience.
No tally of review data, also not broken but missing functionality from
original goals
content does not display well on mobile view.

## Reference Links
Client Repo: https://github.com/nlkassad/nacho-favorite-client 
API Repo: https://github.com/nlkassad/nacho-favorite-rails-api 
Live Client: https://nlkassad.github.io/nacho-favorite-client/ 
Live API: https://nacho-favorite-api.herokuapp.com

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
