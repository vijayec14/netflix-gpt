export const checkValidData = (email,password) =>{
   const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
   const isPasswordValid =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)
   if(!isEmailValid) return "Email ID Not Valid"
   if(!isPasswordValid) return "Password is Not Valid"
   return null;
}