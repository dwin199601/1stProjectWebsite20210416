function  calculateTotal() {

    //let bcOption = document.getElementById("BCoption").value;
    //let SelValue = document.getElementById("selectvalueid").value;
    //let var1="";
    let bcOption = document.getElementById("BCoption").selected;
    let SelValue = document.getElementById("selectvalueid").selected;
    let ABoption = document.getElementById("ABoption").selected;

    let empAnualIncome = document.getElementById("empanincome").value;
    var2=parseFloat(empAnualIncome, 10);

    let selfEmplIncome = document.getElementById("selfanincome").value;
    var3 =parseFloat(selfEmplIncome, 10);

    let incomeTaxPaid = document.getElementById("incomePaid").value;
    var4 = parseFloat(incomeTaxPaid, 10);

    let selfEmpExpance  = document.getElementById("selfexpence").value;
    var5 =parseFloat(selfEmpExpance, 10);

    let totalIncome;
    let federalTax=0;
    let provTax=0;
    let totalTaxToPay=0;
    let totalTaxPercent=0;
    let textEnterValue = 'Enter the number >0';
    
    if(bcOption){ 
        if(empAnualIncome ==='' || var2 < 0){
            alert("Employment Annual Income must be entered (if it's zero, enter 0) and the number must be > 0");
           
            }
        else if(selfEmplIncome ==='' || var3<0){
            alert("Self-employment Annual Income must be entered (if it's zero, enter 0) and the number must be > 0");
        }
        else if(incomeTaxPaid === '' || var4 < 0 ){
            alert("Income taxes paid must be entered (if it's zero, enter 0) and the number must be > 0");
        }
        else if(selfEmpExpance === '' || var5 < 0){
            alert("Self-employment Expenses: must be entered (if it's zero, enter 0) and the number must be > 0");
        }
    
    else {
    totalIncome = var2+(var3 - var5)-var4;
    document.getElementById("totalIncome").setAttribute("disable", false);
    document.getElementById("totalIncome").value = totalIncome.toLocaleString('en-US', {
    style: 'currency', currency: 'USD',}); 
    alert("The total anual BC income was calculated");

    
    if(totalIncome <=13808){
        federalTax = 0;
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value =federalTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome >13808 && totalIncome<=49020){
        federalTax=15/100;
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value =federalTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
     else if (totalIncome > 49020 && totalIncome <= 98040){
        federalTax = 20.5/100;
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome > 98040 && totalIncome <= 151978 ) {
        federalTax = 26/100;
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if( totalIncome > 151978 && totalIncome <= 216511){
        federalTax = 29/100;
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if( totalIncome > 216511){
        federalTax = 33/100;
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else {
        var sometext = "Cannot count federal tax";
        document.getElementById("Federaltax").setAttribute("disable", false);
        document.getElementById("Federaltax").value = sometext;
    }
    // Provincial Tax For BC
    if( totalIncome <= 11070){
        provTax =0;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome > 11070 && totalIncome <=42184){
        provTax = 5.06/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome>42185 && totalIncome <= 84369){
        provTax = 7.7/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome>84370 && totalIncome <=96866){
        provTax = 10.5/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome> 96866 && totalIncome <=117623){
        provTax = 12.29/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome>117623 && totalIncome<=159483){
        provTax = 14.7/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if (totalIncome>159483 && totalIncome <=222420){
        provTax = 16.8/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome > 222420){
        provTax = 20.5/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else {
        var sometextTwo = "Cannot count provincial tax";
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = sometextTwo;
    }
    totalTaxPercent = provTax + federalTax;
    
    document.getElementById("TaxToPayinPercent").setAttribute("disable", false);
        document.getElementById("TaxToPayinPercent").value = totalTaxPercent.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});

    totalTaxToPay = (federalTax + provTax)* totalIncome;
   
    document.getElementById("TaxToPay").setAttribute("disable", false);
    document.getElementById("TaxToPay").value = totalTaxToPay.toLocaleString('en-US', {
    style: 'currency', currency: 'USD',}); 
    
    
}

    


    }





     else if(ABoption){
        if(empAnualIncome ==='' || var2 < 0){
            alert("Employment Annual Income must be entered (if it's zero, enter 0) and the number must be > 0");
           
            }
        else if(selfEmplIncome ==='' || var3<0){
            alert("Self-employment Annual Income must be entered (if it's zero, enter 0) and the number must be > 0");
        }
        else if(incomeTaxPaid === '' || var4 < 0 ){
            alert("Income taxes paid must be entered (if it's zero, enter 0) and the number must be > 0");
        }
        else if(selfEmpExpance === '' || var5 < 0){
            alert("Self-employment Expenses: must be entered (if it's zero, enter 0) and the number must be > 0");
        }
    
       else{

        totalIncome = var2+(var3 - var5)-var4;
        document.getElementById("totalIncome").setAttribute("disable", false);
        document.getElementById("totalIncome").value = totalIncome.toLocaleString('en-US', {
        style: 'currency', currency: 'USD',}); 
        alert("The total anual AB income was calculated");
        //federal tax for alberta

        if(totalIncome <=13808){
            federalTax = 0;
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value =federalTax.toLocaleString('en-us', {
                style: 'percent', minimumSignificantDigits: 1});
        }
        else if(totalIncome >13808 && totalIncome<=49020){
            federalTax=15/100;
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value =federalTax.toLocaleString('en-us', {
                style: 'percent', minimumSignificantDigits: 1});
        }
         else if (totalIncome > 49020 && totalIncome <= 98040){
            federalTax = 20.5/100;
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
                style: 'percent', minimumSignificantDigits: 1});
        }
        else if(totalIncome > 98040 && totalIncome <= 151978 ) {
            federalTax = 26/100;
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
                style: 'percent', minimumSignificantDigits: 1});
        }
        else if( totalIncome > 151978 && totalIncome <= 216511){
            federalTax = 29/100;
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
                style: 'percent', minimumSignificantDigits: 1});
        }
        else if( totalIncome > 216511){
            federalTax = 33/100;
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value = federalTax.toLocaleString('en-us', {
                style: 'percent', minimumSignificantDigits: 1});
        }
        else {
            var sometext = "Cannot count federal tax";
            document.getElementById("Federaltax").setAttribute("disable", false);
            document.getElementById("Federaltax").value = sometext;
        }

        //provincial tax for AB

     if(totalIncome>0 && totalIncome <= 131220){
        provTax = 10/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value =provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if (totalIncome> 131220 && totalIncome<=157464){
        provTax = 12/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value =provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome>157464 && totalIncome<=209952){
        provTax = 13/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value =provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if(totalIncome>209952 && totalIncome <=314928){
        provTax = 14/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value =provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else if (totalIncome> 314928) {
        provTax = 15/100;
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value =provTax.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});
    }
    else {
        var sometext = "Cannot count federal tax";
        document.getElementById("ProvTax").setAttribute("disable", false);
        document.getElementById("ProvTax").value = sometext;
    }
    totalTaxPercent = provTax + federalTax;
    
    document.getElementById("TaxToPayinPercent").setAttribute("disable", false);
        document.getElementById("TaxToPayinPercent").value = totalTaxPercent.toLocaleString('en-us', {
            style: 'percent', minimumSignificantDigits: 1});

    totalTaxToPay = (federalTax + provTax)* totalIncome;
   
    document.getElementById("TaxToPay").setAttribute("disable", false);
    document.getElementById("TaxToPay").value = totalTaxToPay.toLocaleString('en-US', {
    style: 'currency', currency: 'USD',}); 
 }
}
 else {
    alert("Select province!");
 }


}






function clearEntries(){
    var empty = " ";
    document.getElementById("totalIncome").value = empty;
    document.getElementById("empanincome").value = empty;
    document.getElementById("selfanincome").value = empty;
    document.getElementById("selfexpence").value = empty;
    document.getElementById("incomePaid").value =empty;
    document.getElementById("Federaltax").value =empty;
    document.getElementById("ProvTax").value =empty;
    /*document.getElementById("TaxToPay").value =empty;*/
    document.getElementById("TaxToPayinPercent").value = empty;
    alert("The form was reset!");
}
