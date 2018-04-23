//This will generate an error

try {
    async_method('Invalid_arguments_generates_error'), (err, data) => {
        if (err) {
            throw err;
        }
    });
} catch (err) {
    console.error(err);
}
/**This is a very common mistake with beginners. This will not work because
the method is asynchrounous. The time by which the callback will be
called, surrounding code already completed its execution and exited.
Throwing an error inside the callback can leads to the
crashing of node.js process in most of the cases. */