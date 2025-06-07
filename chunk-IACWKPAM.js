import{a as g}from"./chunk-AMFMST4Q.js";import{Ab as c,F as p,Qa as e,Ta as h,Ua as E,_ as d,ca as S,fa as u,ga as f,pb as _,ra as l,sa as r,xa as n,ya as t}from"./chunk-CUKYO2HP.js";function T(i,o){i&1&&(n(0,"p",2),e(1," Though this guide is for the Ubuntu linux; it should be easy to retrofit to others. "),t())}function R(i,o){i&1&&(n(0,"p",2),e(1," Though this guide has been tested on macOS High Sierra; it will probably work on older versions. "),t())}function v(i,o){i&1&&(n(0,"p",2),e(1," Follow this guide on Windows 7+. "),t())}function k(i,o){i&1&&e(0," Command Prompt (cmd.exe) ")}function b(i,o){i&1&&e(0," Terminal ")}function G(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
      sudo apt update
      sudo apt install build-essential git-core tcl
    `),t()())}function y(i,o){i&1&&(n(0,"a",5),e(1,"Latest XCode and Command Line Tools"),t())}function P(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
      /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      brew update
      brew install git
    `),t()())}function A(i,o){i&1&&(n(0,"section",6),e(1,' Ensure you check "Add to PATH" whenever asked: '),n(2,"ol")(3,"li")(4,"a",20),e(5," Build Tools for Visual Studio 2017 "),t()(),n(6,"li")(7,"a",21),e(8,"git"),t()()(),n(9,"p",2),e(10,"Test that it installed correctly with:"),t(),n(11,"pre",4)(12,"code",8),e(13,`
        git --version
        cl /?
      `),t()()())}function O(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
      curl -L https://git.io/n-install | bash -s -- -y lts
    `),t()())}function D(i,o){i&1&&(n(0,"p",2),e(1," Download and setup from latest: "),n(2,"a",22),e(3,"'Windows Installer (.msi)' [LTS]"),t(),e(4,". "),t())}function M(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
    # Alternatively build from source. Quick guide: https://askubuntu.com/a/868862
    sudo add-apt-repository ppa:chris-lea/redis-server
    sudo apt update
    sudo apt install redis-server
  `),t()())}function I(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
    brew install redis
    brew services start redis
  `),t()())}function L(i,o){i&1&&(n(0,"p",2),e(1," Download and install the "),n(2,"a",23),e(3,"latest .msi"),t(),e(4,`.
`),t())}function B(i,o){i&1&&(n(0,"p",2),e(1," Follow "),n(2,"a",24),e(3,"their official guide"),t(),e(4,". I prefer using latest version from their apt repository. "),t())}function U(i,o){i&1&&(n(0,"p",2),e(1," Follow "),n(2,"a",25),e(3,"their official guide"),t(),e(4,". I prefer the "),n(5,"a",26),e(6,"EnterpriseDB package"),t(),e(7,". "),t())}function N(i,o){i&1&&(n(0,"p",2),e(1," Run this in an Administrator Command Prompt ("),n(2,"a",27),e(3,"how-to"),t(),e(4,`):
`),t())}function W(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
    POSTGRES_DB_USER='REPLACE_ME'
    REST_PASS='REPLACE_ME' # recommend using \`read -s REST_PASS\`
    POSTGRES_DB_NAME='REPLACE_ME'
    createuser --superuser "$POSTGRES_DB_USER"
    psql -c "CREATE USER $POSTGRES_DB_USER WITH LOGIN PASSWORD '$REST_PASS';"
    createdb "$POSTGRES_DB_NAME" --owner "$POSTGRES_DB_USER"
    export RDBMS_URI="postgres://$POSTGRES_DB_USER:$REST_PASS@localhost/$POSTGRES_DB_NAME"
    # ^Recommend adding this \`export\` line to your ~/.bash_profile
  `),t()())}function j(i,o){i&1&&(n(0,"pre",4)(1,"code",28),e(2,`
    set POSTGRES_DB_USER="REPLACE_ME"
    set REST_PASS="REPLACE_ME"
    set POSTGRES_DB_NAME="REPLACE_ME"
    createuser --superuser "%POSTGRES_DB_USER%"
    psql -c "CREATE USER %POSTGRES_DB_USER% WITH LOGIN PASSWORD '%REST_PASS%';"
    createdb "%POSTGRES_DB_NAME%" --owner "%POSTGRES_DB_USER%"
    setx RDBMS_URI "postgres://%POSTGRES_DB_USER%:%REST_PASS%@localhost/%POSTGRES_DB_NAME%"
    :: This last line will add RDBMS_URI to your environment
  `),t()())}function $(i,o){i&1&&(n(0,"p"),e(1," Alternatively use "),n(2,"a",29),e(3,"my script"),t(),e(4,`.
`),t())}function q(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
    psql "$RDBMS_URI" -c 'SELECT 1'
  `),t()())}function F(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2,`
    psql "%RDBMS_URI%" -c "SELECT 1"
  `),t()())}function H(i,o){i&1&&(n(0,"span")(1,"a",30)(2,"code"),e(3,"sed"),t()(),e(4," and "),t())}function Y(i,o){i&1&&(n(0,"code"),e(1,"brew install hub"),t())}function V(i,o){i&1&&(n(0,"span")(1,"a",31),e(2,"latest package"),t(),e(3," for your platform."),t())}function Q(i,o){i&1&&(n(0,"pre",4)(1,"code",8),e(2),t()()),i&2&&(d(2),h(`
    hub create organisation/"$`,"{","PWD##*/","}",`" -d 'Description here'
  `))}var x=(()=>{let o=class o{constructor(s){this.platformPickerService=s,this.os=s.is.bind(s)}};o.\u0275fac=function(m){return new(m||o)(S(g))},o.\u0275cmp=u({type:o,selectors:[["app-getting-started"]],standalone:!1,decls:105,vars:29,consts:[[1,"docs-markdown","pad"],[1,"docs-markdown-h5"],[1,"docs-markdown-p"],["id","step-0-install-build-dependencies",1,"docs-header-link","docs-markdown-h3"],[1,"docs-markdown-pre"],["href","https://developer.apple.com/downloads"],[1,"docs-guide-content"],["id","step-1-install-nodejs",1,"docs-header-link","docs-markdown-h3"],[1,"lang-bash","docs-markdown-code"],["id","step-2-install-redis",1,"docs-header-link","docs-markdown-h3"],["id","step-3-install-postgres",1,"docs-header-link","docs-markdown-h3"],["id","step-4-install-android",1,"docs-header-link","docs-markdown-h3"],["href","https://developer.android.com/studio/install.html",1,"docs-markdown-a"],["id","step-5-install-global-nodejs-packages",1,"docs-header-link","docs-markdown-h3"],["id","step-6-development-backend",1,"docs-header-link","docs-markdown-h3"],["id","step-7-angular-frontend",1,"docs-header-link","docs-markdown-h3"],["id","step-8-android",1,"docs-header-link","docs-markdown-h3"],["id","step-9-rebranding",1,"docs-header-link","docs-markdown-h3"],["href","https://github.com/sharkdp/fd"],["href","https://hub.github.com"],["href","https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=15",1,"docs-markdown-a"],["href","https://git-scm.com/download/win",1,"docs-markdown-a"],["href","https://nodejs.org/en/download/",1,"docs-markdown-a"],["href","https://github.com/MicrosoftArchive/redis/releases",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/linux/ubuntu/",1,"docs-markdown-a"],["href","https://www.postgresql.org/download/macosx/",1,"docs-markdown-a"],[1,"http://www.enterprisedb.com/products/pgdownload.do#macosx"],["href","https://technet.microsoft.com/en-us/library/cc947813(v=ws.10).aspx",1,"docs-markdown-a"],[1,"lang-batch","docs-markdown-code"],["href","https://github.com/offscale/offsh-postgres",1,"docs-markdown-a"],["href","https://chocolatey.org/packages/sed"],["href","https://github.com/github/hub/releases"]],template:function(m,a){m&1&&(n(0,"div",0)(1,"h5",1),e(2," This guides you to setting up your computer to run all my scaffolds. "),t(),l(3,T,2,0,"p",2),l(4,R,2,0,"p",2),l(5,v,2,0,"p",2),n(6,"em"),e(7," All grey background assumes you are running in an active "),l(8,k,1,0),l(9,b,1,0),e(10," session "),t(),n(11,"h3",3),e(12," Step 0: Install build dependencies "),t(),l(13,G,3,0,"pre",4),l(14,y,2,0,"a",5),l(15,P,3,0,"pre",4),l(16,A,14,0,"section",6),n(17,"h3",7),e(18," Step 1: Install Node.js "),t(),l(19,O,3,0,"pre",4),l(20,D,5,0,"p",2),n(21,"p",2),e(22,"Test that it installed correctly with:"),t(),n(23,"pre",4)(24,"code",8),e(25,`
  node --version
  npm --version
`),t()(),n(26,"h3",9),e(27,` Step 2: Install Redis
`),t(),l(28,M,3,0,"pre",4),l(29,I,3,0,"pre",4),l(30,L,5,0,"p",2),n(31,"p",2),e(32,"You can test it's installed and running with:"),t(),n(33,"pre",4)(34,"code",8),e(35,`
  redis-cli ping
`),t()(),n(36,"p",2),e(37,"If that failed, open a new session and run this, then try the ping again:"),t(),n(38,"pre",4)(39,"code",8),e(40,`
  redis-server
`),t()(),n(41,"h3",10),e(42,` Step 3: Install and configure Postgres
`),t(),l(43,B,5,0,"p",2),l(44,U,8,0,"p",2),l(45,N,5,0,"p",2),l(46,W,3,0,"pre",4),l(47,j,3,0,"pre",4),l(48,$,5,0,"p"),n(49,"p",2),e(50,"You can test it's installed and running with:"),t(),l(51,q,3,0,"pre",4),l(52,F,3,0,"pre",4),n(53,"h3",11),e(54,` Step 4: Install Android dependencies and IDE
`),t(),n(55,"p",2),e(56," See "),n(57,"a",12),e(58,"official install guide"),t(),e(59,`.
`),t(),n(60,"h3",13),e(61,` Step 5: Install global Node.js packages
`),t(),n(62,"pre",4)(63,"code",8),e(64,`
  npm i -g bunyan typings typescript @angular/cli
`),t()(),n(65,"h3",14),e(66,` Step 6: Development backend (Node.js)
`),t(),n(67,"pre",4)(68,"code",8),e(69,`
  git clone https://github.com/SamuelMarks/restify-orm-scaffold
  cd restify-orm-scaffold
  typings i
  tsc
  npm start
`),t()(),n(70,"h3",15),e(71,` Step 7: Angular frontend (web)
`),t(),n(72,"pre",4)(73,"code",8),e(74,`
  git clone https://github.com/SamuelMarks/ng-material-scaffold
  cd ng-material-scaffold
  npm i
  npm start
`),t()(),n(75,"h3",16),e(76,` Step 8: Android
`),t(),n(77,"pre",4)(78,"code",8),e(79,`
  git clone https://github.com/SamuelMarks/android-auth-scaffold
`),t()(),n(80,"p",2),e(81,` Now open that in Android Studio; build and run it.
`),t(),n(82,"h3",17),e(83,` Step 9: Branding
`),t(),n(84,"p",2),e(85,"Now is a good time to rename everything. Close all open windows, and let's begin."),t(),n(86,"p",2),e(87,"Install "),l(88,H,5,0,"span"),n(89,"a",18)(90,"code"),e(91,"fd"),t()(),e(92,`.
Then within each of the repo directories, or from a parent directory, run:`),t(),n(93,"pre",4)(94,"code",8),e(95),t()(),n(96,"p",2),e(97,"You will need likely want to update descriptions and add DVCS repositories also. Install "),n(98,"a",19)(99,"code"),e(100,"hub"),t()(),e(101," with "),l(102,Y,2,0,"code"),l(103,V,4,0,"span"),t(),l(104,Q,3,2,"pre",4),t()),m&2&&(d(3),r(a.os("Linux")?3:-1),d(),r(a.os("macOS")?4:-1),d(),r(a.os("Windows")?5:-1),d(3),r(a.os("Windows")?8:-1),d(),r(a.os("macOS")||a.os("Linux")?9:-1),d(4),r(a.os("Linux")?13:-1),d(),r(a.os("macOS")?14:-1),d(),r(a.os("macOS")?15:-1),d(),r(a.os("Windows")?16:-1),d(3),r(a.os("Linux")||a.os("macOS")?19:-1),d(),r(a.os("Windows")?20:-1),d(8),r(a.os("Linux")?28:-1),d(),r(a.os("macOS")?29:-1),d(),r(a.os("Windows")?30:-1),d(13),r(a.os("Linux")?43:-1),d(),r(a.os("macOS")?44:-1),d(),r(a.os("Windows")?45:-1),d(),r(a.os("Linux")||a.os("macOS")?46:-1),d(),r(a.os("Windows")?47:-1),d(),r(a.os("Linux")||a.os("macOS")?48:-1),d(3),r(a.os("Linux")||a.os("macOS")?51:-1),d(),r(a.os("Windows")?52:-1),d(36),r(a.os("Windows")?88:-1),d(7),E(`
  fd -t f -exec sed -i 's/ng-material-scaffold/projectname/g' `,"{}",` \\;
  fd -t f -exec sed -i 's/NgMaterialScaffold/projectname/g' `,"{}",` \\;

  fd -t f -exec sed -i 's/restify-orm-scaffold/projectname/g' `,"{}",` \\;
`),d(7),r(a.os("macOS")?102:-1),d(),r(a.os("Linux")?103:-1),d(),r(a.os("Linux")||a.os("macOS")?104:-1))},styles:[".pad[_ngcontent-%COMP%]{padding:0 3em}"]});let i=o;return i})();var C=[{path:"",component:x}];var oe=(()=>{let o=class o{};o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=f({type:o}),o.\u0275inj=p({imports:[_,c,c.forChild(C)]});let i=o;return i})();export{oe as GettingStartedModule};
