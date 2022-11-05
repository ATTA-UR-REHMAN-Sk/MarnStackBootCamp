const obj = {
    name : 'xyz',
    uni : 'abc',
    percentageCGPA: (obtMarks, fullMarks) => {
         return (obtMarks/fullMarks)*100;
    },
};

let percentag = obj.percentageCGPA(80,100);
console.log("Percentage ",percentag);