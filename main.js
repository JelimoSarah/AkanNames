let userForm = document.querySelector("#add-form")
maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
userForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    let gender = userForm.gender.value
    let finalDayOfWeek = knowAkanName ()
    if (gender == "male"){
        document.querySelector("#add-form").style.display="none"
        document.querySelector("#akanNameFinal").textContent="Hey! Your Akan name is ".concat(maleNames[finalDayOfWeek])
    } 
    else {
        document.querySelector("#add-form").style.display="none"
        document.querySelector("#akanNameFinal").textContent="Hey! Your Akan name is ".concat(femaleNames[finalDayOfWeek])
    }
})

function knowAkanName (){
    let DD = userForm.date.value 
    let MM = userForm.month.value
    let CC = userForm.century.value
    let YY = userForm.year.value
    let dayOfWeek = (( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7).toFixed()
    return dayOfWeek

}
// function knowGender() {
//     var userGender = $("[name = gender]").val();
//     var date = $("[name = date]").val();
//     var month = $("[name = month]").val();
//     var century = $("[name = century]").val();
//     var year = $("[name = year]").val();
//     if (date <= 0 || date > 31 || month <= 0 || month > 12) {
//         console.log("You have inserted a wrong input. Kindly enter a valid birthdate.")
//     }
//     else {
//         var dayOfWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
//         if (userGender == "female" && dayOfWeek == 0) {
//             console.log("Your name is Akosua");
//         }
//         if (userGender == "female" && dayOfWeek == 1) {
//             console.log("Your name is Adwoa");
//         }
//         if (userGender == "female" && dayOfWeek == 2) {
//             console.log("Your name is Abenaa");
//         }
//         if (userGender == "female" && dayOfWeek == 3) {
//             console.log("Your name is Akua");
//         }
//         if (userGender == "female" && dayOfWeek == 4) {
//             console.log("Your name is Yaa");
//         }
//         if (userGender == "female" && dayOfWeek == 5) {
//             console.log("Your name is Afua");
//         }
//         if (userGender == "female" && dayOfWeek == 6) {
//             console.log("Your name is Ama");
//         }
//         if (userGender == "male" && dayOfWeek == 0) {
//             console.log("Your name is Kwasi");
//         }
//         if (userGender == "male" && dayOfWeek == 1) {
//             console.log("Your name is Kwadwo");
//         }
//         if (userGender == "male" && dayOfWeek == 2) {
//             console.log("Your name is Kwabena");
//         }
//         if (userGender == "male" && dayOfWeek == 3) {
//             console.log("Your name is Kwaku");
//         }
//         if (userGender == "male" && dayOfWeek == 4) {
//             console.log("Your name is Yaw");
//         }
//         if (userGender == "male" && dayOfWeek == 5) {
//             console.log("Your name is Kofi");
//         }
//         if (userGender == "male" && dayOfWeek == 6) {
//             console.log("Your name is Kwame");
//         }
//     }
// }
// $("#addAkanName").click(knowGender);                                         