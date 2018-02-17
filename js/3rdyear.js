var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;

var MON = ["FREE","SE (PK - IT2)","CD (RRJ - SN2)","CD (RRJ - SN2)","RECESS","ITC (PKM/AS - SN2)","IWT (AR - SN2)","NNFL (SPS - SN2)","NNFL (SPS - SN2)"]
var TUE = ["CD (RRJ - SN2)","CD (RRJ - SN2)","NNFL (SPS - SN2)","NNFL (SPS - SN2)","RECESS","ITC (PKM/AS - IT2)","IWT (AR - IT2)","CMC (PKM - IT2)","CMC (PKM - IT2)"]
var WED = ["FREE","ST Lab/WT Lab","ST Lab/WT Lab","ST Lab/WT Lab","RECESS","IWT (AR - IT2)","SE (PKC - IT2)","I E (MS - IT2)","I E (MS - IT2)"]
var THU = ["FREE","WT Lab/CD Lab","WT Lab/CD Lab","WT Lab/CD Lab","RECESS","ITC (PKM/AS - IT1)","SE (PKC - IT1)","IWT (AR - IT1)","FREE"]
var FRI = ["SE (PKC-IT2)","CD Lab/ST Lab","CD Lab/ST Lab","CD Lab/ST Lab","RECESS","ITC (PKM/AS - IT1)","CMC (PKM - IT1)","CMC (PKM - IT1)","CD (RRJ -IT1)"]

document.getElementById("3rdmon0").innerHTML=MON[0];
document.getElementById("3rdmon1").innerHTML=MON[1];
document.getElementById("3rdmon2").innerHTML=MON[2];
document.getElementById("3rdmon3").innerHTML=MON[3];
document.getElementById("3rdmon4").innerHTML=MON[4];
document.getElementById("3rdmon5").innerHTML=MON[5];
document.getElementById("3rdmon6").innerHTML=MON[6];
document.getElementById("3rdmon7").innerHTML=MON[7];
document.getElementById("3rdmon8").innerHTML=MON[8];
document.getElementById("3rdTUE0").innerHTML=TUE[0];
document.getElementById("3rdTUE1").innerHTML=TUE[1];
document.getElementById("3rdTUE2").innerHTML=TUE[2];
document.getElementById("3rdTUE3").innerHTML=TUE[3];
document.getElementById("3rdTUE4").innerHTML=TUE[4];
document.getElementById("3rdTUE5").innerHTML=TUE[5];
document.getElementById("3rdTUE6").innerHTML=TUE[6];
document.getElementById("3rdTUE7").innerHTML=TUE[7];
document.getElementById("3rdTUE8").innerHTML=TUE[8];
document.getElementById("3rdWED0").innerHTML=WED[0];
document.getElementById("3rdWED1").innerHTML=WED[1];
document.getElementById("3rdWED2").innerHTML=WED[2];
document.getElementById("3rdWED3").innerHTML=WED[3];
document.getElementById("3rdWED4").innerHTML=WED[4];
document.getElementById("3rdWED5").innerHTML=WED[5];
document.getElementById("3rdWED6").innerHTML=WED[6];
document.getElementById("3rdWED7").innerHTML=WED[7];
document.getElementById("3rdWED8").innerHTML=WED[8];
document.getElementById("3rdTHU0").innerHTML=THU[0];
document.getElementById("3rdTHU1").innerHTML=THU[1];
document.getElementById("3rdTHU2").innerHTML=THU[2];
document.getElementById("3rdTHU3").innerHTML=THU[3];
document.getElementById("3rdTHU4").innerHTML=THU[4];
document.getElementById("3rdTHU5").innerHTML=THU[5];
document.getElementById("3rdTHU6").innerHTML=THU[6];
document.getElementById("3rdTHU7").innerHTML=THU[7];
document.getElementById("3rdTHU8").innerHTML=THU[8];
document.getElementById("3rdFRI0").innerHTML=FRI[0];
document.getElementById("3rdFRI1").innerHTML=FRI[1];
document.getElementById("3rdFRI2").innerHTML=FRI[2];
document.getElementById("3rdFRI3").innerHTML=FRI[3];
document.getElementById("3rdFRI4").innerHTML=FRI[4];
document.getElementById("3rdFRI5").innerHTML=FRI[5];
document.getElementById("3rdFRI6").innerHTML=FRI[6];
document.getElementById("3rdFRI7").innerHTML=FRI[7];
document.getElementById("3rdFRI8").innerHTML=FRI[8];

