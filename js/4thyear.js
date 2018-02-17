var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;

var MON = ["Major Project","Major Project","CRYPTO (RD - IT2)","CRYPTO (RD - IT2)","RECESS","ERP (PKM/AS - SN2)",".Net Lab/UNIX Lab",".Net Lab/UNIX Lab",".Net Lab/UNIX Lab"]
var TUE = ["CCL (RJD - IT2)","CRYPTO (RD - IT2)","DMW (MS - IT2)","DMW (MS - IT2)","RECESS","Major Project","Major Project","Major Project","Major Project"]
var WED = ["FREE","FREE","ADAC","ADAC","RECESS","FREE","FREE","PR (RKC - S42)","PR (RKC - S42)"]
var THU = ["FREE","CCL (RJD - IT2)","DMW (MS - IT2)","DMW (MS - IT2)","RECESS","ERP (LS - IT2)",".Net Lab/UNIX Lab",".Net Lab/UNIX Lab",".Net Lab/UNIX Lab"]
var FRI = ["ERP (LS - IT2)","CCL (RJD - IT2)","Major Project","Major Project","RECESS","Major Project","Major Project","Major Project","Major Project"]



/*Script to put values in Table*/

document.getElementById("4thmon0").innerHTML=MON[0];
document.getElementById("4thmon1").innerHTML=MON[1];
document.getElementById("4thmon2").innerHTML=MON[2];
document.getElementById("4thmon3").innerHTML=MON[3];
document.getElementById("4thmon4").innerHTML=MON[4];
document.getElementById("4thmon5").innerHTML=MON[5];
document.getElementById("4thmon6").innerHTML=MON[6];
document.getElementById("4thmon7").innerHTML=MON[7];
document.getElementById("4thmon8").innerHTML=MON[8];
document.getElementById("4thTUE0").innerHTML=TUE[0];
document.getElementById("4thTUE1").innerHTML=TUE[1];
document.getElementById("4thTUE2").innerHTML=TUE[2];
document.getElementById("4thTUE3").innerHTML=TUE[3];
document.getElementById("4thTUE4").innerHTML=TUE[4];
document.getElementById("4thTUE5").innerHTML=TUE[5];
document.getElementById("4thTUE6").innerHTML=TUE[6];
document.getElementById("4thTUE7").innerHTML=TUE[7];
document.getElementById("4thTUE8").innerHTML=TUE[8];
document.getElementById("4thWED0").innerHTML=WED[0];
document.getElementById("4thWED1").innerHTML=WED[1];
document.getElementById("4thWED2").innerHTML=WED[2];
document.getElementById("4thWED3").innerHTML=WED[3];
document.getElementById("4thWED4").innerHTML=WED[4];
document.getElementById("4thWED5").innerHTML=WED[5];
document.getElementById("4thWED6").innerHTML=WED[6];
document.getElementById("4thWED7").innerHTML=WED[7];
document.getElementById("4thWED8").innerHTML=WED[8];
document.getElementById("4thTHU0").innerHTML=THU[0];
document.getElementById("4thTHU1").innerHTML=THU[1];
document.getElementById("4thTHU2").innerHTML=THU[2];
document.getElementById("4thTHU3").innerHTML=THU[3];
document.getElementById("4thTHU4").innerHTML=THU[4];
document.getElementById("4thTHU5").innerHTML=THU[5];
document.getElementById("4thTHU6").innerHTML=THU[6];
document.getElementById("4thTHU7").innerHTML=THU[7];
document.getElementById("4thTHU8").innerHTML=THU[8];
document.getElementById("4thFRI0").innerHTML=FRI[0];
document.getElementById("4thFRI1").innerHTML=FRI[1];
document.getElementById("4thFRI2").innerHTML=FRI[2];
document.getElementById("4thFRI3").innerHTML=FRI[3];
document.getElementById("4thFRI4").innerHTML=FRI[4];
document.getElementById("4thFRI5").innerHTML=FRI[5];
document.getElementById("4thFRI6").innerHTML=FRI[6];
document.getElementById("4thFRI7").innerHTML=FRI[7];
document.getElementById("4thFRI8").innerHTML=FRI[8];




 /* Script to get Current period and Next Period*/

