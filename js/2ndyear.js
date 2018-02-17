var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;



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
                    document.getElementById("2ndcurperiod").innerHTML = "Free";
                    document.getElementById("2ndnextperiod").innerHTML = "OS(SK-IT1)";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "OS(SK-IT1)";
                        document.getElementById("2ndnextperiod").innerHTML = "OS(SK-IT1)";
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "OS(SK-IT1)";
                        document.getElementById("2ndnextperiod").innerHTML = "SMP(SUK-IT1)";
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "MIII - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "RECESS ";
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "RECESS";
                        document.getElementById("2ndnextperiod").innerHTML = "PD - SN3";
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "PD - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "BE - SN3";
                    }
                /*if(time>=1445 && time<=1534)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "PD - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "BE - SN3";
                    }*/
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "COLLEGE OVER";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "FREE";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE";
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
                    document.getElementById("2ndcurperiod").innerHTML = "OOPS - SN2";
                    document.getElementById("2ndnextperiod").innerHTML = "CM - SN2";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "CM - SN2";
                        document.getElementById("2ndnextperiod").innerHTML = "DELD - SN2";
                    }
                if(time>=1055 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "DELD - SN2";
                        document.getElementById("2ndnextperiod").innerHTML = "RECESS";
                    }
                /*if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "DELD - SN2";
                        document.getElementById("2ndnextperiod").innerHTML = "RECESS ";
                    }*/
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "RECESS";
                        document.getElementById("2ndnextperiod").innerHTML = "BE - SN2";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "BE - SN2";
                        document.getElementById("2ndnextperiod").innerHTML = "DS LAB - IT LAB";
                    }
                if(time>=1445 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "DS LAB - IT LAB";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE ";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "FREE";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE";
                    }*/
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
                    document.getElementById("2ndcurperiod").innerHTML = "FREE";
                    document.getElementById("2ndnextperiod").innerHTML = "OOPS LAB - C LAB";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "OOPS LAB -C LAB";
                        document.getElementById("2ndnextperiod").innerHTML = "RECESS";
                    }
                /*if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "MIII - SN3";
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "MIII - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "RECESS ";
                    }*/
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "RECESS";
                        document.getElementById("2ndnextperiod").innerHTML = "MIII - IT1";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "MIII - IT1";
                        document.getElementById("2ndnextperiod").innerHTML = "DS - IT1";
                    }
                if(time>=1445 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "DS - IT1";
                        document.getElementById("2ndnextperiod").innerHTML = "CM - IT1";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE ";
                    }*/
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "CM - IT1";
                        document.getElementById("2ndnextperiod").innerHTML = "College OVER";
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
                    document.getElementById("2ndcurperiod").innerHTML = "CM - IT1";
                    document.getElementById("2ndnextperiod").innerHTML = "DELD - IT1";
                }
                if(time>=1005 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "DELD - IT1";
                        document.getElementById("2ndnextperiod").innerHTML = "DS - IT1";
                    }
                /*if(time>=1055 && time<=1144)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "MIII - SN3";
                    }*/
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "DS - IT1";
                        document.getElementById("2ndnextperiod").innerHTML = "RECESS ";
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "RECESS";
                        document.getElementById("2ndnextperiod").innerHTML = "MIII -IT2";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "MIII - IT2";
                        document.getElementById("2ndnextperiod").innerHTML = "BE LAB";
                    }
                if(time>=1445 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "BE LAB";
                        document.getElementById("2ndnextperiod").innerHTML = "COLLEGE OVER";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE ";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("2ndcurperiod").innerHTML = "FREE";
                        document.getElementById("2ndnextperiod").innerHTML = "FREE";
                    }*/
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
            /*if(time>=915 && time<=1004)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "DS - SN3";
                    document.getElementById("2ndnextperiod").innerHTML = "CM - SN3";
                }
            if(time>=1005 && time<=1054)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "CM - SN3";
                    document.getElementById("2ndnextperiod").innerHTML = "OOPS - SN3";
                }*/
            if(time>=1055 && time<=1144)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "MIII - IT1";
                    document.getElementById("2ndnextperiod").innerHTML = "DS - IT1";
                }
            if(time>=1145 && time<=1234)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "DS - IT1";
                    document.getElementById("2ndnextperiod").innerHTML = "RECESS ";
                }
            if(time>=1235 && time<=1354)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "RECESS";
                    document.getElementById("2ndnextperiod").innerHTML = "BE - IT1";
                }
            if(time>=1355 && time<=1534)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "BE - IT1";
                    document.getElementById("2ndnextperiod").innerHTML = "OOPS - IT1";
                }
            /*if(time>=1445 && time<=1534)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "PD - SN3";
                    document.getElementById("2ndnextperiod").innerHTML = "BE - SN3";
                }*/
            if(time>=1535 && time<=1715)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "OOPS - IT1";
                    document.getElementById("2ndnextperiod").innerHTML = "FREE ";
                }
            /*if(time>=1625 && time<=1715)
                {
                    document.getElementById("2ndcurperiod").innerHTML = "FREE";
                    document.getElementById("2ndnextperiod").innerHTML = "FREE";
                }*/
            }
        }
    if (day==6)
        {
            document.getElementById("2ndAll").innerHTML = "<strong>HOLIDAY</strong>";
        }