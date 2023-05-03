# Kierunek Website
Project deployed via Netlify @ https://kosciolkierunek.pl

## Design process
Process started with interview inside the organisation to asses the needs, based
on which the following information architecture and website flow was defined:
1. Landing page
    * Hero (logo, bg movie or photo, brand tagline, time and place of the service)
    * Credo
    * Events
    * Kids church
    * Prayer cards
    * Support
    * Social media
    * Contact and location
    * Closeout (brand tagline, time and place of the service)
2. About us
    * Credo
    * Leaders
3. During week
    * News
    * Calendar
    * Groups
    * Contact
4. Kids church
    * Hero
    * Mission and vision
5. Prayer cards
6. Support page

Based on that I prepared the website flow.
I then made interface sketches, lo-fi  mockups in Adobe XD and high fidelty prototype of the
website in Figma, which is available at [following link](https://www.figma.com/file/C9y2MpUkh7Egf3Lxub8wjU/%5BKierunek%5D-Strona-internetowa).

## Development
Application was writen in Next.js with React as view generator. It also took adventage of build in serverless function support for API calls and server side rendering of some pages that import images from AirTable.

To run install required packages:
```console
npm i
```
and then start development server using:
```console
npm run dev
```