Mendix Tab Jumper Widget
========================
Inspired by the Tab Switcher widget, the Tab Jumper widget adds 4 additional methods of switching (jumping) tabs. 

 Typical usage scenario
---------------------- 
Improving form usability by directly jumping to a tab, without the need to scoll up to the top of the tab container 
Can be used in combination with the Key Stroke Widget to create keyboard shortcuts to show a specific tab

Features and limitations
------------------------ 
Available actions:
* Jump to first tab
* Jump to previous tab
* Jump to next tab
* Jump to last tab
* Jump to tab with matching title
* Jump to the n-th tab
 
Multiple Tab Jumper widgets can be used to control the same tabcontainer.
It is currently not possible to control multiple tabcontainers with the a single Tab Jumper. It acts on the first tabcontainer it finds.
This widget is not compatible with Mendix versions prior to Mendix 5.0
 
Installation
-------------
 Install this widget from the app store.

Dependencies
-------------
Mendix 5.x Environment

Configuration
------------- 
Add a unique class to the tabcontainer the widget should be active on.
Place the widget anywhere on the page. It does not have to be inside the tabcontainer.
Setup the widget properties.

Properties
------------
Appearance
* Button title: The text to display on the button. 
* Render as: Show the widget as button or link
* Image: Image to be shown on the button

Behaviour
* Tab class: The class name assigned to the tabContainer. 
* Jump to: The jump action to perform.
* Tab Name: Caption of the tab to activate (used when Jump To = Tab title)
* Tab Number: Number of the tab to activate. (used when Jump To = Tab number) 

Known bugs
---------- 
None
 