if (day==0)
        {
            document.getElementById("3rdAll").innerHTML = "<strong>HOLIDAY</strong>";
        }
    if (day==1)  
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("3rdAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {

                if(time>=915 && time<=1004)
                {
                    document.getElementById("3rdcurperiod").innerHTML = MON[0];
                    document.getElementById("3rdnextperiod").innerHTML = MON[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[1];
                        document.getElementById("3rdnextperiod").innerHTML = MON[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[2];
                        document.getElementById("3rdnextperiod").innerHTML = MON[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[3];
                        document.getElementById("3rdnextperiod").innerHTML = MON[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[4];
                        document.getElementById("3rdnextperiod").innerHTML = MON[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[5];
                        document.getElementById("3rdnextperiod").innerHTML = MON[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[6];
                        document.getElementById("3rdnextperiod").innerHTML = MON[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[7];
                        document.getElementById("3rdnextperiod").innerHTML = MON[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = MON[8];
                        document.getElementById("3rdnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==2)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("3rdAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                 if(time>=915 && time<=1004)
                {
                    document.getElementById("3rdcurperiod").innerHTML = TUE[0];
                    document.getElementById("3rdnextperiod").innerHTML = TUE[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[1];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[2];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[3];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[4];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[5];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[6];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[7];
                        document.getElementById("3rdnextperiod").innerHTML = TUE[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = TUE[8];
                        document.getElementById("3rdnextperiod").innerHTML = FREE;
                    }
            }

        }
    if (day==3)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("3rdAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                if(time>=915 && time<=1004)
                {
                    document.getElementById("3rdcurperiod").innerHTML = WED[0];
                    document.getElementById("3rdnextperiod").innerHTML = WED[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[1];
                        document.getElementById("3rdnextperiod").innerHTML = WED[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[2];
                        document.getElementById("3rdnextperiod").innerHTML = WED[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[3];
                        document.getElementById("3rdnextperiod").innerHTML = WED[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[4];
                        document.getElementById("3rdnextperiod").innerHTML = WED[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[5];
                        document.getElementById("3rdnextperiod").innerHTML = WED[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[6];
                        document.getElementById("3rdnextperiod").innerHTML = WED[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[7];
                        document.getElementById("3rdnextperiod").innerHTML = WED[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = WED[8];
                        document.getElementById("3rdnextperiod").innerHTML = FREE;
                    }
            }
            
        }
    if (day==4)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("3rdAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
                if(time>=915 && time<=1004)
                {
                    document.getElementById("3rdcurperiod").innerHTML = THU[0];
                    document.getElementById("3rdnextperiod").innerHTML = THU[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[1];
                        document.getElementById("3rdnextperiod").innerHTML = THU[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[2];
                        document.getElementById("3rdnextperiod").innerHTML = THU[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[3];
                        document.getElementById("3rdnextperiod").innerHTML = THU[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[4];
                        document.getElementById("3rdnextperiod").innerHTML = THU[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[5];
                        document.getElementById("3rdnextperiod").innerHTML = THU[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[6];
                        document.getElementById("3rdnextperiod").innerHTML = THU[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[7];
                        document.getElementById("3rdnextperiod").innerHTML = THU[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = THU[8];
                        document.getElementById("3rdnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==5)
        {
            if(time>=1715 || time<=915)
            {
                document.getElementById("3rdAll").innerHTML = "College Not Started or is Over.";
            }
            else
            {
            if(time>=915 && time<=1004)
                {
                    document.getElementById("3rdcurperiod").innerHTML = FRI[0];
                    document.getElementById("3rdnextperiod").innerHTML = FRI[1];
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[1];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[2];
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[2];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[3];
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[3];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[4];
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[4];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[5];
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[5];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[6];
                    }
                if(time>=1445 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[6];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[7];
                    }
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[7];
                        document.getElementById("3rdnextperiod").innerHTML = FRI[8];
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = FRI[8];
                        document.getElementById("3rdnextperiod").innerHTML = FREE;
                    }
            }
        }
    if (day==6)
        {
            document.getElementById("3rdAll").innerHTML = "<strong>HOLIDAY</strong>";
        }