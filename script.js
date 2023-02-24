/*
Assignment
*The application should have an input form that collects employee 
first name, last name, ID number, job title, annual salary.



Create a delete button that removes an employee from the DOM. For 
Base mode, it does not need to remove that Employee's salary from 
the reported total.
*/
// Global Variables
let allEmployees = [];

$('document').ready(onReady);

//function to run when the the DOM is ready to be manipulated
function onReady(){
    //Listener to submit form information
    $('#submitBtn').on('click', submitForm);
}

/*
*Collect the form information 
*Store the information to calculate monthly costs 
-append information to the DOM and clear the input fields. 
-Using the stored information, 
calculate monthly costs and append this to the to DOM. 
    ~If the total monthly cost exceeds $20,000, 
    add a red background color to the total monthly cost.
 */
function submitForm(){
    // Test function entry
    console.log('Entered submitForm');
    // Create the variables to store employee info
    const firstName = $('#firstNameInput').val();
    const lastName = $('#lastNameInput').val();
    const IdNumber = $('#idNumberInput').val();
    const title = $('#titleInput').val();
    const salary = $('#salaryInput').val();

    let employee = {
        first: firstName,
        last: lastName,
        id: IdNumber,
        title: title,
        salary: salary
    }

    // test form object
    console.table(employee);

    render();
}

//Function to render updated employees to the DOM
function render(){
    // Test function entry
    console.log('Entered render');
    // Empty the employee 

}