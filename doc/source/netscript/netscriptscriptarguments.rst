.. _netscript_script_arguments:

Netscript Script Arguments
==========================

Arguments passed into a script can be accessed in Netscript using a
special array called ``args``. The arguments can be accessed using a
normal array using the ``[]`` operator (``args[0]``, ``args[1]``, etc...).
These arguments can be string, number, or boolean.

For example, let's say we want to make a generic script
``generic-run.script`` and we plan to pass two arguments into that script.
The first argument will be the name of another script, and the second
argument will be a number. This generic script will run the
script specified in the first argument with the amount of threads
specified in the second argument. The code would look like::

    run(args[0], args[1]);

And it could be ran from the terminal like:

``run generic-run.script myscript.script 7``

In .js / ns2, the above script would look like::

    export async function main(ns) {
      ns.run(ns.args[0], ns.args[1]);
    }

It is also possible to get the number of arguments that were passed
into a script using ``args.length``.
