# Milestone One Project - The Monkees Band Website

This project represents a fictional scenario in which the famous 1960s rock band The Monkees asks me (the developer) to create a band website that fulfils a number of stated objectives. These objectives are:

1. Provide a place for fans and prospective fans to listen to select recordings from their back catalogue and any new material.
2. Publicise their availability to perform at private events, such as weddings and private parties.
3. Provide links to wider social media, including Facebook, Twitter and YouTube.

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

This user wishes to book The Monkees for a private performance. They will wish to see testimonals that confirm The Monkees are a good investment, and will want a clear and simple method of contacting the band to initiate a booking.

### Wireframes
Prior to work beginning on the website, wireframes were created in order to aid the design progress and provide direction during actual coding. These can be found in the "mockups" folder in the root directory of the project.

The finished project diverts from the wireframes on a number of points, these are mentioned in detail in the Features section.

## Features
The website is constituted of 26 html pages. 7 of these (index.html, news.html, tour.html, book-us.html, music.html, featured-video.html and photo-gallery.html) are located within the project's root directory and are directly accessible via the site's main navigation. Of the remaining 19 html pages, 8 constitute news articles that are found within the news-articles directory, 7 are music pages found with the music-pages directory, and 3 are video pages found with the video-pages directory. There is also a dummy action-page.html that the user is taken to when they submit the form on book-us.html.

### Main Navigation
The main navigation is consistent across all pages. It consists of 7 links labelled Home, News, Tour, Book Us, Music, Video, and Photo Gallery. The navigation is achieved with Bootstrap and is responsive, collapsing on all viewports less than 768px wide. When the navigation is collapsed it can be revealed if the user clicks or taps on the hamburger icon.

On viewports larger than 767px, the page the user is currently on is marked with a box to aid the user's orientation around the website on larger viewports. This feature is maintained when the user is visiting a subpage; for example, if the user is currently on forever.html, a music subpage, then then music link in the main navigation will be marked with a box.

In addition to the navigation links, there are external links to The Monkees' social media channels that are located directly below the main navigation. When click/tapped on these open a new browser tab to then take the user to that social media channel.

### Footer
The footer is also consistent across all site pages. The footer consists of 4 links; Home, Facebook, Twitter and Youtube. The Home link takes the user back to index.html. The other links take the user to the corresponding social network, which opens in a new browser tab so as to prevent the user forgetting what page they have come from.

### index.html
As per normal convention this page acts as the site's home page. Below the main navigation the user will encounter a large and eye catching hero slider based off Jssor's Bootstrap jQuery slider. The slider is responsive and also touch-enabled for the benefit of mobile and other touch-enabled devices.

Below the Jssor slider the user will encounter a Bootstrap row with 2 columns. The left column contains the latest music release from The Monkees, with links to the album page and an external "Buy Now" link that takes the user to amazon.com. The right column contains latest news, allowing the user to navigate to the individual news articles, or go to news.html which contains a full list of news stories.

Below the first Bootstrap row, the user encounters the History section which uses lorem ipsum to simulate a brief description of the band's history, along with embedded images of the individual band members as well as a group photo at the end of the section. This deviates from the original wireframes in that initially the History section would have had its own dedicated html page. The decision was made to integrate the History section onto index.html for two reasons:

