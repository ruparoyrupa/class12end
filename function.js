/**
 *  Age calculator for user
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */




function ageCal( name , year ) {
    let date = new Date() ;
    age = date.getFullYear() - year ;

    return`<p class = "alert alert-success"> Hi, ${name} you are ${age} years old & ${ageCheakStatus(age)} .</p> `

}


/**
 * Age test.....
 * @param {*} age 
 * @returns 
 */

function ageCheakStatus( age ) {
    
    if ( age > 0 && age < 10 ) {
        return 'You are baby'
    }else if ( age >= 10 && age < 18 ) {
        return 'You are keshore'
    } else if ( age >= 18 && age < 40 ) {
        return 'You are Young'
    }  else if ( age > 40 ) {
        return 'You are Old man'
    }

}



/**
 * Marriage cheak calculator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function marriageCheak( name , year ) {
    let date = new Date() ;
    age = date.getFullYear() - year ;

    let ageStatus = marriageCheakStatus(age)  ;
   
   
    return`<p class = "alert alert-${ageStatus.status}"> Hi, ${name} you are ${age} years old & ${ageStatus.name} .</p> `

}



function marriageCheakStatus( age ) {
    if ( age > 0 && age < 18 && gender.value == 'Female') {
      return {
          name : 'Note the age of marriage',
          status : 'danger'

      } ; 
    }else if ( age >= 18 && gender.value == 'Female' ) {
        return {
            name : 'The age of marriage has come',
            status : 'success'
        } ;
      
    }else if ( age > 0 && age < 21 && gender.value == 'Male') {
        return {
            name : 'Note the age of marriage',
            status : 'danger'
  
        } ; 
    }else if (age >= 21 && gender.value == 'Male' ) {
        return {
            name : 'The age of marriage has come',
            status : 'success'
        } 
      
    }
        

    }





    