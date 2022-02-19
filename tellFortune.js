function selectRandomly(array) {
    const randomIndex = Math.floor(Math.random() *array.length);
    return array[randomIndex];
}



   function tellFortune(numKids, partnerNames, locations, jobTitles) {
     var future = 'You will be a ' + selectRandomly(jobTitles) + ' in ' + selectRandomly(locations) + ' and married to ' +
     selectRandomly(partnerNames) + ' ' + ' with ' + selectRandomly(numKids) + ' kids.';
     return future;
   }
   
   function main() {
     const numKids = [
       1 , 2 , 3 , 4
     ];
   
     const partnerNames = [
       "Hana" , "Nayla" , "Alia" , "Aya"
     ];
   
     const locations = [
       "Brazil" , "Spain" ,"Netherland" ,"USA"
     ];
   
     const jobTitles = [
       "Manager" , "Engineer" , "Programmer" , "Entrepreneur"
     ];
   
     console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
     console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
     console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
   }
main();