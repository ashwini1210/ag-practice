import {People} from "./interface_export"

class trangle implements People{
     
     Simple()
     {
         for( var i=5;i>=1;i--) {
        var ouput = " ";
        
    for(var j=i;j>=1;j--){
        ouput+= " *";
        
    }
    console.log(ouput)
}
     }
    
}
 var tran= new trangle();
 tran.Simple();