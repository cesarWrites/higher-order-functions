//Higher order functions
//forEach
//filter
//map
//sort
//reduce

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
  }

  companies.forEach(function(company){
    console.log(company.name);
  });

  /*const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
  });*/

  const canDrink = ages.filter(age => age >= 21);

  console.log(canDrink);

 /* const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
  });
   console.log(retailCompanies);*/

  const retailCompanies = companies.filter(company => company.category === 'Retail');
  console.log(retailCompanies);


  //Get comapnies created before the 1980s
  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  console.log(eightiesCompanies);

  //companies that lasted ten or more years
  const aboveTen = companies.filter(company => ((company.end - company.start) >= 10));
  console.log(aboveTen);

  //create array of company names

  const companyNames = companies.map(function(company){
    return company.name;
  });

  console.log(companyNames);

  const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  console.log(testMap);

  //square ages
  const agesSquare = ages.map(age => Math.sqrt(age));
  const ageTimesTwo = ages.map(age => age * 2);
  console.log(ageTimesTwo);
  console.log(agesSquare);

  const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
  console.log(ageMap);
  
  //sort companies by start year
  const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
  });

  console.log(sortedCompanies);


  //sort ages
  const sortAges = ages.sort((a,b) => b - a);

  console.log(sortAges);

//use reduce to add the ages
/*let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}

const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);*/

const ageSum = ages.reduce((total, age)=> total +age, 0);
console.log(ageSum);

//sum of companies
const totalYears = companies.reduce((total, company)=>total + (company.end - company.start), 0 );
console.log(totalYears);

//combine methods
const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b)=> a -b)
.reduce((a,b) => a + b, 0);

console.log(combined);
