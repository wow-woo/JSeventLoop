🤷‍♂️
JS event loop

rendering , sync, async

✔ 1)
RAF
requestAnimationFrame

right berfore rendering, it's triggered;
which means before painting html, css on screen.

while excuting, enqueued new item in micro task queue doesn't get excuted.

\*rendering principle

✔ 2)
MACRO tasks

after current loop, it's triggered.

✔ 3)
MICRO tasks

when stack is empty AND before next loop, it's triggered.

queueMicrotask();

while excuting, new item enqeueued in micro task queue, excuted it.

\*rendering principle
the render steps only happne if there's something only worth updating.
screen frequency set


👍 inspired

https://vimeo.com/254947206#t=1470s
