var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;

var MON = ["FREE","OS (SK - IT1)","OS (SK - IT1)","SMP (SUK - IT1)","RECESS","TOC (RT -IT1)","TOC (RT -IT1)","PCS (AKS - IT1)","PCS (AKS - IT1)"]
var TUE = ["FREE","SMP (SUK - IT1)","CO (SP - IT1)","CO (SP - IT1)","RECESS","TOC (RT -IT1)","TOC (RT -IT1)","PDD (HC - IT1)","PDD (HC - IT1)"]
var WED = ["OS (SK - IT1)","OS (SK - IT1)","SMP (SUK - IT1)","DM (DMS -IT1)","RECESS","TOC (RT -IT1)","Comm. Lab/OS Lab","Comm. Lab/OS Lab","Comm. Lab/OS Lab"]
var THU = ["FREE","CO (SP - IT1)","CO (SP - IT1)","SMP (SUK - IT1)","RECESS","DM (DMS - SN2)",".Net Lab/UNIX Lab",".Net Lab/UNIX Lab",".Net Lab/UNIX Lab"]
var FRI = ["DM (DMS - IT1)","DM (DMS - IT1)","PCS (AKS - IT1)","PCS (AKS - IT1)","RECESS","FREE","OS Lab/TOC Lab","OS Lab/TOC Lab","OS Lab/TOC Lab"]

document.getElementById("2ndmon0").innerHTML=MON[0];
document.getElementById("2ndmon1").innerHTML=MON[1];
document.getElementById("2ndmon2").innerHTML=MON[2];
document.getElementById("2ndmon3").innerHTML=MON[3];
document.getElementById("2ndmon4").innerHTML=MON[4];
document.getElementById("2ndmon5").innerHTML=MON[5];
document.getElementById("2ndmon6").innerHTML=MON[6];
document.getElementById("2ndmon7").innerHTML=MON[7];
document.getElementById("2ndmon8").innerHTML=MON[8];
document.getElementById("2ndTUE0").innerHTML=TUE[0];
document.getElementById("2ndTUE1").innerHTML=TUE[1];
document.getElementById("2ndTUE2").innerHTML=TUE[2];
document.getElementById("2ndTUE3").innerHTML=TUE[3];
document.getElementById("2ndTUE4").innerHTML=TUE[4];
document.getElementById("2ndTUE5").innerHTML=TUE[5];
document.getElementById("2ndTUE6").innerHTML=TUE[6];
document.getElementById("2ndTUE7").innerHTML=TUE[7];
document.getElementById("2ndTUE8").innerHTML=TUE[8];
document.getElementById("2ndWED0").innerHTML=WED[0];
document.getElementById("2ndWED1").innerHTML=WED[1];
document.getElementById("2ndWED2").innerHTML=WED[2];
document.getElementById("2ndWED3").innerHTML=WED[3];
document.getElementById("2ndWED4").innerHTML=WED[4];
document.getElementById("2ndWED5").innerHTML=WED[5];
document.getElementById("2ndWED6").innerHTML=WED[6];
document.getElementById("2ndWED7").innerHTML=WED[7];
document.getElementById("2ndWED8").innerHTML=WED[8];
document.getElementById("2ndTHU0").innerHTML=THU[0];
document.getElementById("2ndTHU1").innerHTML=THU[1];
document.getElementById("2ndTHU2").innerHTML=THU[2];
document.getElementById("2ndTHU3").innerHTML=THU[3];
document.getElementById("2ndTHU4").innerHTML=THU[4];
document.getElementById("2ndTHU5").innerHTML=THU[5];
document.getElementById("2ndTHU6").innerHTML=THU[6];
document.getElementById("2ndTHU7").innerHTML=THU[7];
document.getElementById("2ndTHU8").innerHTML=THU[8];
document.getElementById("2ndFRI0").innerHTML=FRI[0];
document.getElementById("2ndFRI1").innerHTML=FRI[1];
document.getElementById("2ndFRI2").innerHTML=FRI[2];
document.getElementById("2ndFRI3").innerHTML=FRI[3];
document.getElementById("2ndFRI4").innerHTML=FRI[4];
document.getElementById("2ndFRI5").innerHTML=FRI[5];
document.getElementById("2ndFRI6").innerHTML=FRI[6];
document.getElementById("2ndFRI7").innerHTML=FRI[7];
document.getElementById("2ndFRI8").innerHTML=FRI[8];

