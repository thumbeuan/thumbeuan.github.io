        //Start of Themes
        var searchIMG = "search-l.png?v=1";
        var loginIMG = "login-l.png?v=1";
        var themeIMG = "dark.png?v=1";
        var versionIMG = "version-switch.png?v=1";
        var curIco = $(".re-lo-icon").attr("src");

        function themeSwitch(theme) {
            if (theme == 'light') {
                searchIMG = "search.png?v=1";
                versionIMG = "version-switch.png?v=2";
                if (curIco.indexOf("login") >= 0) {
                    loginIMG = "login.png?v=1";
                } else if (curIco.indexOf("panel") >= 0) {
                    loginIMG = "panel.png?v=1";
                } else {
                    loginIMG = "profile.png?v=1";
                }
                themeIMG = "light.png?v=1";
                $("link[href='https://pvprp.com/style/themes/light.css']").remove();
                $('head').append('<link rel="stylesheet" type="text/css" href="https://pvprp.com/style/themes/light.css">');
                $(".search-icon").each(function() {
                    getIC = $(this).attr("icon-t");
                    $(this).attr("src", "https://pvprp.com/assets/icons/search/" + getIC + ".png?v=6")
                });
            } else {
                searchIMG = "search-l.png?v=1";
                versionIMG = "version-switch-l.png?v=2";
                if (curIco.indexOf("login") >= 0) {
                    loginIMG = "login-l.png?v=1";
                } else if (curIco.indexOf("panel") >= 0) {
                    loginIMG = "panel-l.png?v=1";
                } else {
                    loginIMG = "profile-l.png?v=1";
                }
                themeIMG = "dark.png?v=1";
                $("link[href='https://pvprp.com/style/themes/dark.css']").remove();
                $('head').append('<link rel="stylesheet" type="text/css" href="https://pvprp.com/style/themes/dark.css">');
                $(".search-icon").each(function() {
                    getIC = $(this).attr("icon-t");
                    getIC = getIC + "-l";
                    $(this).attr("src", "https://pvprp.com/assets/icons/search/" + getIC + ".png?v=6")
                });
            }

            $("#search-icon").attr("src", "https://pvprp.com/assets/icons/" + searchIMG);
            $("#version-icon").attr("src", "https://pvprp.com/assets/icons/" + versionIMG);
            $("#re-lo").attr("src", "https://pvprp.com/assets/icons/" + loginIMG);
            $("#theme-switch, #theme-switch2").attr("src", "https://pvprp.com/assets/icons/" + themeIMG);

            localStorage.setItem('pvprp-theme', theme);
        }

        theme = localStorage.getItem('pvprp-theme');
        if (localStorage.getItem('pvprp-theme') == null) {
            theme = "dark";
        }
        themeSwitch(theme);


        $(document).on("click", ".theme-switch", function() {
            themeC = localStorage.getItem('pvprp-theme');
            if (themeC == 'dark') {
                newTheme = 'light';
            } else {
                newTheme = 'dark';
            }
            themeSwitch(newTheme);
        });
        //End of themes