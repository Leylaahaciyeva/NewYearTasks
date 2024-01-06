
let array = [1,2,3,4,5,6];


const Monotonic = (array) => {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            increasing = false;
        }
    }
    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < array[i + 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
}


if (Monotonic(array))
   console.log(true);
else
   console.log(false);