function knowGender(){
    var userGender = $("[name = gender]").val();
    var date = $("[name = date]").val();
    var month = $("[name = month]").val();
    var century = $("[name = century]").val();
    var year = $("[name = year]").val();
    if (date <= 0 || date > 31 || month <= 0 || month > 12 ){
        console.log("You have inserted a wrong input. Kindly enter a valid birthdate.")}
        else {
            var dayOfWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
            if (userGender == "female" && dayOfWeek == 0){
                console.log("Your name is Akosua");}
                if (userGender == "female" && dayOfWeek == 1){
                    console.log("Your name is Adwoa");}
                    if (userGender == "female" && dayOfWeek == 2){
                        console.log("Your name is Abenaa");}
                        if (userGender == "female" && dayOfWeek == 3){
                            console.log("Your name is Akua");}
                            if (userGender == "female" && dayOfWeek == 4){
                                console.log("Your name is Yaa");}
                                if (userGender == "female" && dayOfWeek == 5){
                                    console.log("Your name is Afua");}
                                    if (userGender == "female" && dayOfWeek == 6){
                                        console.log("Your name is Ama");}
                                        if (userGender == "male" && dayOfWeek == 0){
                                            console.log("Your name is Kwasi");}
                                            if (userGender == "male" && dayOfWeek == 1){
                                                console.log("Your name is Kwadwo");}
                                                if (userGender == "male" && dayOfWeek == 2){
                                                    console.log("Your name is Kwabena");}
                                                    if (userGender == "male" && dayOfWeek == 3){
                                                        console.log("Your name is Kwaku");}
                                                        if (userGender == "male" && dayOfWeek == 4){
                                                            console.log("Your name is Yaw");}
                                                            if (userGender == "male" && dayOfWeek == 5){
                                                                console.log("Your name is Kofi");}
                                                                if (userGender == "male" && dayOfWeek == 6){
                                                                    console.log("Your name is Kwame");}
            }
        }
$("#addAkanName").click(knowGender);                                         