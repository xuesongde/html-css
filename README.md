# html-css

> 零散知识点汇总;

> 有趣的写法,效果;


>https://easy-mock.com/    /**接口数据模拟**/
/**
 *   csdn
     *** song_de ***
     *** xuesongde123456 ***
*/
读书快应用企业账号
wangdou@vread.cn
密码:Yuedu2018
 INSTALLATION ON THE WIN64 PLATFORM
 ----------------------------------
 Caveat lector
 -------------

 As of moment of this writing Win64 support is classified "initial"
 for the following reasons.

 - No assembler modules are engaged upon initial 0.9.8 release.
 - API might change within 0.9.8 life-span, *but* in a manner which
   doesn't break backward binary compatibility. Or in other words,
   application programs compiled with initial 0.9.8 headers will
   be expected to work with future minor release .DLL without need
   to re-compile, even if future minor release features modified API.
 - Above mentioned API modifications have everything to do with
   elimination of a number of limitations, which are normally
   considered inherent to 32-bit platforms. Which in turn is why they
   are treated as limitations on 64-bit platform such as Win64:-)
   The current list comprises [but not necessarily limited to]:

   - null-terminated strings may not be longer than 2G-1 bytes,
     longer strings are treated as zero-length;
   - dynamically and *internally* allocated chunks can't be larger
     than 2G-1 bytes;
   - inability to encrypt/decrypt chunks of data larger than 4GB
     [it's possibly to *hash* chunks of arbitrary size through];

   Neither of these is actually big deal and hardly encountered
   in real-life applications.

 Compiling procedure
 -------------------

 You will need Perl. You can run under Cygwin or you can download
 ActiveState Perl from http://www.activestate.com/ActivePerl.

 You will need Microsoft Platform SDK, available for download at
 http://www.microsoft.com/msdownload/platformsdk/sdkupdate/. As per
 April 2005 Platform SDK is equipped with Win64 compilers, as well
 as assemblers, but it might change in the future.

 To build for Win64/x64:

 > perl Configure VC-WIN64A
 > ms\do_win64a
 > nmake -f ms\ntdll.mak
 > cd out32dll
 > ..\ms\test

 To build for Win64/IA64:

 > perl Configure VC-WIN64I
 > ms\do_win64i
 > nmake -f ms\ntdll.mak
 > cd out32dll
 > ..\ms\test

 Naturally test-suite itself has to be executed on the target platform.

 Installation
 ------------

 TBD, for now see INSTALL.W32.

set OPENSSL_CONF=E:\sina_work\sina_soft\openssl-1.0.2o\bin\openssl.cnf  设置配置文件
openssl req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem  生成签名
升级快应用步骤:
1,修改版本号versionName versionCode2,重新打包3,发布厂商应用商店

查询设备IMEI号 *#06#  868029029049863  测试机

yarn 装包 提示网络连接异常 重试解决办法
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist

oppo平台账号密码
lwychishi
qQ123456
家园网人力电话:57789188 张梦:15150991570 考勤
新浪人力:010-52719373

react drag beautiful : https://github.com/atlassian/react-beautiful-dnd 
https://codesandbox.io/s/k260nyxq9v  example

https://getbootstrap.com/docs/4.3/utilities/text/  document of bootstrap
https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background  A Complete Guide to Flexbox
https://github.com/Upmostly/custom-react-hooks-form-validation  react hooks validation