Firstly, this fleshes out the content on index.html, which without the history section contains sparse content. Although this is not necessarily a bad choice (compare for example the sparsely filled out [Guns N' Roses homepage](https://www.gunsnroses.com/ "Guns N' Roses Homepage")), it was felt that The Monkees, with their long history, should have their History content as a central feature of their website.

Secondly, an integrated History section reduces the size of the project and the size of the main navigation. A smaller navigation in particular reduces the chance of overloading the user with too many options, thus an integrated History section provides a boost to the site's overall usability.

### news.html
This page acts as a central hub of news articles. The page is minimal, consisting of two Bootstrap columns of 4 news heading each, with an <aside> element at the bottom of the page containing information for journalists and blog writers on how to get in touch with the band for press statements. Each news heading links to a seperate news page.

### subpage navigation
All of the subpages in the site (news articles, music pages and video pages) have a sub navigation that is located directly below the page title <h1> element and is repeated at the bottom of each subpage so that the user doesn't have to scroll up in order to access the sub navigation, improving site usability and accessibility. This allows the user to navigate to the next or previous piece of content without heading back to the main page, with all subpages also possessing a link to go back to the main page. The video pages on the site work a bit differently; although they possess a sub navigation, the layout of the video pages allows the user to access any other video page from all of the video pages by using the video thumbnail links, so there is no "All Videos" link on the video pages.

### news-article (subpage)
The news articles all feature a unique layout; they contain a different number of paragraphs and most have at least one image (although one news article possesses two). This simulates the layout of news articles varying with the content.

### tour.html
This page contains a responsive table generated with Bootstrap's list-inline class. It features a number of tour dates with the date of each performance, location, and a link to buy tickets from a third party vendor.

### book-us.html
The Book Us page is comprised of two components. The "Testimonials" section contains two quotes from previous clients of The Monkees achieved using Bootstrap media objects. There is also a contact form on the page that uses built in HTML5 validation to ensure correct imput of the Contact Name, Contact Email and Your Message fields. The form's submit button takes the user to action-page.html.

The finished book-us.html page differs from the wireframe in that the testimonials section was implemented in the finished product. This decision was taken during the consideration of additional user stories that took place after the project was being coded. It was felt that prospective clients of The Monkees would need to see some sort of marketing in order to increase the chances of them making a booking.

### action-page.html
This is a dummy action page which does not utilise any server-side functionality but simulates the process the user would go through when they submit the contact form. This page consists of a "thank you" message.

No wireframe was created for this page due to its simple format making a wireframe unnecessary.

### music.html
This page acts as a hub for the music subpages. It comprises of the featured album cover image (also displayed on index.html) and album heading displayed at a prominent position towards the top of the page, along with other albums displayed three per row going down the page. This layout is responsive, and collapses to a one album per row stacked layout on smaller viewports. Each of the album images and headings is a link that takes the user through to its respective music subpage.

### music page (subpage)
Each of the music subpages possesses the same layout. The first row consists of the album cover image and a release date along with an album description (written in lorem ipsum). The second row consists of a spotify widget that enables the user to play the album in their browser. The responsive layout collapses on smaller screens, so that the album image, the description, and the spotify player are stacked on top of each other.

A slight deviation from the wireframes exist in that on the finished product the spotify widget is below the rest of the content, whereas in the wireframe it was positioned to the right of the album image and directly below the album description. This approach was adopted due to it being discovered during coding that the spotify widget does not adapt well to small sizes. In order for the widget to be large enough to function correctly it had to be positioned below the rest of the content.

### video pages (featured-video.html and subpages)
The video pages all feature the same layout. The currently loaded video is displayed using a YouTube iframe towards the top of the page. Below the iframe, YouTube img thumbnails are used to create links to other video pages, with glyphicon-play icons overlayed on the thumbnails to indicate to the user that these links will take them to the video content. On small viewports the default three thumbnails per row is collapsed to one on top of the other stacked.

### photo-gallery.html
This page contains image media, implemented using the lightgallery jQuery plugin. The page consists of two rows of images with a title heading, each representing a separate jQuery slideshow. The lightgallery functionality enables the user to click/tap on an image to make it fullscreen, with the ability to swipe or click through the other images in the slideshow. On smaller screens, the default row of four images is collapsed to each image being stacked.

### Features Left to Implement
Some features are left open to the idea of implementation, but were not featured in this release.

**Social share buttons on news articles**

All of the major social networks provide the ability for developers to specify how they wish website pages to be shared, as well as the ability to implement specific social media sharing buttons on pages. This feature was not implemented because it depends on the final url of the finished project, which was not clear at the time of coding.

**Newsletter popup on index.html**

The idea to have a promotional popup promoting The Monkees' newsletter on the website's homepage was considered, inspired by similiar functionality on the [Led Zeppelin homepage](http://www.ledzeppelin.com/ "Led Zeppelin Homepage"). However, this functionality was considered to be beyond the project's requirements, and would also constitute dummy functionality since there are no server-side processes currently active on this project to enable a user to sign up to a newsletter.
 
## How Existing Features Fulfil User Requirements
This section details how the features implemented in the current release of the project meet the requirements for the users discussed in the UX section.

**Hardcore fan, likes going to live performances**

This type of user, who is interested in live performances, is served by tour.html, which contains information relating to The Monkees live performances as well as links to buy tickets.

**Newly acquainted fan, wants background history and music**

This type of user is able to read the background history of The Monkees on index.html. They are also able to engage with the multimedia content found on the music and video subpages, as well as view image content on photo-gallery.html. In addition, there are multiple locations on the website where this user may visit The Monkees' social media channels.

**Blog writer/Journalist**

This type of user can find the content of interest to them on news.html and its subpages. They are given a clear method of contacting the band for further statements via the <aside> on news.html.

**Potential Client**

This type of user is able to navigate to book-us.html. They are able to see a small testimonial section which serves as marketing, and are then able to use a simple contact form in order to initiate the booking process or to obtain more information. The validation on the form helps ensures the user enters workable information.

## Technologies Used
### [HTML5](https://www.w3.org/standards/webdesign/htmlcss)
The project's markup uses HTML5, and makes as much use of HTML5 semantics as possible using W3C standards.

### [CSS3](https://www.w3.org/standards/webdesign/htmlcss)
The markup is styled using CSS3, which is maintained in separate css files where posible in keeping with the standard of separating structure and presentation.

### [Bootstrap 3](https://getbootstrap.com/docs/3.3/)
The Bootstrap 3 framework was used in order to simplify the process of generating the website's structure and ensuring its responsiveness.

### [Real Favicon Generator](https://realfavicongenerator.net/)
This tool was used in order to construct favicons for the project. How favicons are rendered is different depending on the browser or platform used, and this tool simplifies the process by providing the appropriate markup and icon for each platform.

### [JQuery 3.3.1](https://jquery.com)
jQuery is utilised by the project for a number of areas of functionality.

1. Boootstrap depends on jQuery for its Javascript components, including the collapsed hamburger navigation icon.
2. jQuery is used to implement the Jssor slider on index.html.
3. jQuery is used to change the text of the show/hide history text button on index.html to reflect the text's current hidden or visible state.
4. The image slider on photo-gallery.html depends on jQuery for the slideshow functionality.

### [Font Awesome 5.3.1](https://fontawesome.com/)
The project uses Font Awesome to generate the social media icons found in the header element of each page.

### [Google Fonts](https://fonts.google.com/)
The project uses Google Fonts to increase the visual appeal of the project.

### [Spotify Play Button](https://developer.spotify.com/documentation/widgets/generate/play-button/)
The music subpages use this Spotify iframe in order to embed audio playback.

### [YouTube iframes](https://www.youtube.com/) 
The video pages make use of the embed feature available on YouTube videos.

### [Lightgallery 1.6.11](http://sachinchoolur.github.io/lightGallery/) 
Lightgallery is a customisable media slideshow based on jQuery that is utilised by this project on photo-gallery.html

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
