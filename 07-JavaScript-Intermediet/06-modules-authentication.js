export default function validateLoginData(email, password){
    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordValidator = /^[a-zA-Z0-9!@#$%^&*]{8,}$/
    if(emailValidator.test(email) && passwordValidator.test(password)){
        alert("Welcome to The Jungle")
    }else{
        if((emailValidator.test(email))){
            alert("tolong masukan password sesuai ketentuan")
        }else if(passwordValidator.test(password)) {
            alert("tolong masukan email yang valid")
        } else{
            alert("tolong masukan email dan password yang valid")
        }
    }
}