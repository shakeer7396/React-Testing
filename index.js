//This is the example for testing manually with code for example

const getFullName= (fname,lname)=>{
    return `${fname} ${lname}`
}

const actualfname =getFullName('Bruce', 'Lee')
const expectedfname ='BruceLee'//put space between it not shows error

if(actualfname!==expectedfname){
    throw new Error(`${actualfname} is not equal to ${expectedfname}`)
}