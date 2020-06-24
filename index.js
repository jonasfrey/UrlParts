// import me like this <script src="..." type="module"></script>
// ^ if you get: Uncaught SyntaxError: Unexpected token {
// ^ if you get: Uncaught SyntaxError: Unexpected token export
/*
import {
  IsDependingOn
}
from './IsDependingOn.js';
*/

class UrlParts {
    constructor(string) {
      //string examples
      //uri schemes  https://en.wikipedia.org/wiki/List_of_URI_schemes
      /**
       * protocol 
       * so far i could only get the browser trying to load these 
       * http://
       * https://
       * ftp://
       * but not all listed here 
       * https://en.wikipedia.org/wiki/Diameter_(protocol)
       * dns://
       * ... 
       * only ipv4, ipv6, domain, subdomain domain
       * 111.111.111.111
       * [1080::8:800:200c:417a]
       * domain.com
       * sub.domain.com
       * localhost
       * sub.localhost
       * 
       * 
       * ipv4, ipv6, domain, subdomain domain, all with port and or user
       * asdf:pass@111.111.111.111:11
       * user:passw@[1080::8:800:200c:417a]:22
       * user:pass@domain.com:333
       * us:pas@sub.domain.com:11235
       * as:pa@localhost
       * us:pas@sub.localhost
       * 
       * 
       * ipv4, ipv6, domain, subdomain domain, all with port and or user
       * asdf:pass@111.111.111.111:11
       * user:passw@[1080::8:800:200c:417a]:22
       * user:pass@domain.com:333
       * us:pas@sub.domain.com:11235
       *
       * 155.111.111.111/asdf/filename.ext
       * domainwithoutprotocol.com/foldername/filenamewithoutext
       * sub.domainwithoutprotocol.com/folder.name.cont.dot/foldername
       * http://sub.domwithprot.com/
       * 
       * http://sub.domain.two.com/asdf.asdf/asdf
       * 
       * one can also pass only a file but then the path must start with ./ if it is 
       * or with / 
       * so:
       * './thats.my.file'
       * or 
       * '/var/www/node/thats.my.file'
       */
      this.get(string);
    }
  
    /*
    get_testurls() {
        return [
        "./only/a/relative/path",
        "./only/a/relative/path.exe",
        "./only/a/relative/path.exe.asdf",
        "./only/a/relative/path.exe.asdf/asdf.exe",
        "./only/a/relative/path.exe.asdf/asdf.exe@some.exe",
        "./only/a/relative/path.exe.asdf/asdf.exe@some.exe/asdf",
        "./only/a/relative/path.exe.asdf/asdf.exe@some.exe/asdf/",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/asdf.exe",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/asdf.exe/.././asdf",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/asdf.exe/.././asdf/",
        "/one/absolute/path",
        "/one/absolute/path.exe",
        "/one/absolute/path.exe.asdf",
        "/one/absolute/path.exe.asdf/asdf.exe",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/asdf.exe",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/asdf.exe/.././asdf",
        "/one/absolute/path.exe.asdf/asdf.exe@some.exe/asdf/asdf.exe/.././asdf/",
         "http://foo.com/blah_blah",
         "http://foo.com/blah_blah/",
         "http://foo.com/blah_blah_(wikipedia)",
         "http://www.example.com/wpstyle/?p=364",
         "http://www.example.com/wpstyle?p=364",
         "https://www.example.com/foo/?bar=baz&inga=42&quux",
         "http://✪df.ws/123",
         "http://userid:password@example.com:8080",
         "http://userid:password@example.com:8080/",
         "http://userid@example.com",
         "http://userid@example.com/",
         "http://userid@example.com:8080",
         "http://userid@example.com:8080/",
         "http://userid:password@example.com",
         "http://userid:password@example.com/",
         "http://142.42.1.1/",
         "http://142.42.1.1:8080/",
         "http://➡.ws/䨹",
         "http://⌘.ws",
         "http://⌘.ws/",
         "http://foo.com/blah_(wikipedia)#cite-1",
         "http://foo.com/blah_(wikipedia)_blah#cite-1",
         "http://foo.com/unicode_(✪)_in_parens",
         "http://foo.com/(something)?after=parens",
         "http://☺.damowmow.com/",
         "http://code.google.com/events/#&product=browser",
         "http://j.mp",
         "ftp://foo.bar/baz",
         "http://foo.bar/?q=Test%20URL-encoded%20stuff",
         "http://مثال.إختبار",
         "http://例子.测试",
         "http://उदाहरण.परीक्षा",
         "http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com",
         "http://1337.net",
         "http://a.b-c.de",
         "http://223.255.255.254",
         "https://foo_bar.example.com/",
         "http://",
         "http://.",
         "http://..",
         "http://../",
         "http://?",
         "http://??",
         "http://??/",
         "http://#",
         "http://##",
         "http://##/",
         "http://foo.bar?q=Spaces should be encoded",
         "//",
         "//a",
         "///a",
         "///",
         "http:///a",
         "foo.com",
         "rdar://1234",
         "h://test",
         "http:// shouldfail.com",
         ":// should fail",
         "http://foo.bar/foo(bar)baz quux",
         "ftps://foo.bar/",
         "http://-error-.invalid/",
         "http://a.b--c.de/",
         "http://-a.b.co",
         "http://a.b-.co",
         "http://0.0.0.0",
         "http://.www.foo.bar/",
         "http://www.foo.bar./",
         "http://.www.foo.bar./",
         "http://10.1.1.1", 
         "http://10.1.1.254"
        ]
    }
    */
  
