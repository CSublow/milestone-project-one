# Milestone One Project - The Monkees Band Website

This project represents a fictional scenario in which the famous 1960s rock band The Monkees asks me (the developer) to create a band website that fulfils a number of stated objectives. These objectives are:

1. Provide a place for fans and prospective fans to listen to select recordings from their back catalogue and any new material.
2. Publicise their availability to perform at private events, such as weddings and private parties.
3. Provides links to wider social media, including Facebook, Twitter and YouTube.

In addition, the developer has identified a number of other objectives that the website should fulfil, in keeping with users' expectations of how a website for a household name band such as The Monkees should look and what functionality it should possess. These additional objectives are:

4. Provide a platform on which the band can publicise relevant news and maintain older news stories in an archive-like format.
5. Provide information on the band's publicly available live performances, with links enabling the user to buy tickets from third-party ticket vendors.
6. Showcase relevant multimedia, featuring not only audio but image and video content.

All of these objectives must be achieved in a visual style that matches The Monkees' legacy 1960s aesthetic, utilising the relevant technologies to achieve a professional-looking website.

## UX

The primary users of this website are going to be fans of The Monkees. These fans will vary in regards their familiarity with The Monkees' music, ranging from truly hardcore fans, to fans less acquainted who may only be familiar with one or two songs. In addition, users such as journalists may use the website in order to source news material, and potential clients may be looking to hire The Monkees for private live performances.

A number of user stories have been generated in order to shed light on the type of experience different users expect:

**Hardcore fan, likes going to live performances**

This type of fan is very well acquainted with The Monkees and their music. This fan is primarily interested in finding information on The Monkees' publicly available live performances and where they can buy tickets.

**Newly acquainted fan, wants background history and music**

This type of fan may only be familiar with The Monkees as a name, or only knows one or two songs and has only recently decided that they like this band. This type of fan will want to hear music, gather information and perhaps view wider multimedia content such as videos and images. For this type of fan, the website must serve as a promotional tool that draws the fan into a deeper engagement with The Monkees as a brand. In addition, this type of fan, who is unlikely to be connected to The Monkees' social media, may also wish to see a central hub of social media links through which the fan can connect.

**Blog writer/Journalist**

This user may not be a fan of The Monkees, but they write for a popular Internet blog or traditional newspaper. This user will be primarily viewing the news section, using the articles as the basis for content hosted on their own platforms. They will wish to see clearly organised news content, with an obvious method of contacting The Monkees' management for press statements and clarifications.

**Potential Client**

This user wishes to book The Monkees for a private performance. They will wish to see testimonals that confirm The Monkees are a good investment, and will want a clear and simple method of contacting the band to inititate a booking.

### Wireframes
Prior to work beginning on the website, wireframes were created in order to aid the design progress and provide direction during actual coding. These can be found in the "mockups" folder in the root directory of the project.

The finished project diverts from the wireframes on a number of points, these are mentioned in detail in the Features section.

## Features
The website is constituted of 26 html pages. 7 of these (index.html, news.html, tour.html, book-us.html, music.html, featured-video.html and photo-gallery.html) are located within the project's root directory and are directly accessible via the site's main navigation. Of the remaining 19 html pages, 8 constitute news articles that are found within the news-articles directory, 7 are music pages found with the music-pages directory, and 3 are video pages found with the video-pages directory. There is also a dummy action-page.html that the user is taken to when they submit the form on book-us.html.

### Main Navigation
The main navigation is consistent across all pages. It consists of 7 links, labelled Home, News, Tour, Book Us, Music, Video, and Photo Gallery. The navigation is achieved with Bootstrap and is responsive, collapsing on all viewports narrower than 768px. When the navigation is collapsed it can be revealed if the user clicks or taps on the hamburger icon.

On viewports larger than 767px, the page the user is currently on is marked with a box to aid the user's orientation around the website on larger viewports. This feature is maintained when the user is visiting a subpage; for example, if the user is currently on forever.html, a music subpage, then then music link in the main navigation will be marked with a box.

In addition to the navigation links, there are external links to The Monkees' social media channels that are located directly below the main navigation. When click/tapped on these open a new browser tab to then take the user to that social media channel.

### Footer
The footer is also consistent across all site pages. The footer consists of 4 links; Home, Facebook, Twitter and Youtube. The Home link takes the user back to index.html. The other links take the user to the corresponding social network, which opens in a new browser tab so as to prevent the user forgetting what page they have come from.

### index.html
As per normal convention this page acts as the site's home page. Below the main navigation the user will encounter a large and eye catching hero slider based off Jssor's Bootstrap jQuery slider. The slider is responsive and also touch-enabled for the benefit of mobile and other touch-enabled devices.

Below the Jssor slider the user will encounter a Bootstrap row with 2 columns. The left column contains the latest music release from The Monkees, with links to the album page and an external "Buy Now" link that takes the user to amazon.com. The right column contains latest news, allowing the user to navigate to the individual news articles, or go to news.html which contains a full list of news stories.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
