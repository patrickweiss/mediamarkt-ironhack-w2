console.log("Programm funktioniert");

const bankkontenObjectArray = [
    {
        kontoInhaberString: "Jakob",
        kontoStandNumber: 127356.67
    },
    {
        kontoInhaberString: "Cristiano",
        kontoStandNumber: 80555.67
    },
    {
        kontoInhaberString: "Patrick",
        kontoStandNumber: -36564.56
    }
]

//convert to euro

const einEuroInDMNumber = 1.97;
/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    console.log(einDMBankkontenObjectArray);
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    return ergebnisArray;
}
*/

/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    console.log(einDMBankkontenObjectArray);
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    for (kontonummer=0;kontonummer<einDMBankkontenObjectArray.length;kontonummer++){
        console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(einDMBankkontenObjectArray[kontonummer]));
        const aktuellesDMKonto = einDMBankkontenObjectArray[kontonummer];
        einDMBankkontenObjectArray[kontonummer].euroKontoStandNumber = aktuellesDMKonto.kontoStandNumber / einEuroInDMNumber;
        console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(einDMBankkontenObjectArray[kontonummer]));
     
    }
    return ergebnisArray;
}
*/

/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    ergebnisArray.forEach(
        function(aktuellesDMKontoObject,kontonummer){
            console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(aktuellesDMKontoObject));
            einDMBankkontenObjectArray[kontonummer].euroKontoStandNumber = aktuellesDMKontoObject.kontoStandNumber / einEuroInDMNumber;
            console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(einDMBankkontenObjectArray[kontonummer]));         
        }
    )
    return ergebnisArray;
}
*/

/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    ergebnisArray.forEach(
        (aktuellesDMKontoObject,kontonummer) => {
            console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(aktuellesDMKontoObject));
            einDMBankkontenObjectArray[kontonummer].euroKontoStandNumber = aktuellesDMKontoObject.kontoStandNumber / einEuroInDMNumber;
            console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(einDMBankkontenObjectArray[kontonummer]));         
        }
    )
    return ergebnisArray;
}
*/


function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray) {
    const ergebnisArray = einDMBankkontenObjectArray.map(
        (aktuellesDMKontoObject) => {
            const neuesEuroKonto = {
                kontoInhaberString: aktuellesDMKontoObject.kontoInhaberString,
                dmKontoStandNumber: aktuellesDMKontoObject.kontoStandNumber,
                euroKontoStandNumber: aktuellesDMKontoObject.kontoStandNumber / einEuroInDMNumber
            }
            console.log(neuesEuroKonto);
            return neuesEuroKonto;
        }
    )
    return ergebnisArray;
}


const euroBankkontenObjectArray = erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(bankkontenObjectArray);

console.log("Array mit Eurokonten Objekten:" + JSON.stringify(euroBankkontenObjectArray));