[omayeli.com](https://www.omayeli.com/)
==============

Version 3 of my personal website. 

## How it's built

* [Tachyons](http://tachyons.io/docs/) for styling
* [Fabricjs](http://fabricjs.com/) for shapes and animation.
* [Netlify](https://www.netlify.com/) for deployment, optimizations etc
* [Hugo](https://gohugo.io/) + html + js for the rest. 

### Content

Almost everything (bio, talks, projects, writing, social media links) are
populated from .json files in the data/ folder. And when I want to use them
I can just get and loop over them using $.Site.Data.name_of_file (which hugo
provides). Hugo also provides some useful functions like sorting, truncating
strings etc.

### Canvas / Design

In 2015 I took an intro to design class at NYU. Our final assignment was to create
a design for ourselves that included a banner (for twitter etc), a logo, wireframes
for a website etc. You can still check it out on my
[behance](https://www.behance.net/gallery/28201389/Personal-Branding).
I really liked the banner I made, it's been my twitter banner for 
some time and I always thought about making it interactive in some way.
I started out using html5 canvas. I used [AI-Canvas](http://blog.mikeswanson.com/ai2canvas)
to convert the illustrator (ai) file to a canvas element. I wasn't sure what kind 
of interaction I wanted, I just wanted to play around but I quickly got frustrated with the 
canvas api. So I started looking around for alternatives (things that would make
interacting with shapes on the screen easier to manage). 

The section titled ['Why Fabric?'](http://fabricjs.com/fabric-intro-part-1)
in the Fabric introduction explains it well:

"Canvas allows us to create some absolutely amazing graphics on the web these days. 
But the API it provides is disappointingly low-level. It's one thing if we simply 
want to draw few basic shapes on canvas and forget about them. But as soon as there's 
need for any kind of interaction, change of picture at any point, or drawing of more complex shapes
— situtation changes dramatically."

Fabric has a svg-to-canvas feature so I used that to pull in the 
[graphic](https://github.com/oa495/portfolio-site/blob/master/static/images/graphic.svg)
and then convert it to a canvas (that was 4 lines of code). Also as soon as you initialize
the canvas, objects are automatically selectable and draggable so I didn't have to write any
code for that. The animation part is easily done by getting the objects on the screen,
and calling obj.animate with the new angle whenever a scrolling event happens. 

## Future stuff
I like the site right now. I chose Hugo cause I was thinking of starting a blog so
I might do that sometime soon. Otherwise, I'm good. 
