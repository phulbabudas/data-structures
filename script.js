//write a function get grade (score) 
function getGrade(score){
    if(score>=90 && score<=100)return"A";
     if (score >= 80 && score <= 89)return"B";
     if(score >= 70 && score <= 80) return"c";
     if (score >= 60 && score <= 70) return"d";
     if (score >= 50 && score <= 55) return"e";
     if (score >= 0 && score <= 32) return"fail";
    
        return"invakid marks "
    }

  console.log(getGrade(55))