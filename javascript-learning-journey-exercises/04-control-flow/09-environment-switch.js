/* Create environment selection: 
QA 
UAT 
Production
*/

environment = "Production"

switch (environment)
{
    case "QA" :
        console.log("QA Environment Selected!");
        break;
    case "UAT" :
        console.log("UAT Environment Selected!");
        break;
    case "Production" :
        console.log("Production Environment Selected!");
        break;
    default:
        console.log("Unsupported Environment Selected!")
}