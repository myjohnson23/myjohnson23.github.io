# Intimate Moments Catering
---------------------------
* Overview
* Guide to how it works
* Technology Used
* Requirements
* Necessary Deliverables
* Current version information
* Future version additions
----------------------------
## Overview

> This website is for Intimate Moments Catering, a business a friend owns and currently does not have a web presence other than Facebook.  This is my first project for General Assembly Web Design Immersive (GA WDI) 12-week instruction program.  All of the requirement gathering, planning, wire-framing, design, and programming was completed in less than 5 days.

----------------------------
## Guide to how it works

This is a responsive, general business website for a catering company.  It consists of a single page that displays all information using jQuery features to hide and show div containers when a user selects menu option simply by hovering over the navigation bar.

Each div container contain information as follows:

  * Home - General information about the business

  * About - an overview of the business and owner

  * Photos - photos of different events

  * Contact - a web form that uses jQuery and an AJAX call to send form information collected and email it to the specified user/s.

Here is a sample for the Javascript/jQuery function for monitoring mouseover events and changing the display of the selected div to block, changing the previous div to display none, and updating the colors of the navigation bar and div window to be the same.

  ```javascript
  $('#home-nav').on('mouseover', function () {
    $('#home-nav').css('background-color', 'rgba(68,207,108,1)');
    $('#about-nav').css('background-color', 'rgba(45,125,210,1)');
    $('#photos-nav').css('background-color', 'rgba(45,125,210,1)');
    $('#contact-nav').css('background-color', 'rgba(45,125,210,1)');
    $('.home-content').css('display', 'block');
    $('.about-content, .photos-content, .contact-content').css('display', 'none');
  });
  ```

This sample shows the variables for font sizing using Sass and the variables.scss file.

  ```scss  
  $base-page-size: 16px;
  $font-size-standard: 1.2rem; // = 16px
  $font-size-headline: 3rem; // = 3 * 1rem or 48px
  $font-size-byline: 1.5rem; // = 1.5 * 1rem or 24px
  $font-size-subtext: 0.75rem; // = .75 * 1rem or 12px
  ```

----------------------------
## Technology Used

This project includes the following technology:

* HTML
* CSS
* Sass
* Javascript
* jQuery
* AJAX
* Git and Github
----------------------------
## Requirements

> This is my first project in General Assembly Web Design Immersive program.  A twelve week program offered by GA to prepare individuals to become full stack web developers.

### The requirements were to build a website site using the following:

* Be hosted on Github Pages and be available to the web
* Contain an organization structure for HTML, CSS, and Javascript
* Utilize vanilla Javascript OR jQuery for DOM manipulation
* Adequately represent your project scope; ie: a product website should contain product information.
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use TWO media queries/breakpoints for Responsive Design
* Use ONE $.ajax calls to external APIs and render data from them

### Bonus Requirements
* Include a Contact Form that works in real-time!
* Include a Google Map on you website to show the location of the service(s) provided
* Include multiple pages that follow the same design/layout as others
* Use Sass in your project for CSS variables, nesting, and more!\
* Use jQuery Animations or CSS Key Frames to make your page come to life!

## Necessary Deliverables
* A working professional website, built by you, hosted on Github Pages
* A link to your hosted working website in the URL section of your Github repo
* A git repository hosted on Github, with a link to your hosted website, and frequent commits dating back to the very beginning of the project
* A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

----------------------------
## Current version information

The current version is 1.0

Version 1.0 includes the following features:

  1. Single Page interactive site
  2. Responsive design supported Mobile devices in portrait mode up to screen sizes of 420 pixels and mobile device in landscape and desktops larger than 420 pixels.
  3. Javascript and jQuery to watch for mouseover events on the navigation bar and change the content div container displayed
  4. Javascript and jQuery Ajax calls for sending form information to the pre-configued email address.  
  _ (This currently uses a non-production server for processing.) _

----------------------------
## Future version additions
