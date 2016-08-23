export default function profiler(func) {
    return function() {
        let start = performance.now(),
            // as I am not passing arguments so using it directly
            // else use it like this let args = Array.from(arguments))
            returnVal = func.apply(this, arguments), 
            end = performance.now(),
            duration = Number(end - start).toFixed(4),
            funcName = func.name;

        console.log(`Time take for ${funcName} was ${duration} ms`);
        return returnVal;
    };
}
