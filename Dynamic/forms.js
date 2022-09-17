let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

let workingStatusEl = document.getElementById("status")
workingStatusEl.addEventListener("change", function(event){
    formData.status = event.target.value;
})

let genderMaleEl = document.getElementById("genderMale")
genderMaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value
})

let genderFemaleEl = document.getElementById("genderFemale")
genderFemaleEl.addEventListener("change", function(event){
    formData.gender = event.target.value
})

let nameEl = document.getElementById("name");
let errorMessageEl = document.getElementById("errorMessage");
nameEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        errorMessageEl.textContent = "Required*";
    }
    else {
        errorMessageEl.textContent = "";
    }
    formData.name = event.target.value
});

let emailEl = document.getElementById("email");
let emailErrorMessageEl = document.getElementById("emailErrorMessage");
emailEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        emailErrorMessageEl.textContent = "Required*";
    }
    else {
        emailErrorMessageEl.textContent = "";
    }
    formData.email = event.target.value
});


function validateFormData() {
    let {name, email} = formData
    if (name === "") {
        errorMessageEl.textContent = "Required*"
    }
    if (email === "") {
        emailErrorMessageEl.textContent = "Required*";
    }
}

function submitFormData(){
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7001d07bd880ead4324d3d72d6e6caf29e4869ab5ef1ef021642d3a52b2cd516"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users"
    fetch(url, options)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        if (jsonData.code === 422) {
            if(jsonData.data[0].message === "has already been taken") {
                emailErrorMessageEl.textContent = "Email Already Exists!"
            }
        }

    })
}

let myFromEl = document.getElementById("myForm");
myFromEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});


