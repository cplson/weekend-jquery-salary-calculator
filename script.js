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
let totalCosts = 0;

$('document').ready(onReady);

//function to run when the the DOM is ready to be manipulated
function onReady(){
    //Listener to submit form information
    $('#submitBtn').on('click', submitForm);

    // Listener to remove employee from allEmployees array on 
    // Remove button click
    $('#employeesTable').on('click', '.removeBtn', removeEmployee);
}

/*
*Collect the form information 
*Store the information to calculate monthly costs 
*append information to the DOM and clear the input fields. 
*Using the stored information, 
 calculate monthly costs and append this to the to DOM. 
    *~If the total monthly cost exceeds $20,000, 
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
    //console.table(employee);
    
    //Push employee into allEmployees
    allEmployees.push(employee);

    // Clear input fields
    clearFields();

    //Calculate costs
    calculateCost();

    // render the page
    render();
}

function removeEmployee(){
    //Test removeEmployee entry
    console.log('Entered removeEmployee');
}

//Function to render updated employees to the DOM
function render(){
    // Test function entry
    console.log('Entered render');

    // Empty the employees table
    $('.employeeRow').empty();

    // shows the employee table data and monthly cost div,
    // unless there are no employees in the array
    if(allEmployees.length <= 0){
        $('#employeesTable').hide();
        $('#costDiv').hide();
    }
    else{
        // If total costs exceeds $20,000 then turns the
        // background of the total cost to red
        if(totalCosts > 20000){
            $('#totalCost').css('background-color', 'red');
        }
        else{
            $('#totalCost').css('background-color', 'white');
        }
        $('#employeesTable').show();
        $('#costDiv').show();
    }

    //Render every object in the allEmployees array
    for(let employee of allEmployees){
        console.log(employee);
        $('#employeesTable').append(`
            <tr class="employeeRow">
                <td class="employeeIdData">${employee.id}</td>
                <td class="firstNameData">${employee.first}</td>
                <td class="lastNameData">${employee.last}</td>
                <td class="jobTitleData">${employee.title}</td>
                <td class="annualSalaryData">${employee.salary}</td>
                <td><button class="removeBtn">Remove</button><td>
            </tr>
        `);
    }

    // Updates the Dom with the current monthly cost
    $('#totalCost').text(`$${totalCosts}`);
}

// Funcion to clear input fields
function clearFields(){
    $(`#firstNameInput`).val("");
    $(`#lastNameInput`).val("");
    $(`#idNumberInput`).val("");
    $(`#titleInput`).val("");
    $(`#salaryInput`).val("");
}

// Calculate cost
function calculateCost(){
    // Test function entry
    console.log('Entered calculateCost');
    // Reset the costs
    totalCosts = 0;

    // iterate through the array and find the total cost
    for(let employee of allEmployees){
        totalCosts += Number(employee.salary);
    }

    //test cost
    console.log(totalCosts);
}