    get_instance(objectorstring) {
      if (typeof objectorstring == "string") {
        objectorstring = this.get(objectorstring);
      }
      return objectorstring;
    }
  
    /**
     * returns the concatinated strings of whats available on this
     * there can be properties which are not set such as 
     * protocol, user_pass, port, file_name and or query_string
     * @return string
     */
    protocol_user_pass_domain_port_path_query_string() {
  
      var seps = this.get_seps();
  
      var protocol_user_pass_domain_port_path_query_string = '';
  
      protocol_user_pass_domain_port_path_query_string =
        ((this.protocol == null) ? '' : this.protocol + seps.protocol) +
        ((this.user_pass == null) ? '' : this.user_pass + seps.user_pass) +
        ((this.domain == null) ? '' : this.domain) +
        ((this.port == null) ? '' : seps.port + this.port.toString()) +
        ((this.path == null) ? '' : this.path) +
        ((this.file_name == null) ? '' : this.file_name) +
        ((this.query_string == null) ? '' : seps.query_string + this.query_string);
  
      return (protocol_user_pass_domain_port_path_query_string == '') ? null : protocol_user_pass_domain_port_path_query_string;
    }
  
  
    /**
     * alias
     * @return functioncall
     */
    full() {
      return this.protocol_user_pass_domain_port_path_query_string();
    }
    /**
     * returns a full url with protocol domain and path even if something is missing
     * @return string
     */
    href() {
      var href = "";
      var seps = this.get_seps();
      var protocol = this.protocol;
      if (this.protocol == null) {
        protocol = "http";
      }
      href += protocol + seps.protocol;
  
      var user_pass = this.user_pass;
      var user_pass_sep = seps.user_pass;
      if (this.user_pass == null) {
        user_pass = "";
        user_pass_sep = "";
      }
      href += user_pass + user_pass_sep;
  
      var domain = this.domain;
      href += domain;
  
  
      var port = this.port;
      var port_sep = seps.port;
      if (this.user_pass == null) {
        port = "";
        port_sep = "";
      }
      href += port_sep + port;
  
  
      var path = this.path;
      href += path;
  
  
      var file_name = this.file_name;
      if (this.file_name == null) {
        file_name = "";
      }
      href += file_name;
  
  
      var query_string = this.query_string;
      var query_string_sep = seps.query_string;
      if (this.query_string == null) {
        query_string = "";
        query_string_sep = "";
      }
      href += query_string_sep + query_string;
  
      return href;
    }
  
    /**
     * @return string
     */
    path_file_name() {
  
      var seps = this.get_seps();
  
      var path_file_name = '';
  
      if (this.path != null) {
        path_file_name += this.path;
      }
  
      if (this.file_name != null) {
        path_file_name += this.file_name;
      }
  
      return (path_file_name == '') ? null : path_file_name;
  
    }
  
