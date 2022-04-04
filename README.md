# Optimizing callbacks as props

When you open the app and take a look at the console you will see 
3 of this statement "Count changed, so &lt;Count /> re-renders" printed to console
and 3 of this "&lt;CountIncrementer /> re-renders" as there are 3 of each Count and 
CounterIncrementer components all being passed the same prop count and handler.

If we click on CounterIncrementer button, then we see the same series of statements in console.

3 times the Count component re-rendered because count changed, but why does CountIncrementer re-renders,
the function handler is same.

CountIncrementer is implemented as a special class component call PureComponent which only re-renders if its internal state or 
prop changes.

To solve this issue use the relevant hook on <code>handler</code> function such that &lt;CountIncrementer /> renders only once on initial mount and not on each click, each time count is changed.

&lt;Count />  will keep on re-rendering since its prop is changing, we can't prevent that.
