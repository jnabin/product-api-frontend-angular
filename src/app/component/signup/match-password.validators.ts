import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MatchPasswordValidators{
    static PasswordShouldMatch(control:AbstractControl):ValidationErrors|null{
        let password = control.get('password');
        let confirmPassword = control.get('confirmpassword');
        if(password?.value !== confirmPassword?.value){
            return{passwordShouldMatch:true};
        }else{
            return null;
        }
    }
}