"use strict";(self.webpackChunksydney_scientific_www=self.webpackChunksydney_scientific_www||[]).push([[512],{3512:(x,d,s)=>{s.r(d),s.d(d,{GettingStartedModule:()=>B});var r=s(1368),p=s(2100),e=s(4496),c=s(7836);function l(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Though this guide is for the Ubuntu linux; it should be easy to retrofit to others. "),e.C$Y())}function m(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Though this guide has been tested on macOS High Sierra; it will probably work on older versions. "),e.C$Y())}function E(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Follow this guide on Windows 7+. "),e.C$Y())}function u(n,o){1&n&&(e.SAx(0),e.OEk(1,"Command Prompt (cmd.exe)"),e.k70())}function f(n,o){1&n&&(e.SAx(0),e.OEk(1,"Terminal"),e.k70())}function g(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,"\n    sudo apt update\n    sudo apt install build-essential git-core tcl\n  "),e.C$Y()())}function h(n,o){1&n&&(e.I0R(0,"a",23),e.OEk(1,"Latest XCode and Command Line Tools"),e.C$Y())}function S(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,'\n    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n    brew update\n    brew install git\n  '),e.C$Y()())}function k(n,o){1&n&&(e.I0R(0,"section",24),e.OEk(1,' Ensure you check "Add to PATH" whenever asked: '),e.I0R(2,"ol")(3,"li")(4,"a",25),e.OEk(5," Build Tools for Visual Studio 2017 "),e.C$Y()(),e.I0R(6,"li")(7,"a",26),e.OEk(8,"git"),e.C$Y()()(),e.I0R(9,"p",9),e.OEk(10,"Test that it installed correctly with:"),e.C$Y(),e.I0R(11,"pre",10)(12,"code",11),e.OEk(13,"\n      git --version\n      cl /?\n    "),e.C$Y()()())}function R(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,"\n    curl -L https://git.io/n-install | bash -s -- -y lts\n  "),e.C$Y()())}function I(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Download and setup from latest: "),e.I0R(2,"a",27),e.OEk(3,"'Windows Installer (.msi)' [LTS]"),e.C$Y(),e.OEk(4,". "),e.C$Y())}function C(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,"\n    # Alternatively build from source. Quick guide: https://askubuntu.com/a/868862\n    sudo add-apt-repository ppa:chris-lea/redis-server\n    sudo apt update\n    sudo apt install redis-server\n  "),e.C$Y()())}function O(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,"\n    brew install redis\n    brew services start redis\n  "),e.C$Y()())}function _(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Download and install the "),e.I0R(2,"a",28),e.OEk(3,"latest .msi"),e.C$Y(),e.OEk(4,". "),e.C$Y())}function w(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Follow "),e.I0R(2,"a",29),e.OEk(3,"their official guide"),e.C$Y(),e.OEk(4,". I prefer using latest version from their apt repository. "),e.C$Y())}function Y(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Follow "),e.I0R(2,"a",30),e.OEk(3,"their official guide"),e.C$Y(),e.OEk(4,". I prefer the "),e.I0R(5,"a",31),e.OEk(6,"EnterpriseDB package"),e.C$Y(),e.OEk(7,". "),e.C$Y())}function y(n,o){1&n&&(e.I0R(0,"p",9),e.OEk(1," Run this in an Administrator Command Prompt ("),e.I0R(2,"a",32),e.OEk(3,"how-to"),e.C$Y(),e.OEk(4,"): "),e.C$Y())}function $(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,'\n    POSTGRES_DB_USER=\'REPLACE_ME\'\n    REST_PASS=\'REPLACE_ME\' # recommend using `read -s REST_PASS`\n    POSTGRES_DB_NAME=\'REPLACE_ME\'\n\n    createuser --superuser "$POSTGRES_DB_USER"\n    psql -c "CREATE USER $POSTGRES_DB_USER WITH LOGIN PASSWORD \'$REST_PASS\';"\n    createdb "$POSTGRES_DB_NAME" --owner "$POSTGRES_DB_USER"\n    export RDBMS_URI="postgres://$POSTGRES_DB_USER:$REST_PASS@localhost/$POSTGRES_DB_NAME"\n    # ^Recommend adding this `export` line to your ~/.bash_profile\n  '),e.C$Y()())}function G(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",33),e.OEk(2,'\n    set POSTGRES_DB_USER="REPLACE_ME"\n    set REST_PASS="REPLACE_ME"\n    set POSTGRES_DB_NAME="REPLACE_ME"\n\n    createuser --superuser "%POSTGRES_DB_USER%"\n    psql -c "CREATE USER %POSTGRES_DB_USER% WITH LOGIN PASSWORD \'%REST_PASS%\';"\n    createdb "%POSTGRES_DB_NAME%" --owner "%POSTGRES_DB_USER%"\n\n    setx RDBMS_URI "postgres://%POSTGRES_DB_USER%:%REST_PASS%@localhost/%POSTGRES_DB_NAME%"\n    :: This last line will add RDBMS_URI to your environment\n  '),e.C$Y()())}function T(n,o){1&n&&(e.I0R(0,"p"),e.OEk(1," Alternatively use "),e.I0R(2,"a",34),e.OEk(3,"my script"),e.C$Y(),e.OEk(4,". "),e.C$Y())}function b(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,"\n    psql \"$RDBMS_URI\" -c 'SELECT 1'\n  "),e.C$Y()())}function A(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2,'\n    psql "%RDBMS_URI%" -c "SELECT 1"\n  '),e.C$Y()())}function P(n,o){1&n&&(e.I0R(0,"span")(1,"a",35)(2,"code"),e.OEk(3,"sed"),e.C$Y()(),e.OEk(4," and "),e.C$Y())}function D(n,o){1&n&&(e.I0R(0,"code"),e.OEk(1,"brew install hub"),e.C$Y())}function v(n,o){1&n&&(e.I0R(0,"span")(1,"a",36),e.OEk(2,"latest package"),e.C$Y(),e.OEk(3," for your platform."),e.C$Y())}function M(n,o){1&n&&(e.I0R(0,"pre",10)(1,"code",11),e.OEk(2),e.C$Y()()),2&n&&(e.yG2(2),e.CAO('\n    hub create organisation/"$',"{","PWD##*/","}","\" -d 'Description here'\n  "))}const L=[{path:"",component:(()=>{class n{constructor(i){this.platformPickerService=i,this.os=i.is.bind(i)}static#e=this.\u0275fac=function(a){return new(a||n)(e.GI1(c.E))};static#n=this.\u0275cmp=e.In1({type:n,selectors:[["app-getting-started"]],decls:105,vars:29,consts:[[1,"docs-markdown","pad"],[1,"docs-markdown-h5"],["class","docs-markdown-p",4,"ngIf"],[4,"ngIf"],["id","step-0-install-build-dependencies",1,"docs-header-link","docs-markdown-h3"],["class","docs-markdown-pre",4,"ngIf"],["href","https://developer.apple.com/downloads",4,"ngIf"],["class","docs-guide-content",4,"ngIf"],["id","step-1-install-nodejs",1,"docs-header-link","docs-markdown-h3"],[1,"docs-markdown-p"],[1,"docs-markdown-pre"],[1,"lang-bash","docs-markdown-code"],["id","step-2-install-redis",1,"docs-header-link","docs-markdown-h3"],["id","step-3-install-postgres",1,"docs-header-link","docs-markdown-h3"],["id","step-4-install-android",1,"docs-header-link","docs-markdown-h3"],["href","https://developer.android.com/studio/install.html",1,"docs-markdown-a"],["id","step-5-install-global-nodejs-packages",1,"docs-header-link","docs-markdown-h3"],["id","step-6-development-backend",1,"docs-header-link","docs-markdown-h3"],["id","step-7-angular-frontend",1,"docs-header-link","docs-markdown-h3"],["id","step-8-android",1,"docs-header-link","docs-markdown-h3"],["id","step-9-rebranding",1,"docs-header-link","docs-markdown-h3"],["href","https://github.com/sharkdp/fd"],["href","https://hub.github.com"],["href","https://developer.apple.com/downloads"],[1,"docs-guide-content"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15",1,"docs-markdown-a"],["href","https://git-scm.com/download/win",1,"docs-markdown-a"],["href","https://nodejs.org/en/download/",1,"docs-markdown-a"],["href","https://github.com/MicrosoftArchive/redis/releases",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/linux/ubuntu/",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/macosx/",1,"docs-markdown-a"],[1,"http://www.enterprisedb.com/products/pgdownload.do#macosx"],["href","https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx",1,"docs-markdown-a"],[1,"lang-batch","docs-markdown-code"],["href","https://github.com/offscale/offsh-postgres",1,"docs-markdown-a"],["href","https://chocolatey.org/packages/sed"],["href","https://github.com/github/hub/releases"]],template:function(a,t){1&a&&(e.I0R(0,"div",0)(1,"h5",1),e.OEk(2," This guides you to setting up your computer to run all my scaffolds. "),e.C$Y(),e.yuY(3,l,2,0,"p",2)(4,m,2,0,"p",2)(5,E,2,0,"p",2),e.I0R(6,"em"),e.OEk(7," All grey background assumes you are running in an active "),e.yuY(8,u,2,0,"ng-container",3)(9,f,2,0,"ng-container",3),e.OEk(10," session "),e.C$Y(),e.I0R(11,"h3",4),e.OEk(12," Step 0: Install build dependencies "),e.C$Y(),e.yuY(13,g,3,0,"pre",5)(14,h,2,0,"a",6)(15,S,3,0,"pre",5)(16,k,14,0,"section",7),e.I0R(17,"h3",8),e.OEk(18," Step 1: Install Node.js "),e.C$Y(),e.yuY(19,R,3,0,"pre",5)(20,I,5,0,"p",2),e.I0R(21,"p",9),e.OEk(22,"Test that it installed correctly with:"),e.C$Y(),e.I0R(23,"pre",10)(24,"code",11),e.OEk(25,"\n    node --version\n    npm --version\n  "),e.C$Y()(),e.I0R(26,"h3",12),e.OEk(27," Step 2: Install Redis "),e.C$Y(),e.yuY(28,C,3,0,"pre",5)(29,O,3,0,"pre",5)(30,_,5,0,"p",2),e.I0R(31,"p",9),e.OEk(32,"You can test it's installed and running with:"),e.C$Y(),e.I0R(33,"pre",10)(34,"code",11),e.OEk(35,"\n    redis-cli ping\n  "),e.C$Y()(),e.I0R(36,"p",9),e.OEk(37,"If that failed, open a new session and run this, then try the ping again:"),e.C$Y(),e.I0R(38,"pre",10)(39,"code",11),e.OEk(40,"\n    redis-server\n  "),e.C$Y()(),e.I0R(41,"h3",13),e.OEk(42," Step 3: Install and configure Postgres "),e.C$Y(),e.yuY(43,w,5,0,"p",2)(44,Y,8,0,"p",2)(45,y,5,0,"p",2)(46,$,3,0,"pre",5)(47,G,3,0,"pre",5)(48,T,5,0,"p",3),e.I0R(49,"p",9),e.OEk(50,"You can test it's installed and running with:"),e.C$Y(),e.yuY(51,b,3,0,"pre",5)(52,A,3,0,"pre",5),e.I0R(53,"h3",14),e.OEk(54," Step 4: Install Android dependencies and IDE "),e.C$Y(),e.I0R(55,"p",9),e.OEk(56," See "),e.I0R(57,"a",15),e.OEk(58,"official install guide"),e.C$Y(),e.OEk(59,". "),e.C$Y(),e.I0R(60,"h3",16),e.OEk(61," Step 5: Install global Node.js packages "),e.C$Y(),e.I0R(62,"pre",10)(63,"code",11),e.OEk(64,"\n    npm i -g bunyan typings typescript @angular/cli\n  "),e.C$Y()(),e.I0R(65,"h3",17),e.OEk(66," Step 6: Development backend (Node.js) "),e.C$Y(),e.I0R(67,"pre",10)(68,"code",11),e.OEk(69,"\n    git clone https://github.com/SamuelMarks/restify-orm-scaffold\n    cd restify-orm-scaffold\n    typings i\n    tsc\n    npm start\n  "),e.C$Y()(),e.I0R(70,"h3",18),e.OEk(71," Step 7: Angular frontend (web) "),e.C$Y(),e.I0R(72,"pre",10)(73,"code",11),e.OEk(74,"\n    git clone https://github.com/SamuelMarks/ng-material-scaffold\n    cd ng-material-scaffold\n    npm i\n    npm start\n  "),e.C$Y()(),e.I0R(75,"h3",19),e.OEk(76," Step 8: Android "),e.C$Y(),e.I0R(77,"pre",10)(78,"code",11),e.OEk(79,"\n    git clone https://github.com/SamuelMarks/android-auth-scaffold\n  "),e.C$Y()(),e.I0R(80,"p",9),e.OEk(81," Now open that in Android Studio; build and run it. "),e.C$Y(),e.I0R(82,"h3",20),e.OEk(83," Step 9: Branding "),e.C$Y(),e.I0R(84,"p",9),e.OEk(85,"Now is a good time to rename everything. Close all open windows, and let's begin."),e.C$Y(),e.I0R(86,"p",9),e.OEk(87,"Install "),e.yuY(88,P,5,0,"span",3),e.I0R(89,"a",21)(90,"code"),e.OEk(91,"fd"),e.C$Y()(),e.OEk(92,". Then within each of the repo directories, or from a parent directory, run:"),e.C$Y(),e.I0R(93,"pre",10)(94,"code",11),e.OEk(95),e.C$Y()(),e.I0R(96,"p",9),e.OEk(97,"You will need likely want to update descriptions and add DVCS repositories also. Install "),e.I0R(98,"a",22)(99,"code"),e.OEk(100,"hub"),e.C$Y()(),e.OEk(101," with "),e.yuY(102,D,2,0,"code",3)(103,v,4,0,"span",3),e.C$Y(),e.yuY(104,M,3,2,"pre",5),e.C$Y()),2&a&&(e.yG2(3),e.E7m("ngIf",t.os("Linux")),e.yG2(),e.E7m("ngIf",t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(3),e.E7m("ngIf",t.os("Windows")),e.yG2(),e.E7m("ngIf",t.os("macOS")||t.os("Linux")),e.yG2(4),e.E7m("ngIf",t.os("Linux")),e.yG2(),e.E7m("ngIf",t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(3),e.E7m("ngIf",t.os("Linux")||t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(8),e.E7m("ngIf",t.os("Linux")),e.yG2(),e.E7m("ngIf",t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(13),e.E7m("ngIf",t.os("Linux")),e.yG2(),e.E7m("ngIf",t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(),e.E7m("ngIf",t.os("Linux")||t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(),e.E7m("ngIf",t.os("Linux")||t.os("macOS")),e.yG2(3),e.E7m("ngIf",t.os("Linux")||t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Windows")),e.yG2(36),e.E7m("ngIf",t.os("Windows")),e.yG2(7),e.MjK("\n    fd -t f -exec sed -i 's/ng-material-scaffold/projectname/g' ","{}"," \\;\n    fd -t f -exec sed -i 's/NgMaterialScaffold/projectname/g' ","{}"," \\;\n\n    fd -t f -exec sed -i 's/restify-orm-scaffold/projectname/g' ","{}"," \\;\n  "),e.yG2(7),e.E7m("ngIf",t.os("macOS")),e.yG2(),e.E7m("ngIf",t.os("Linux")),e.yG2(),e.E7m("ngIf",t.os("Linux")||t.os("macOS")))},dependencies:[r.u_],styles:[".pad[_ngcontent-%COMP%]{padding:0 3em}"]})}return n})()}];let B=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=e.a4G({type:n});static#t=this.\u0275inj=e.s3X({imports:[r.MD,p.qQ,p.qQ.forChild(L)]})}return n})()}}]);