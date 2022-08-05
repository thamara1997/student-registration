let choices=new Array();

document.getElementById('course').addEventListener('change',function(e){
    e.preventDefault();
    let a = document.getElementById('course').value;
    console.log(a);

    let com = document.getElementById("combination");
    com.innerHTML="";

    if(a=="physical" || a=="bio"){
        for(let i=0;i<5; i++){
            let p = document.createElement("select");
            p.setAttribute('id','com'+(i+1));

            let o = document.createElement("option");
            let t = document.createTextNode("Choose Combination "+(i+1));
            o.appendChild(t)
            o.setAttribute("value","");
            o.disabled=true;
            o.selected=true;
            p.appendChild(o);
            
            let arraycom = [ 
                "1 : Biology**,Chemistry", 
                "2 : Biology*,Chemistry,Statistics", 
                "3 : Biology*,Chemistry,Computer Science", 
                "4 : Biology*,Chemistry,Physics",
                "8 : Biology*,Chemistry,Geology", 
                "15 : Chemistry,Geology,Physics",
                "18 : Chemistry,Mathematics**", 
                "19 : Chemistry,Mathematics*,Physics",
                "21 : Chemistry,Computer Science,Statistics", 
                "22 : Chemistry,Mathematics*,Statistics",
                "26 : Mathematics*,Computer Science,Statistics", 
                "27 : Physics,Mathematics**",
                "28 : Statistics, Mathematics**", 
                "31 : Physics,Mathematics*,Computer Science",
                "30 : Physics, Mathematics*,Statistics",
                "32 : Physics,Computer Science, Geology"
            
            ];

            for(let j = 0; j < arraycom.length; j++){
                let o = document.createElement("option");
                let t = document.createTextNode(arraycom[j]);
                o.appendChild(t);
                o.setAttribute('value',arraycom[j]);
                p.appendChild(o);
            }
            p.style.marginTop="10px";
            com.appendChild(p);

            let errdiv=document.createElement('div');
            errdiv.setAttribute('class','error');
            errdiv.setAttribute('id','com'+(i+1)+'Err');
            com.appendChild(errdiv);
        }
    }
})

//display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


// Defining a function to validate form 
function validateForm() {
    // e.preventDefault();
    var name = document.contactForm.name.value;
    var gender = document.contactForm.gender.value;
    var birthDate = document.contactForm.birthDate.value;
    var nic = document.contactForm.nic.value;
    var address = document.contactForm.address.value;
    var telephone = document.contactForm.telephone.value;
    var zscore = document.contactForm.zscore.value;
    var course = document.contactForm.course.value;

	//default value
    var nameErr = genderErr = dobErr = nicErr = addressErr= telephoneErr = zscoreErr = courseErr = combErr = choice =true;
    

    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var testcondition = /^[a-zA-Z\s\.]+$/;                
        if(testcondition.test(name) === false) {
            printError("nameErr", "Please enter a valid name without number");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    //validate date 
    if(birthDate == "") {
        printError("dobErr", "Please enter your birth date");
    } else {
        //var regex = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])/;                
        if((birthDate) === "") {
            printError("dobErr", "Please enter a valid date");
        } else {
            printError("dobErr", "");
            dobErr = false;
        }
    }

    //validate nic
    if(nic == "") {
        printError("nicErr", "Please Enter NIC Number");
    } else {
        printError("nicErr", "");
        nicErr = false;
    }

    //validate address
    if(address == "") {
        printError("addressErr", "Please Enter Your Address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }
    
    // Validate telephone number
    if(telephone == "") {
        printError("telephoneErr", "Please enter your telephone number");
    } else {
        var testtel = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if(testtel.test(telephone) === false) {
            printError("telephoneErr", "Please enter a valid 10 digit telephone number");
        } else{
            printError("telephoneErr", "");
            telephoneErr = false;
        }
    }

    //Validate Z-score
    if(zscore == "") {
        printError("zscoreErr", "Please Enter Z-Score Number");
    } else {
        printError("zscoreErr", "");
        zscoreErr = false;
    }
    
    // Validate course
    if(course == "") {
        printError("courseErr", "Please select your course");
    } else {
        printError("courseErr", "");

        if(course=='physical' || course=='bio'){
            for(let i=1;i<6;i++){
                let id='com'+i;
                let val=document.getElementById(id).value;
                if(val==''){
                    printError(id+"Err", "Please select your combination "+i);
                    choices[i-1]=false;
                }
                else{
                    printError(id+"Err", "");
                    choices[i-1]=true;
                }
            }

            for(let i=0;i<choices.length;i++){
                if(choices[i]==false){
                    choice=false;
                    break;
                }
            }

        }
        courseErr = false;
    }
    
    //check all errors
    if(nameErr==false && genderErr==false && dobErr==false && nicErr==false && addressErr==false && telephoneErr==false && zscoreErr==false && courseErr==false && choice==true) {
        return true;
    }
    else{
        return false;
    }
};


//submit confirmation 
document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    if(validateForm()==true){
        alert("Successfully Done");
    }
    else{
        console.log(validateForm());
    }
})


document.getElementById('reset').addEventListener('click',function(){
    let com = document.getElementById("combination");
    com.innerHTML=""; 
})