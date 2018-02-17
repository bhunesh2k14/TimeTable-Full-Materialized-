var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;



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
                    document.getElementById("4thcurperiod").innerHTML = "DS - SN3";
                    document.getElementById("4thnextperiod").innerHTML = "CM - SN3";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "CM - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "OOPS - SN3";
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "MIII - SN3";
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "MIII - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "RECESS ";
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "RECESS";
                        document.getElementById("4thnextperiod").innerHTML = "PD - SN3";
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "PD - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "BE - SN3";
                    }
                /*if(time>=1445 && time<=1534)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "PD - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "BE - SN3";
                    }*/
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "COLLEGE OVER";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "FREE";
                        document.getElementById("4thnextperiod").innerHTML = "FREE";
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
                    document.getElementById("4thcurperiod").innerHTML = "OOPS - SN2";
                    document.getElementById("4thnextperiod").innerHTML = "CM - SN2";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "CM - SN2";
                        document.getElementById("4thnextperiod").innerHTML = "DELD - SN2";
                    }
                if(time>=1055 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "DELD - SN2";
                        document.getElementById("4thnextperiod").innerHTML = "RECESS";
                    }
                /*if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "DELD - SN2";
                        document.getElementById("4thnextperiod").innerHTML = "RECESS ";
                    }*/
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "RECESS";
                        document.getElementById("4thnextperiod").innerHTML = "BE - SN2";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "BE - SN2";
                        document.getElementById("4thnextperiod").innerHTML = "DS LAB - IT LAB";
                    }
                if(time>=1445 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "DS LAB - IT LAB";
                        document.getElementById("4thnextperiod").innerHTML = "FREE";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "FREE ";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "FREE";
                        document.getElementById("4thnextperiod").innerHTML = "FREE";
                    }*/
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
                    document.getElementById("4thcurperiod").innerHTML = "FREE";
                    document.getElementById("4thnextperiod").innerHTML = "OOPS LAB - C LAB";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "OOPS LAB -C LAB";
                        document.getElementById("4thnextperiod").innerHTML = "RECESS";
                    }
                /*if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "MIII - SN3";
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "MIII - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "RECESS ";
                    }*/
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "RECESS";
                        document.getElementById("4thnextperiod").innerHTML = "MIII - IT1";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "MIII - IT1";
                        document.getElementById("4thnextperiod").innerHTML = "DS - IT1";
                    }
                if(time>=1445 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "DS - IT1";
                        document.getElementById("4thnextperiod").innerHTML = "CM - IT1";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "FREE ";
                    }*/
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "CM - IT1";
                        document.getElementById("4thnextperiod").innerHTML = "College OVER";
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
                    document.getElementById("4thcurperiod").innerHTML = "CM - IT1";
                    document.getElementById("4thnextperiod").innerHTML = "DELD - IT1";
                }
                if(time>=1005 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "DELD - IT1";
                        document.getElementById("4thnextperiod").innerHTML = "DS - IT1";
                    }
                /*if(time>=1055 && time<=1144)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "MIII - SN3";
                    }*/
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "DS - IT1";
                        document.getElementById("4thnextperiod").innerHTML = "RECESS ";
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "RECESS";
                        document.getElementById("4thnextperiod").innerHTML = "MIII -IT2";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "MIII - IT2";
                        document.getElementById("4thnextperiod").innerHTML = "BE LAB";
                    }
                if(time>=1445 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "BE LAB";
                        document.getElementById("4thnextperiod").innerHTML = "COLLEGE OVER";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("4thnextperiod").innerHTML = "FREE ";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("4thcurperiod").innerHTML = "FREE";
                        document.getElementById("4thnextperiod").innerHTML = "FREE";
                    }*/
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
            /*if(time>=915 && time<=1004)
                {
                    document.getElementById("4thcurperiod").innerHTML = "DS - SN3";
                    document.getElementById("4thnextperiod").innerHTML = "CM - SN3";
                }
            if(time>=1005 && time<=1054)
                {
                    document.getElementById("4thcurperiod").innerHTML = "CM - SN3";
                    document.getElementById("4thnextperiod").innerHTML = "OOPS - SN3";
                }*/
            if(time>=1055 && time<=1144)
                {
                    document.getElementById("4thcurperiod").innerHTML = "MIII - IT1";
                    document.getElementById("4thnextperiod").innerHTML = "DS - IT1";
                }
            if(time>=1145 && time<=1234)
                {
                    document.getElementById("4thcurperiod").innerHTML = "DS - IT1";
                    document.getElementById("4thnextperiod").innerHTML = "RECESS ";
                }
            if(time>=1235 && time<=1354)
                {
                    document.getElementById("4thcurperiod").innerHTML = "RECESS";
                    document.getElementById("4thnextperiod").innerHTML = "BE - IT1";
                }
            if(time>=1355 && time<=1534)
                {
                    document.getElementById("4thcurperiod").innerHTML = "BE - IT1";
                    document.getElementById("4thnextperiod").innerHTML = "OOPS - IT1";
                }
            /*if(time>=1445 && time<=1534)
                {
                    document.getElementById("4thcurperiod").innerHTML = "PD - SN3";
                    document.getElementById("4thnextperiod").innerHTML = "BE - SN3";
                }*/
            if(time>=1535 && time<=1715)
                {
                    document.getElementById("4thcurperiod").innerHTML = "OOPS - IT1";
                    document.getElementById("4thnextperiod").innerHTML = "FREE ";
                }
            /*if(time>=1625 && time<=1715)
                {
                    document.getElementById("4thcurperiod").innerHTML = "FREE";
                    document.getElementById("4thnextperiod").innerHTML = "FREE";
                }*/
            }
        }
    if (day==6)
        {
            document.getElementById("4thAll").innerHTML = "<strong>HOLIDAY</strong>";
        }