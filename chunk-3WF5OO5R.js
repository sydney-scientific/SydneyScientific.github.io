import{a as T}from"./chunk-RBVHDBRZ.js";import{Aa as c,Cb as S,F as f,J as u,K as g,Qa as e,Ta as E,Ua as _,aa as a,ba as h,na as l,pb as x,ra as r,rb as w,wa as n,xa as t,za as m}from"./chunk-VH5225LI.js";function I(i,d){i&1&&(n(0,"p",9),e(1," Though this guide is for the Ubuntu linux; it should be easy to retrofit to others. "),t())}function k(i,d){i&1&&(n(0,"p",9),e(1," Though this guide has been tested on macOS High Sierra; it will probably work on older versions. "),t())}function C(i,d){i&1&&(n(0,"p",9),e(1," Follow this guide on Windows 7+. "),t())}function b(i,d){i&1&&(m(0),e(1,"Command Prompt (cmd.exe)"),c())}function G(i,d){i&1&&(m(0),e(1,"Terminal"),c())}function P(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    sudo apt update
    sudo apt install build-essential git-core tcl
  `),t()())}function A(i,d){i&1&&(n(0,"a",23),e(1,"Latest XCode and Command Line Tools"),t())}function O(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew update
    brew install git
  `),t()())}function D(i,d){i&1&&(n(0,"section",24),e(1,' Ensure you check "Add to PATH" whenever asked: '),n(2,"ol")(3,"li")(4,"a",25),e(5," Build Tools for Visual Studio 2017 "),t()(),n(6,"li")(7,"a",26),e(8,"git"),t()()(),n(9,"p",9),e(10,"Test that it installed correctly with:"),t(),n(11,"pre",10)(12,"code",11),e(13,`
      git --version
      cl /?
    `),t()()())}function M(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    curl -L https://git.io/n-install | bash -s -- -y lts
  `),t()())}function L(i,d){i&1&&(n(0,"p",9),e(1," Download and setup from latest: "),n(2,"a",27),e(3,"'Windows Installer (.msi)' [LTS]"),t(),e(4,". "),t())}function B(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    # Alternatively build from source. Quick guide: https://askubuntu.com/a/868862
    sudo add-apt-repository ppa:chris-lea/redis-server
    sudo apt update
    sudo apt install redis-server
  `),t()())}function U(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    brew install redis
    brew services start redis
  `),t()())}function N(i,d){i&1&&(n(0,"p",9),e(1," Download and install the "),n(2,"a",28),e(3,"latest .msi"),t(),e(4,". "),t())}function W(i,d){i&1&&(n(0,"p",9),e(1," Follow "),n(2,"a",29),e(3,"their official guide"),t(),e(4,". I prefer using latest version from their apt repository. "),t())}function j(i,d){i&1&&(n(0,"p",9),e(1," Follow "),n(2,"a",30),e(3,"their official guide"),t(),e(4,". I prefer the "),n(5,"a",31),e(6,"EnterpriseDB package"),t(),e(7,". "),t())}function $(i,d){i&1&&(n(0,"p",9),e(1," Run this in an Administrator Command Prompt ("),n(2,"a",32),e(3,"how-to"),t(),e(4,"): "),t())}function q(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    POSTGRES_DB_USER='REPLACE_ME'
    REST_PASS='REPLACE_ME' # recommend using \`read -s REST_PASS\`
    POSTGRES_DB_NAME='REPLACE_ME'

    createuser --superuser "$POSTGRES_DB_USER"
    psql -c "CREATE USER $POSTGRES_DB_USER WITH LOGIN PASSWORD '$REST_PASS';"
    createdb "$POSTGRES_DB_NAME" --owner "$POSTGRES_DB_USER"
    export RDBMS_URI="postgres://$POSTGRES_DB_USER:$REST_PASS@localhost/$POSTGRES_DB_NAME"
    # ^Recommend adding this \`export\` line to your ~/.bash_profile
  `),t()())}function F(i,d){i&1&&(n(0,"pre",10)(1,"code",33),e(2,`
    set POSTGRES_DB_USER="REPLACE_ME"
    set REST_PASS="REPLACE_ME"
    set POSTGRES_DB_NAME="REPLACE_ME"

    createuser --superuser "%POSTGRES_DB_USER%"
    psql -c "CREATE USER %POSTGRES_DB_USER% WITH LOGIN PASSWORD '%REST_PASS%';"
    createdb "%POSTGRES_DB_NAME%" --owner "%POSTGRES_DB_USER%"

    setx RDBMS_URI "postgres://%POSTGRES_DB_USER%:%REST_PASS%@localhost/%POSTGRES_DB_NAME%"
    :: This last line will add RDBMS_URI to your environment
  `),t()())}function H(i,d){i&1&&(n(0,"p"),e(1," Alternatively use "),n(2,"a",34),e(3,"my script"),t(),e(4,". "),t())}function Y(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    psql "$RDBMS_URI" -c 'SELECT 1'
  `),t()())}function V(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2,`
    psql "%RDBMS_URI%" -c "SELECT 1"
  `),t()())}function Q(i,d){i&1&&(n(0,"span")(1,"a",35)(2,"code"),e(3,"sed"),t()(),e(4," and "),t())}function X(i,d){i&1&&(n(0,"code"),e(1,"brew install hub"),t())}function z(i,d){i&1&&(n(0,"span")(1,"a",36),e(2,"latest package"),t(),e(3," for your platform."),t())}function J(i,d){i&1&&(n(0,"pre",10)(1,"code",11),e(2),t()()),i&2&&(a(2),E(`
    hub create organisation/"$`,"{","PWD##*/","}",`" -d 'Description here'
  `))}var y=(()=>{class i{constructor(s){this.platformPickerService=s,this.os=s.is.bind(s)}static{this.\u0275fac=function(p){return new(p||i)(h(T))}}static{this.\u0275cmp=u({type:i,selectors:[["app-getting-started"]],decls:105,vars:29,consts:[[1,"docs-markdown","pad"],[1,"docs-markdown-h5"],["class","docs-markdown-p",4,"ngIf"],[4,"ngIf"],["id","step-0-install-build-dependencies",1,"docs-header-link","docs-markdown-h3"],["class","docs-markdown-pre",4,"ngIf"],["href","https://developer.apple.com/downloads",4,"ngIf"],["class","docs-guide-content",4,"ngIf"],["id","step-1-install-nodejs",1,"docs-header-link","docs-markdown-h3"],[1,"docs-markdown-p"],[1,"docs-markdown-pre"],[1,"lang-bash","docs-markdown-code"],["id","step-2-install-redis",1,"docs-header-link","docs-markdown-h3"],["id","step-3-install-postgres",1,"docs-header-link","docs-markdown-h3"],["id","step-4-install-android",1,"docs-header-link","docs-markdown-h3"],["href","https://developer.android.com/studio/install.html",1,"docs-markdown-a"],["id","step-5-install-global-nodejs-packages",1,"docs-header-link","docs-markdown-h3"],["id","step-6-development-backend",1,"docs-header-link","docs-markdown-h3"],["id","step-7-angular-frontend",1,"docs-header-link","docs-markdown-h3"],["id","step-8-android",1,"docs-header-link","docs-markdown-h3"],["id","step-9-rebranding",1,"docs-header-link","docs-markdown-h3"],["href","https://github.com/sharkdp/fd"],["href","https://hub.github.com"],["href","https://developer.apple.com/downloads"],[1,"docs-guide-content"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15",1,"docs-markdown-a"],["href","https://git-scm.com/download/win",1,"docs-markdown-a"],["href","https://nodejs.org/en/download/",1,"docs-markdown-a"],["href","https://github.com/MicrosoftArchive/redis/releases",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/linux/ubuntu/",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/macosx/",1,"docs-markdown-a"],[1,"http://www.enterprisedb.com/products/pgdownload.do#macosx"],["href","https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx",1,"docs-markdown-a"],[1,"lang-batch","docs-markdown-code"],["href","https://github.com/offscale/offsh-postgres",1,"docs-markdown-a"],["href","https://chocolatey.org/packages/sed"],["href","https://github.com/github/hub/releases"]],template:function(p,o){p&1&&(n(0,"div",0)(1,"h5",1),e(2," This guides you to setting up your computer to run all my scaffolds. "),t(),l(3,I,2,0,"p",2)(4,k,2,0,"p",2)(5,C,2,0,"p",2),n(6,"em"),e(7," All grey background assumes you are running in an active "),l(8,b,2,0,"ng-container",3)(9,G,2,0,"ng-container",3),e(10," session "),t(),n(11,"h3",4),e(12," Step 0: Install build dependencies "),t(),l(13,P,3,0,"pre",5)(14,A,2,0,"a",6)(15,O,3,0,"pre",5)(16,D,14,0,"section",7),n(17,"h3",8),e(18," Step 1: Install Node.js "),t(),l(19,M,3,0,"pre",5)(20,L,5,0,"p",2),n(21,"p",9),e(22,"Test that it installed correctly with:"),t(),n(23,"pre",10)(24,"code",11),e(25,`
    node --version
    npm --version
  `),t()(),n(26,"h3",12),e(27," Step 2: Install Redis "),t(),l(28,B,3,0,"pre",5)(29,U,3,0,"pre",5)(30,N,5,0,"p",2),n(31,"p",9),e(32,"You can test it's installed and running with:"),t(),n(33,"pre",10)(34,"code",11),e(35,`
    redis-cli ping
  `),t()(),n(36,"p",9),e(37,"If that failed, open a new session and run this, then try the ping again:"),t(),n(38,"pre",10)(39,"code",11),e(40,`
    redis-server
  `),t()(),n(41,"h3",13),e(42," Step 3: Install and configure Postgres "),t(),l(43,W,5,0,"p",2)(44,j,8,0,"p",2)(45,$,5,0,"p",2)(46,q,3,0,"pre",5)(47,F,3,0,"pre",5)(48,H,5,0,"p",3),n(49,"p",9),e(50,"You can test it's installed and running with:"),t(),l(51,Y,3,0,"pre",5)(52,V,3,0,"pre",5),n(53,"h3",14),e(54," Step 4: Install Android dependencies and IDE "),t(),n(55,"p",9),e(56," See "),n(57,"a",15),e(58,"official install guide"),t(),e(59,". "),t(),n(60,"h3",16),e(61," Step 5: Install global Node.js packages "),t(),n(62,"pre",10)(63,"code",11),e(64,`
    npm i -g bunyan typings typescript @angular/cli
  `),t()(),n(65,"h3",17),e(66," Step 6: Development backend (Node.js) "),t(),n(67,"pre",10)(68,"code",11),e(69,`
    git clone https://github.com/SamuelMarks/restify-orm-scaffold
    cd restify-orm-scaffold
    typings i
    tsc
    npm start
  `),t()(),n(70,"h3",18),e(71," Step 7: Angular frontend (web) "),t(),n(72,"pre",10)(73,"code",11),e(74,`
    git clone https://github.com/SamuelMarks/ng-material-scaffold
    cd ng-material-scaffold
    npm i
    npm start
  `),t()(),n(75,"h3",19),e(76," Step 8: Android "),t(),n(77,"pre",10)(78,"code",11),e(79,`
    git clone https://github.com/SamuelMarks/android-auth-scaffold
  `),t()(),n(80,"p",9),e(81," Now open that in Android Studio; build and run it. "),t(),n(82,"h3",20),e(83," Step 9: Branding "),t(),n(84,"p",9),e(85,"Now is a good time to rename everything. Close all open windows, and let's begin."),t(),n(86,"p",9),e(87,"Install "),l(88,Q,5,0,"span",3),n(89,"a",21)(90,"code"),e(91,"fd"),t()(),e(92,". Then within each of the repo directories, or from a parent directory, run:"),t(),n(93,"pre",10)(94,"code",11),e(95),t()(),n(96,"p",9),e(97,"You will need likely want to update descriptions and add DVCS repositories also. Install "),n(98,"a",22)(99,"code"),e(100,"hub"),t()(),e(101," with "),l(102,X,2,0,"code",3)(103,z,4,0,"span",3),t(),l(104,J,3,2,"pre",5),t()),p&2&&(a(3),r("ngIf",o.os("Linux")),a(),r("ngIf",o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(3),r("ngIf",o.os("Windows")),a(),r("ngIf",o.os("macOS")||o.os("Linux")),a(4),r("ngIf",o.os("Linux")),a(),r("ngIf",o.os("macOS")),a(),r("ngIf",o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(3),r("ngIf",o.os("Linux")||o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(8),r("ngIf",o.os("Linux")),a(),r("ngIf",o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(13),r("ngIf",o.os("Linux")),a(),r("ngIf",o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(),r("ngIf",o.os("Linux")||o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(),r("ngIf",o.os("Linux")||o.os("macOS")),a(3),r("ngIf",o.os("Linux")||o.os("macOS")),a(),r("ngIf",o.os("Windows")),a(36),r("ngIf",o.os("Windows")),a(7),_(`
    fd -t f -exec sed -i 's/ng-material-scaffold/projectname/g' `,"{}",` \\;
    fd -t f -exec sed -i 's/NgMaterialScaffold/projectname/g' `,"{}",` \\;

    fd -t f -exec sed -i 's/restify-orm-scaffold/projectname/g' `,"{}",` \\;
  `),a(7),r("ngIf",o.os("macOS")),a(),r("ngIf",o.os("Linux")),a(),r("ngIf",o.os("Linux")||o.os("macOS")))},dependencies:[x],styles:[".pad[_ngcontent-%COMP%]{padding:0 3em}"]})}}return i})();var R=[{path:"",component:y}];var le=(()=>{class i{static{this.\u0275fac=function(p){return new(p||i)}}static{this.\u0275mod=g({type:i})}static{this.\u0275inj=f({imports:[w,S,S.forChild(R)]})}}return i})();export{le as GettingStartedModule};
