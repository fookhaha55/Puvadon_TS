let t1: [number,string,number,number,number,string][];
t1= [
    [1001,"Fook",1,9000,2,"Rice cooker"],
    [1001,"JR",2,15000,5,"Microwave Oven"],
    [1001,"Bas",3,10000,6,"Microwave Oven"],

];

t1.forEach((s)=>{
    s[4] = s[3] * s[4];
    console.log(`ID: ${s[0]} Name: ${s[1]}, workYear: ${s[2]}, Salary: ${s[3]}, bonus: ${s[4]}, gift: ${s[5]}`);
});