if (day==0)
        {
            document.getElementById("2ndAll").innerHTML = "<strong>HOLIDAY</strong>";
        }
    if (day==1)  
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("2ndAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {

                if(time>=915 && time<=1004)
                {
                    document.getElementById("2ndcurperiod").innerHTML = MON[0];
                    document.getElementById("2ndnextperiod").innerHTML = MON[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[1];
                        document.getElementById("2ndnextperiod").innerHTML = MON[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[2];
                        document.getElementById("2ndnextperiod").innerHTML = MON[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[3];
                        document.getElementById("2ndnextperiod").innerHTML = MON[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[4];
                        document.getElementById("2ndnextperiod").innerHTML = MON[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[5];
                        document.getElementById("2ndnextperiod").innerHTML = MON[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[6];
                        document.getElementById("2ndnextperiod").innerHTML = MON[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[7];
                        document.getElementById("2ndnextperiod").innerHTML = MON[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = MON[8];
                        document.getElementById("2ndnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==2)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("2ndAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                 if(time>=915 && time<=1004)
                {
                    document.getElementById("2ndcurperiod").innerHTML = TUE[0];
                    document.getElementById("2ndnextperiod").innerHTML = TUE[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[1];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[2];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[3];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[4];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[5];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[6];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[7];
                        document.getElementById("2ndnextperiod").innerHTML = TUE[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = TUE[8];
                        document.getElementById("2ndnextperiod").innerHTML = FREE;
                    }
            }

        }
    if (day==3)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("2ndAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                if(time>=915 && time<=1004)
                {
                    document.getElementById("2ndcurperiod").innerHTML = WED[0];
                    document.getElementById("2ndnextperiod").innerHTML = WED[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[1];
                        document.getElementById("2ndnextperiod").innerHTML = WED[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[2];
                        document.getElementById("2ndnextperiod").innerHTML = WED[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[3];
                        document.getElementById("2ndnextperiod").innerHTML = WED[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[4];
                        document.getElementById("2ndnextperiod").innerHTML = WED[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[5];
                        document.getElementById("2ndnextperiod").innerHTML = WED[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[6];
                        document.getElementById("2ndnextperiod").innerHTML = WED[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[7];
                        document.getElementById("2ndnextperiod").innerHTML = WED[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = WED[8];
                        document.getElementById("2ndnextperiod").innerHTML = FREE;
                    }
            }
            
        }
    if (day==4)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("2ndAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                if(time>=915 && time<=1004)
                {
                    document.getElementById("2ndcurperiod").innerHTML = THU[0];
                    document.getElementById("2ndnextperiod").innerHTML = THU[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[1];
                        document.getElementById("2ndnextperiod").innerHTML = THU[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[2];
                        document.getElementById("2ndnextperiod").innerHTML = THU[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[3];
                        document.getElementById("2ndnextperiod").innerHTML = THU[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[4];
                        document.getElementById("2ndnextperiod").innerHTML = THU[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[5];
                        document.getElementById("2ndnextperiod").innerHTML = THU[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[6];
                        document.getElementById("2ndnextperiod").innerHTML = THU[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[7];
                        document.getElementById("2ndnextperiod").innerHTML = THU[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = THU[8];
                        document.getElementById("2ndnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==5)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("2ndAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
            if(time>=915 && time<=1004)
                {
                    document.getElementById("2ndcurperiod").innerHTML = FRI[0];
                    document.getElementById("2ndnextperiod").innerHTML = FRI[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[1];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[2];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[3];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[4];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[5];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[6];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[7];
                        document.getElementById("2ndnextperiod").innerHTML = FRI[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = FRI[8];
                        document.getElementById("2ndnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==6)
        {
            document.getElementById("2ndAll").innerHTML = "<strong>HOLIDAY</strong>";
        }