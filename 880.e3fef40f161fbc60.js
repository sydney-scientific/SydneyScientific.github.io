"use strict";(self.webpackChunksydney_scientific_www=self.webpackChunksydney_scientific_www||[]).push([[880],{1880:(L,d,s)=>{s.r(d),s.d(d,{GettingStartedModule:()=>B});var r=s(177),p=s(7062),e=s(4438),c=s(400);function l(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Though this guide is for the Ubuntu linux; it should be easy to retrofit to others. "),e.k0s())}function m(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Though this guide has been tested on macOS High Sierra; it will probably work on older versions. "),e.k0s())}function f(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Follow this guide on Windows 7+. "),e.k0s())}function F(t,o){1&t&&(e.qex(0),e.EFF(1,"Command Prompt (cmd.exe)"),e.bVm())}function u(t,o){1&t&&(e.qex(0),e.EFF(1,"Terminal"),e.bVm())}function E(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,"\n    sudo apt update\n    sudo apt install build-essential git-core tcl\n  "),e.k0s()())}function g(t,o){1&t&&(e.j41(0,"a",23),e.EFF(1,"Latest XCode and Command Line Tools"),e.k0s())}function h(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,'\n    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n    brew update\n    brew install git\n  '),e.k0s()())}function S(t,o){1&t&&(e.j41(0,"section",24),e.EFF(1,' Ensure you check "Add to PATH" whenever asked: '),e.j41(2,"ol")(3,"li")(4,"a",25),e.EFF(5," Build Tools for Visual Studio 2017 "),e.k0s()(),e.j41(6,"li")(7,"a",26),e.EFF(8,"git"),e.k0s()()(),e.j41(9,"p",9),e.EFF(10,"Test that it installed correctly with:"),e.k0s(),e.j41(11,"pre",10)(12,"code",11),e.EFF(13,"\n      git --version\n      cl /?\n    "),e.k0s()()())}function k(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,"\n    curl -L https://git.io/n-install | bash -s -- -y lts\n  "),e.k0s()())}function _(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Download and setup from latest: "),e.j41(2,"a",27),e.EFF(3,"'Windows Installer (.msi)' [LTS]"),e.k0s(),e.EFF(4,". "),e.k0s())}function w(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,"\n    # Alternatively build from source. Quick guide: https://askubuntu.com/a/868862\n    sudo add-apt-repository ppa:chris-lea/redis-server\n    sudo apt update\n    sudo apt install redis-server\n  "),e.k0s()())}function R(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,"\n    brew install redis\n    brew services start redis\n  "),e.k0s()())}function j(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Download and install the "),e.j41(2,"a",28),e.EFF(3,"latest .msi"),e.k0s(),e.EFF(4,". "),e.k0s())}function G(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Follow "),e.j41(2,"a",29),e.EFF(3,"their official guide"),e.k0s(),e.EFF(4,". I prefer using latest version from their apt repository. "),e.k0s())}function T(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Follow "),e.j41(2,"a",30),e.EFF(3,"their official guide"),e.k0s(),e.EFF(4,". I prefer the "),e.j41(5,"a",31),e.EFF(6,"EnterpriseDB package"),e.k0s(),e.EFF(7,". "),e.k0s())}function I(t,o){1&t&&(e.j41(0,"p",9),e.EFF(1," Run this in an Administrator Command Prompt ("),e.j41(2,"a",32),e.EFF(3,"how-to"),e.k0s(),e.EFF(4,"): "),e.k0s())}function b(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,'\n    POSTGRES_DB_USER=\'REPLACE_ME\'\n    REST_PASS=\'REPLACE_ME\' # recommend using `read -s REST_PASS`\n    POSTGRES_DB_NAME=\'REPLACE_ME\'\n\n    createuser --superuser "$POSTGRES_DB_USER"\n    psql -c "CREATE USER $POSTGRES_DB_USER WITH LOGIN PASSWORD \'$REST_PASS\';"\n    createdb "$POSTGRES_DB_NAME" --owner "$POSTGRES_DB_USER"\n    export RDBMS_URI="postgres://$POSTGRES_DB_USER:$REST_PASS@localhost/$POSTGRES_DB_NAME"\n    # ^Recommend adding this `export` line to your ~/.bash_profile\n  '),e.k0s()())}function C(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",33),e.EFF(2,'\n    set POSTGRES_DB_USER="REPLACE_ME"\n    set REST_PASS="REPLACE_ME"\n    set POSTGRES_DB_NAME="REPLACE_ME"\n\n    createuser --superuser "%POSTGRES_DB_USER%"\n    psql -c "CREATE USER %POSTGRES_DB_USER% WITH LOGIN PASSWORD \'%REST_PASS%\';"\n    createdb "%POSTGRES_DB_NAME%" --owner "%POSTGRES_DB_USER%"\n\n    setx RDBMS_URI "postgres://%POSTGRES_DB_USER%:%REST_PASS%@localhost/%POSTGRES_DB_NAME%"\n    :: This last line will add RDBMS_URI to your environment\n  '),e.k0s()())}function y(t,o){1&t&&(e.j41(0,"p"),e.EFF(1," Alternatively use "),e.j41(2,"a",34),e.EFF(3,"my script"),e.k0s(),e.EFF(4,". "),e.k0s())}function D(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,"\n    psql \"$RDBMS_URI\" -c 'SELECT 1'\n  "),e.k0s()())}function $(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2,'\n    psql "%RDBMS_URI%" -c "SELECT 1"\n  '),e.k0s()())}function P(t,o){1&t&&(e.j41(0,"span")(1,"a",35)(2,"code"),e.EFF(3,"sed"),e.k0s()(),e.EFF(4," and "),e.k0s())}function A(t,o){1&t&&(e.j41(0,"code"),e.EFF(1,"brew install hub"),e.k0s())}function O(t,o){1&t&&(e.j41(0,"span")(1,"a",36),e.EFF(2,"latest package"),e.k0s(),e.EFF(3," for your platform."),e.k0s())}function v(t,o){1&t&&(e.j41(0,"pre",10)(1,"code",11),e.EFF(2),e.k0s()()),2&t&&(e.R7$(2),e.Lme('\n    hub create organisation/"$',"{","PWD##*/","}","\" -d 'Description here'\n  "))}const Y=[{path:"",component:(()=>{class t{constructor(i){this.platformPickerService=i,this.os=i.is.bind(i)}static#e=this.\u0275fac=function(a){return new(a||t)(e.rXU(c.B))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["app-getting-started"]],decls:105,vars:29,consts:[[1,"docs-markdown","pad"],[1,"docs-markdown-h5"],["class","docs-markdown-p",4,"ngIf"],[4,"ngIf"],["id","step-0-install-build-dependencies",1,"docs-header-link","docs-markdown-h3"],["class","docs-markdown-pre",4,"ngIf"],["href","https://developer.apple.com/downloads",4,"ngIf"],["class","docs-guide-content",4,"ngIf"],["id","step-1-install-nodejs",1,"docs-header-link","docs-markdown-h3"],[1,"docs-markdown-p"],[1,"docs-markdown-pre"],[1,"lang-bash","docs-markdown-code"],["id","step-2-install-redis",1,"docs-header-link","docs-markdown-h3"],["id","step-3-install-postgres",1,"docs-header-link","docs-markdown-h3"],["id","step-4-install-android",1,"docs-header-link","docs-markdown-h3"],["href","https://developer.android.com/studio/install.html",1,"docs-markdown-a"],["id","step-5-install-global-nodejs-packages",1,"docs-header-link","docs-markdown-h3"],["id","step-6-development-backend",1,"docs-header-link","docs-markdown-h3"],["id","step-7-angular-frontend",1,"docs-header-link","docs-markdown-h3"],["id","step-8-android",1,"docs-header-link","docs-markdown-h3"],["id","step-9-rebranding",1,"docs-header-link","docs-markdown-h3"],["href","https://github.com/sharkdp/fd"],["href","https://hub.github.com"],["href","https://developer.apple.com/downloads"],[1,"docs-guide-content"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15",1,"docs-markdown-a"],["href","https://git-scm.com/download/win",1,"docs-markdown-a"],["href","https://nodejs.org/en/download/",1,"docs-markdown-a"],["href","https://github.com/MicrosoftArchive/redis/releases",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/linux/ubuntu/",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/macosx/",1,"docs-markdown-a"],[1,"http://www.enterprisedb.com/products/pgdownload.do#macosx"],["href","https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx",1,"docs-markdown-a"],[1,"lang-batch","docs-markdown-code"],["href","https://github.com/offscale/offsh-postgres",1,"docs-markdown-a"],["href","https://chocolatey.org/packages/sed"],["href","https://github.com/github/hub/releases"]],template:function(a,n){1&a&&(e.j41(0,"div",0)(1,"h5",1),e.EFF(2," This guides you to setting up your computer to run all my scaffolds. "),e.k0s(),e.DNE(3,l,2,0,"p",2)(4,m,2,0,"p",2)(5,f,2,0,"p",2),e.j41(6,"em"),e.EFF(7," All grey background assumes you are running in an active "),e.DNE(8,F,2,0,"ng-container",3)(9,u,2,0,"ng-container",3),e.EFF(10," session "),e.k0s(),e.j41(11,"h3",4),e.EFF(12," Step 0: Install build dependencies "),e.k0s(),e.DNE(13,E,3,0,"pre",5)(14,g,2,0,"a",6)(15,h,3,0,"pre",5)(16,S,14,0,"section",7),e.j41(17,"h3",8),e.EFF(18," Step 1: Install Node.js "),e.k0s(),e.DNE(19,k,3,0,"pre",5)(20,_,5,0,"p",2),e.j41(21,"p",9),e.EFF(22,"Test that it installed correctly with:"),e.k0s(),e.j41(23,"pre",10)(24,"code",11),e.EFF(25,"\n    node --version\n    npm --version\n  "),e.k0s()(),e.j41(26,"h3",12),e.EFF(27," Step 2: Install Redis "),e.k0s(),e.DNE(28,w,3,0,"pre",5)(29,R,3,0,"pre",5)(30,j,5,0,"p",2),e.j41(31,"p",9),e.EFF(32,"You can test it's installed and running with:"),e.k0s(),e.j41(33,"pre",10)(34,"code",11),e.EFF(35,"\n    redis-cli ping\n  "),e.k0s()(),e.j41(36,"p",9),e.EFF(37,"If that failed, open a new session and run this, then try the ping again:"),e.k0s(),e.j41(38,"pre",10)(39,"code",11),e.EFF(40,"\n    redis-server\n  "),e.k0s()(),e.j41(41,"h3",13),e.EFF(42," Step 3: Install and configure Postgres "),e.k0s(),e.DNE(43,G,5,0,"p",2)(44,T,8,0,"p",2)(45,I,5,0,"p",2)(46,b,3,0,"pre",5)(47,C,3,0,"pre",5)(48,y,5,0,"p",3),e.j41(49,"p",9),e.EFF(50,"You can test it's installed and running with:"),e.k0s(),e.DNE(51,D,3,0,"pre",5)(52,$,3,0,"pre",5),e.j41(53,"h3",14),e.EFF(54," Step 4: Install Android dependencies and IDE "),e.k0s(),e.j41(55,"p",9),e.EFF(56," See "),e.j41(57,"a",15),e.EFF(58,"official install guide"),e.k0s(),e.EFF(59,". "),e.k0s(),e.j41(60,"h3",16),e.EFF(61," Step 5: Install global Node.js packages "),e.k0s(),e.j41(62,"pre",10)(63,"code",11),e.EFF(64,"\n    npm i -g bunyan typings typescript @angular/cli\n  "),e.k0s()(),e.j41(65,"h3",17),e.EFF(66," Step 6: Development backend (Node.js) "),e.k0s(),e.j41(67,"pre",10)(68,"code",11),e.EFF(69,"\n    git clone https://github.com/SamuelMarks/restify-orm-scaffold\n    cd restify-orm-scaffold\n    typings i\n    tsc\n    npm start\n  "),e.k0s()(),e.j41(70,"h3",18),e.EFF(71," Step 7: Angular frontend (web) "),e.k0s(),e.j41(72,"pre",10)(73,"code",11),e.EFF(74,"\n    git clone https://github.com/SamuelMarks/ng-material-scaffold\n    cd ng-material-scaffold\n    npm i\n    npm start\n  "),e.k0s()(),e.j41(75,"h3",19),e.EFF(76," Step 8: Android "),e.k0s(),e.j41(77,"pre",10)(78,"code",11),e.EFF(79,"\n    git clone https://github.com/SamuelMarks/android-auth-scaffold\n  "),e.k0s()(),e.j41(80,"p",9),e.EFF(81," Now open that in Android Studio; build and run it. "),e.k0s(),e.j41(82,"h3",20),e.EFF(83," Step 9: Branding "),e.k0s(),e.j41(84,"p",9),e.EFF(85,"Now is a good time to rename everything. Close all open windows, and let's begin."),e.k0s(),e.j41(86,"p",9),e.EFF(87,"Install "),e.DNE(88,P,5,0,"span",3),e.j41(89,"a",21)(90,"code"),e.EFF(91,"fd"),e.k0s()(),e.EFF(92,". Then within each of the repo directories, or from a parent directory, run:"),e.k0s(),e.j41(93,"pre",10)(94,"code",11),e.EFF(95),e.k0s()(),e.j41(96,"p",9),e.EFF(97,"You will need likely want to update descriptions and add DVCS repositories also. Install "),e.j41(98,"a",22)(99,"code"),e.EFF(100,"hub"),e.k0s()(),e.EFF(101," with "),e.DNE(102,A,2,0,"code",3)(103,O,4,0,"span",3),e.k0s(),e.DNE(104,v,3,2,"pre",5),e.k0s()),2&a&&(e.R7$(3),e.Y8G("ngIf",n.os("Linux")),e.R7$(),e.Y8G("ngIf",n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(3),e.Y8G("ngIf",n.os("Windows")),e.R7$(),e.Y8G("ngIf",n.os("macOS")||n.os("Linux")),e.R7$(4),e.Y8G("ngIf",n.os("Linux")),e.R7$(),e.Y8G("ngIf",n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(3),e.Y8G("ngIf",n.os("Linux")||n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(8),e.Y8G("ngIf",n.os("Linux")),e.R7$(),e.Y8G("ngIf",n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(13),e.Y8G("ngIf",n.os("Linux")),e.R7$(),e.Y8G("ngIf",n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(),e.Y8G("ngIf",n.os("Linux")||n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(),e.Y8G("ngIf",n.os("Linux")||n.os("macOS")),e.R7$(3),e.Y8G("ngIf",n.os("Linux")||n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Windows")),e.R7$(36),e.Y8G("ngIf",n.os("Windows")),e.R7$(7),e.E5c("\n    fd -t f -exec sed -i 's/ng-material-scaffold/projectname/g' ","{}"," \\;\n    fd -t f -exec sed -i 's/NgMaterialScaffold/projectname/g' ","{}"," \\;\n\n    fd -t f -exec sed -i 's/restify-orm-scaffold/projectname/g' ","{}"," \\;\n  "),e.R7$(7),e.Y8G("ngIf",n.os("macOS")),e.R7$(),e.Y8G("ngIf",n.os("Linux")),e.R7$(),e.Y8G("ngIf",n.os("Linux")||n.os("macOS")))},dependencies:[r.bT],styles:[".pad[_ngcontent-%COMP%]{padding:0 3em}"]})}return t})()}];let B=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[r.MD,p.iI,p.iI.forChild(Y)]})}return t})()}}]);