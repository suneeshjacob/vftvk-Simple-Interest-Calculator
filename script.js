function compute()
{
    //p = document.getElementById("principal").value;
    var flag = 0;
    var principal = document.getElementById("principal").value;
    if (isNaN(principal)==false)
    {
        if (parseInt(principal)>0)
        {
            var rate = document.getElementById("rate").value;
            var years = document.getElementById("years").value;
            var interest = principal * years * rate /100;
            var year = new Date().getFullYear()+parseInt(years);
            //var fullrate = parseInt(principal) + parseInt(interest);
            var outputString = 'If you deposit <mark>'+principal.toString()+'</mark>,<br/>at an interest rate of <mark>'+rate.toString()+'%</mark>.<br/>You will receive an amount of <mark>'+interest.toString()+'</mark>,<br/>in the year <mark>'+year.toString()+'</mark>';
            document.getElementById("result").innerHTML=outputString;
        }
        else
        {
            flag=1;
        }
    }
    else
    {
        flag=1
    }
    if (flag==1)
    {
        window.alert('Enter a positive number');
        document.getElementById("principal").focus();
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
}