    /**
     * @return string
     */
    path_file_name_query_string() {
  
      var seps = this.get_seps();
  
      var path_file_name_query_string = this.path_file_name();
  
      if (this.query_string != null) {
        path_file_name_query_string += seps.query_string + this.query_string;
      }
      return (path_file_name_query_string == '') ? null : path_file_name_query_string;
  
    }
  
    /**
     * @return object
     */
    get_seps() {
      return {
        protocol: "://",
        user_pass: "@",
        query_string: "?",
        directory: "/",
        port: ":",
        ipv6_closing_bracket: "]",
        file_extension: "."
      };
    }
    /**
     * 
     * @param {string} string 
     * @return {class} class 
     */
    get(string) {
      var seps = this.get_seps();
      this.input = string;
      var tmp_string = string;
      var parts = [];
      //must be first !
      //try to shift away query string, 
      parts = tmp_string.split(seps.query_string)
  
  
  
      if (parts.length > 1) {
        tmp_string = parts.shift();
        this.query_string = parts.join(seps.query_string);
      } else {
        tmp_string = string;
        this.query_string = null;
      }
  
  
      //try to shift away protocol
      parts = tmp_string.split(seps.protocol);
  
      this.protocol = (parts.length > 1) ? parts.shift() : null;
  
      tmp_string = parts.join(seps.protocol);
  
  
  
      //what if asdf.yess.com
  
      //try to shift away user:pass@domain.com
      /*
  
      */
  
      //try to shift away domain 
      parts = tmp_string.split(seps.directory);
  
      //if './file.could.be.exe' parts == ['.', 'file.could.be.exe']
      //if '/var/absolutepath/file.could.be.exe' parts == ['','var', 'absolutepath', 'file.could.be.exe']
  
      if (parts[0].indexOf('.') == 0 || parts[0] == '.' || parts[0] == '') {
        this.domain = null;
        this.user_pass = null;
        this.port = null;
      } else {
        var domainwithuserpassport = parts.shift();
        tmp_string = seps.directory + parts.join(seps.directory);
  
        //try to shift away user_pass
        parts = domainwithuserpassport.split(seps.user_pass);
  
        this.user_pass = (parts.length > 1) ? parts.shift() : null;
  
        domainwithuserpassport = parts.join(seps.user_pass);
  
        //try to pop away port 
        //if ipv4 port_separator == ':', 
        //if ipv6 port_separator == ':]'
        var port_separator = (domainwithuserpassport.indexOf(seps.ipv6_closing_bracket) != -1) ? seps.ipv6_closing_bracket + seps.port : seps.port;
  
        parts = domainwithuserpassport.split(port_separator);
  
        this.port = (parts.length > 1) ? parts.pop() : null;
  
        this.domain = parts.join(port_separator);
  
      }
  
      parts = tmp_string.split(seps.directory);
  
      //path is existing /asdf/asdf.ext
      if (parts.length > 0) {
        //pop away file 
  
        var file_name = parts.pop();
        tmp_string = parts.join(seps.directory) + seps.directory;
  
        this.file_name = file_name;
        this.file_name = (this.file_name == '') ? null : this.file_name;
  
        /*
        parts = tmp_string.split(seps.directory);
        parts = parts.filter(Boolean);
        tmp_string = parts.join(seps.directory);
        */
        if (tmp_string == "") {
          tmp_string = "/";
        }
  
        this.path = tmp_string;
  
      }
  
      return this;
  
    }
  
    /**
     * @return {string} 
     */
    file_extension() {
      if (this.file_name == null) {
        return null;
      }
      var seps = this.get_seps();
      var parts = this.file_name.split(seps.file_extension);
      return (parts.length > 1) ? parts[parts.length - 1] : null;
    }
  
    /**
     * function for tests
     */
    test() {
      var tests = this.get_testurls();
      for (var key in tests) {
        console.log(new this.constructor(tests[key]));
      }
    }
  
  
  
  }
  export {
    UrlParts
  }