let students_data=[
    {name:"atif", password: "atif786" , email:"atif786@gmail.com"},
    {name:"ehtesham", password: "ehtesham786", email:"ehtesham786@gmail.com"},
    {name:"abbass", password: "abbass786", email:"abbass786@gmail.com"},
    {name:"burhan", password: "burhan786", email:"burhan786@gmail.com"},
    {name:"hamza", password: "hamza786", email:"hamza786@gmail.com"},
    {name:"murtaza", password: "murtaza786", email:"murtaza786@gmail.com"},
    {name:"manan", password: "manan786", email:"manan786@gmail.com"},
    {name:"laiba", password: "laiba786", email:"laiba@gmail.com"},
    {name:"seerat", password: "seerat786", email:"seerat786@gmail.com"},
    {name:"tahira", password: "tahira786", email:"tahira786@gmail.com"}
]
let full_user_name=''
let full_password=''
let user_name=document.querySelector('#username')
user_name.addEventListener('input', typeUserName)
function typeUserName(event){
    full_user_name = event.target.value
    return full_user_name
}
let password=document.querySelector('#password')
password.addEventListener('input', typePassword)
function typePassword(event){
    full_password= event.target.value
    return full_password
}
let log_in=document.querySelector('#login')
log_in.addEventListener('click', karwaoLogIn)
function karwaoLogIn(){
    for(let i=0;i<students_data.length;i++){
        if(full_user_name==students_data[i].email && full_password==students_data[i].password){
            alert(`Khush Amdeed ${students_data[i].name}`)
            break;
        }
        else if((full_user_name==students_data[i].email) && (full_password!=students_data[i].password)){
            alert("Your password is incorrect.")
            break;
        }
        else if((full_user_name!=students_data[i].email) && (full_password==students_data[i].password)){
            alert("Your username is not correct")
            break;
        }
        else if(full_user_name!=students_data[i].email && full_password!=students_data[i].password && i==students_data.length-1){
            alert("You are not registered. Get lost")
        }
    }
    
}