if (day==0)
        {
            document.getElementById("4thAll").innerHTML = "<strong>HOLIDAY</strong>";
        }
    if (day==1)  
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("4thAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {

                if(time>=915 && time<=1004)
                {
                    document.getElementById("4thcurperiod").innerHTML = MON[0];
                    document.getElementById("4thnextperiod").innerHTML = MON[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[1];
                        document.getElementById("4thnextperiod").innerHTML = MON[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[2];
                        document.getElementById("4thnextperiod").innerHTML = MON[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[3];
                        document.getElementById("4thnextperiod").innerHTML = MON[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[4];
                        document.getElementById("4thnextperiod").innerHTML = MON[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[5];
                        document.getElementById("4thnextperiod").innerHTML = MON[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[6];
                        document.getElementById("4thnextperiod").innerHTML = MON[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[7];
                        document.getElementById("4thnextperiod").innerHTML = MON[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = MON[8];
                        document.getElementById("4thnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==2)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("4thAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                 if(time>=915 && time<=1004)
                {
                    document.getElementById("4thcurperiod").innerHTML = TUE[0];
                    document.getElementById("4thnextperiod").innerHTML = TUE[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[1];
                        document.getElementById("4thnextperiod").innerHTML = TUE[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[2];
                        document.getElementById("4thnextperiod").innerHTML = TUE[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[3];
                        document.getElementById("4thnextperiod").innerHTML = TUE[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[4];
                        document.getElementById("4thnextperiod").innerHTML = TUE[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[5];
                        document.getElementById("4thnextperiod").innerHTML = TUE[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[6];
                        document.getElementById("4thnextperiod").innerHTML = TUE[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[7];
                        document.getElementById("4thnextperiod").innerHTML = TUE[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = TUE[8];
                        document.getElementById("4thnextperiod").innerHTML = FREE;
                    }
            }

        }
    if (day==3)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("4thAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                if(time>=915 && time<=1004)
                {
                    document.getElementById("4thcurperiod").innerHTML = WED[0];
                    document.getElementById("4thnextperiod").innerHTML = WED[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[1];
                        document.getElementById("4thnextperiod").innerHTML = WED[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[2];
                        document.getElementById("4thnextperiod").innerHTML = WED[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[3];
                        document.getElementById("4thnextperiod").innerHTML = WED[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[4];
                        document.getElementById("4thnextperiod").innerHTML = WED[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[5];
                        document.getElementById("4thnextperiod").innerHTML = WED[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[6];
                        document.getElementById("4thnextperiod").innerHTML = WED[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[7];
                        document.getElementById("4thnextperiod").innerHTML = WED[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = WED[8];
                        document.getElementById("4thnextperiod").innerHTML = FREE;
                    }
            }
            
        }
    if (day==4)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("4thAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                if(time>=915 && time<=1004)
                {
                    document.getElementById("4thcurperiod").innerHTML = THU[0];
                    document.getElementById("4thnextperiod").innerHTML = THU[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[1];
                        document.getElementById("4thnextperiod").innerHTML = THU[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[2];
                        document.getElementById("4thnextperiod").innerHTML = THU[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[3];
                        document.getElementById("4thnextperiod").innerHTML = THU[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[4];
                        document.getElementById("4thnextperiod").innerHTML = THU[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[5];
                        document.getElementById("4thnextperiod").innerHTML = THU[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[6];
                        document.getElementById("4thnextperiod").innerHTML = THU[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[7];
                        document.getElementById("4thnextperiod").innerHTML = THU[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = THU[8];
                        document.getElementById("4thnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==5)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("4thAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
            if(time>=915 && time<=1004)
                {
                    document.getElementById("4thcurperiod").innerHTML = FRI[0];
                    document.getElementById("4thnextperiod").innerHTML = FRI[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[1];
                        document.getElementById("4thnextperiod").innerHTML = FRI[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[2];
                        document.getElementById("4thnextperiod").innerHTML = FRI[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[3];
                        document.getElementById("4thnextperiod").innerHTML = FRI[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[4];
                        document.getElementById("4thnextperiod").innerHTML = FRI[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[5];
                        document.getElementById("4thnextperiod").innerHTML = FRI[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[6];
                        document.getElementById("4thnextperiod").innerHTML = FRI[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[7];
                        document.getElementById("4thnextperiod").innerHTML = FRI[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = FRI[8];
                        document.getElementById("4thnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==6)
        {
            document.getElementById("4thAll").innerHTML = "<strong>HOLIDAY</strong>";
        }