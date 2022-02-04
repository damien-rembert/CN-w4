// @ts-check


// declaring multiple variables at once
let name_of_the_var, name_of_another_var, name_of_third_var;
// assigning values

name_of_the_var = (number) => {
    console.log(number * 2);
};

name_of_another_var = () => {
    console.log("second variable");
};

// name_of_third_var = "just a string";
name_of_third_var = () => {
    console.log("third variable");
};



module.exports = {
    name_of_the_var,
    name_of_another_var,
    name_of_third_var
}
