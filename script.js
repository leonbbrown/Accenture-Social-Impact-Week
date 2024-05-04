

let userData = [];
let interest_rate = 3.5
// wait for content to be loaded
document.addEventListener('DOMContentLoaded', function() {


    document.getElementById('export').onclick = function(event){
        event.preventDefault();

        
        // fetch values
        let first_name = document.getElementById('first_name').value;
        let last_name = document.getElementById('last_name').value;
        let salary = document.getElementById('salary').value;
        let loan_amount = document.getElementById('loan_amount').value;
        let property = document.getElementById('property').value;
        let years = document.getElementById('years').value;
        let address = document.getElementById('address').value;
        let postcode = document.getElementById('postcode').value;
        if (!first_name || !last_name || !salary || !loan_amount || !property || !years || !address || !postcode) {
            // Alert the user to fill in all required fields
            alert("Please fill in all required fields.");
            return; // Exit the function if fields are not filled
        }
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'KqJXT6rwi/Wk21TxmQbMtw==yPee1oAVAAbrkrAx' }
        
        };
        // Mortgage API
        let url = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loan_amount}&interest_rate=3.5&duration_years=${years}`
        fetch(url,options)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); 

        

        // TURN USER INPUT INTO ARRAY
        let user = {
            first_name: first_name,
            last_name: last_name,           
            salary: salary,
            loan_amount: loan_amount,
            property: property,
            years: years,
            address: address,
            postcode: postcode
        };
        // adds data to userData array
        userData.push(user);

        // ******** CONVERT TO CSV ******** //

        // iterates over each 
        // userdata[0] access first obj
        // obj.val turns into array and adds , making it csv format i.e first_name, last_name, etc...
        let csvData = Object.values(userData[0]).join(',');
        let tracker = 'first_name, last_name, salary, loan_amount, property_price, duration_years, address, postcode';
        let combinedData = tracker + '\n' + csvData;
        console.log(combinedData)


        // create blob to create the download - takes csvdata array as first param and type of data as second i.e csv
        let blob = new Blob([combinedData], { type: 'text/csv' });
        ;

        // create dl link
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'userData.csv';

        // click dl link
        link.click();
    };


    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        let userData = [{
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            salary: document.getElementById('salary').value,
            loan_amount: document.getElementById('loan_amount').value,
            property: document.getElementById('property').value,
            years: document.getElementById('years').value,
            address: document.getElementById('address').value,
            postcode: document.getElementById('postcode').value
        }];
        console.log(userData);
    });
});