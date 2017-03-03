# sketchpad
A "sketchpad" that draws while you hover over a pixel. 

3/1/17 2:09pm:
-Added container, figured out pixel to container ratio. Test hover thing, must be implemented with js file later. Need to figure out best way to change pixel size without screwing up ratio. I like the idea of fixed choices via radio-buttons.

3/2/17 3:52pm:
-Struggled with toggle all day, finally got classes to change and cursor no long draws over painted pixels (as planned), but the mouseenter event still changes the .pixel class regardless of whether draw is true or fale. While-loop seems to crash the browser, do not try!

3/2/17 7:48pm:
-Got the drawing toggle to work perfectly! The solution was simple: $(.'pixel').off('mouseenter'); shuts off the mouseenter event. I also added the beginnings of the erase-grid button. It works, and I can re-draw the grid and draw on it again. I just need to adjust pixel size accordingly and would like a radio-button prompt instead of an enter-your-own size kind of deal. Might be good to split up this part into several functions, and I should plan it out extensivly on paper first.
SOLUTION:
http://stackoverflow.com/questions/42566365/how-can-i-stop-or-toggle-this-mouseenter-function/42566577#42566577