var currentdate = new Date();
var day = currentdate.getDay();
var timehr = currentdate.getHours();
var timemin = currentdate.getMinutes();
var time = (timehr*100)+timemin;



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
                    document.getElementById("3rdcurperiod").innerHTML = "DS - SN3";
                    document.getElementById("3rdnextperiod").innerHTML = "CM - SN3";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "CM - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "OOPS - SN3";
                    }
                if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "MIII - SN3";
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "MIII - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "RECESS ";
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "RECESS";
                        document.getElementById("3rdnextperiod").innerHTML = "PD - SN3";
                    }
                if(time>=1355 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "PD - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "BE - SN3";
                    }
                /*if(time>=1445 && time<=1534)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "PD - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "BE - SN3";
                    }*/
                if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "COLLEGE OVER";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "FREE";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE";
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
                    document.getElementById("3rdcurperiod").innerHTML = "OOPS - SN2";
                    document.getElementById("3rdnextperiod").innerHTML = "CM - SN2";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "CM - SN2";
                        document.getElementById("3rdnextperiod").innerHTML = "DELD - SN2";
                    }
                if(time>=1055 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "DELD - SN2";
                        document.getElementById("3rdnextperiod").innerHTML = "RECESS";
                    }
                /*if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "DELD - SN2";
                        document.getElementById("3rdnextperiod").innerHTML = "RECESS ";
                    }*/
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "RECESS";
                        document.getElementById("3rdnextperiod").innerHTML = "BE - SN2";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "BE - SN2";
                        document.getElementById("3rdnextperiod").innerHTML = "DS LAB - IT LAB";
                    }
                if(time>=1445 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "DS LAB - IT LAB";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE ";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "FREE";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE";
                    }*/
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
                    document.getElementById("3rdcurperiod").innerHTML = "FREE";
                    document.getElementById("3rdnextperiod").innerHTML = "OOPS LAB - C LAB";
                }
                if(time>=1005 && time<=1054)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "OOPS LAB -C LAB";
                        document.getElementById("3rdnextperiod").innerHTML = "RECESS";
                    }
                /*if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "MIII - SN3";
                    }
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "MIII - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "RECESS ";
                    }*/
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "RECESS";
                        document.getElementById("3rdnextperiod").innerHTML = "MIII - IT1";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "MIII - IT1";
                        document.getElementById("3rdnextperiod").innerHTML = "DS - IT1";
                    }
                if(time>=1445 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "DS - IT1";
                        document.getElementById("3rdnextperiod").innerHTML = "CM - IT1";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE ";
                    }*/
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "CM - IT1";
                        document.getElementById("3rdnextperiod").innerHTML = "College OVER";
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
                    document.getElementById("3rdcurperiod").innerHTML = "CM - IT1";
                    document.getElementById("3rdnextperiod").innerHTML = "DELD - IT1";
                }
                if(time>=1005 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "DELD - IT1";
                        document.getElementById("3rdnextperiod").innerHTML = "DS - IT1";
                    }
                /*if(time>=1055 && time<=1144)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "OOPS - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "MIII - SN3";
                    }*/
                if(time>=1145 && time<=1234)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "DS - IT1";
                        document.getElementById("3rdnextperiod").innerHTML = "RECESS ";
                    }
                if(time>=1235 && time<=1354)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "RECESS";
                        document.getElementById("3rdnextperiod").innerHTML = "MIII -IT2";
                    }
                if(time>=1355 && time<=1444)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "MIII - IT2";
                        document.getElementById("3rdnextperiod").innerHTML = "BE LAB";
                    }
                if(time>=1445 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "BE LAB";
                        document.getElementById("3rdnextperiod").innerHTML = "COLLEGE OVER";
                    }
                /*if(time>=1535 && time<=1624)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "BE - SN3";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE ";
                    }
                if(time>=1625 && time<=1715)
                    {
                        document.getElementById("3rdcurperiod").innerHTML = "FREE";
                        document.getElementById("3rdnextperiod").innerHTML = "FREE";
                    }*/
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
            /*if(time>=915 && time<=1004)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "DS - SN3";
                    document.getElementById("3rdnextperiod").innerHTML = "CM - SN3";
                }
            if(time>=1005 && time<=1054)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "CM - SN3";
                    document.getElementById("3rdnextperiod").innerHTML = "OOPS - SN3";
                }*/
            if(time>=1055 && time<=1144)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "MIII - IT1";
                    document.getElementById("3rdnextperiod").innerHTML = "DS - IT1";
                }
            if(time>=1145 && time<=1234)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "DS - IT1";
                    document.getElementById("3rdnextperiod").innerHTML = "RECESS ";
                }
            if(time>=1235 && time<=1354)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "RECESS";
                    document.getElementById("3rdnextperiod").innerHTML = "BE - IT1";
                }
            if(time>=1355 && time<=1534)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "BE - IT1";
                    document.getElementById("3rdnextperiod").innerHTML = "OOPS - IT1";
                }
            /*if(time>=1445 && time<=1534)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "PD - SN3";
                    document.getElementById("3rdnextperiod").innerHTML = "BE - SN3";
                }*/
            if(time>=1535 && time<=1715)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "OOPS - IT1";
                    document.getElementById("3rdnextperiod").innerHTML = "FREE ";
                }
            /*if(time>=1625 && time<=1715)
                {
                    document.getElementById("3rdcurperiod").innerHTML = "FREE";
                    document.getElementById("3rdnextperiod").innerHTML = "FREE";
                }*/
            }
        }
    if (day==6)
        {
            document.getElementById("3rdAll").innerHTML = "<strong>HOLIDAY</strong>";
        }