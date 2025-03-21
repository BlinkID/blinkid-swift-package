/*!
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
(self["webpackChunkswift_docc_render"]=self["webpackChunkswift_docc_render"]||[]).push([[527],{7690:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function t(e){return a("(?=",e,")")}function a(...e){const t=e.map((e=>n(e))).join("");return t}function i(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function s(...e){const t=i(e),a="("+(t.capture?"":"?:")+e.map((e=>n(e))).join("|")+")";return a}const c=e=>a(/\b/,e,/\w$/.test(e)?/\b/:/\B/),u=["Protocol","Type"].map(c),o=["init","self"].map(c),r=["Any","Self"],l=["actor","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],m=["false","nil","true"],p=["assignment","associativity","higherThan","left","lowerThan","none","right"],d=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],F=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],b=s(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),f=s(b,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),h=a(b,f,"*"),w=s(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),y=s(w,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),g=a(w,y,"*"),E=a(/[A-Z]/,y,"*"),v=["autoclosure",a(/convention\(/,s("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",a(/objc\(/,g,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],A=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function N(e){const n={match:/\s+/,relevance:0},i=e.COMMENT("/\\*","\\*/",{contains:["self"]}),b=[e.C_LINE_COMMENT_MODE,i],w={match:[/\./,s(...u,...o)],className:{2:"keyword"}},N={match:a(/\./,s(...l)),relevance:0},C=l.filter((e=>"string"===typeof e)).concat(["_|0"]),k=l.filter((e=>"string"!==typeof e)).concat(r).map(c),D={variants:[{className:"keyword",match:s(...k,...o)}]},B={$pattern:s(/\b\w+/,/#\w+/),keyword:C.concat(d),literal:m},_=[w,N,D],S={match:a(/\./,s(...F)),relevance:0},M={className:"built_in",match:a(/\b/,s(...F),/(?=\()/)},x=[S,M],$={match:/->/,relevance:0},I={className:"operator",relevance:0,variants:[{match:h},{match:`\\.(\\.|${f})+`}]},O=[$,I],L="([0-9]_*)+",T="([0-9a-fA-F]_*)+",P={className:"number",relevance:0,variants:[{match:`\\b(${L})(\\.(${L}))?([eE][+-]?(${L}))?\\b`},{match:`\\b0x(${T})(\\.(${T}))?([pP][+-]?(${L}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},j=(e="")=>({className:"subst",variants:[{match:a(/\\/,e,/[0\\tnr"']/)},{match:a(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),K=(e="")=>({className:"subst",match:a(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),z=(e="")=>({className:"subst",label:"interpol",begin:a(/\\/,e,/\(/),end:/\)/}),q=(e="")=>({begin:a(e,/"""/),end:a(/"""/,e),contains:[j(e),K(e),z(e)]}),U=(e="")=>({begin:a(e,/"/),end:a(/"/,e),contains:[j(e),z(e)]}),Z={className:"string",variants:[q(),q("#"),q("##"),q("###"),U(),U("#"),U("##"),U("###")]},V={match:a(/`/,g,/`/)},W={className:"variable",match:/\$\d+/},G={className:"variable",match:`\\$${y}+`},R=[V,W,G],X={match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:A,contains:[...O,P,Z]}]}},H={className:"keyword",match:a(/@/,s(...v))},J={className:"meta",match:a(/@/,g)},Q=[X,H,J],Y={match:t(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:a(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,y,"+")},{className:"type",match:E,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:a(/\s+&\s+/,t(E)),relevance:0}]},ee={begin:/</,end:/>/,keywords:B,contains:[...b,..._,...Q,$,Y]};Y.contains.push(ee);const ne={match:a(g,/\s*:/),keywords:"_|0",relevance:0},te={begin:/\(/,end:/\)/,relevance:0,keywords:B,contains:["self",ne,...b,..._,...x,...O,P,Z,...R,...Q,Y]},ae={begin:/</,end:/>/,contains:[...b,Y]},ie={begin:s(t(a(g,/\s*:/)),t(a(g,/\s+/,g,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:g}]},se={begin:/\(/,end:/\)/,keywords:B,contains:[ie,...b,..._,...O,P,Z,...Q,Y,te],endsParent:!0,illegal:/["']/},ce={match:[/func/,/\s+/,s(V.match,g,h)],className:{1:"keyword",3:"title.function"},contains:[ae,se,n],illegal:[/\[/,/%/]},ue={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[ae,se,n],illegal:/\[|%/},oe={match:[/operator/,/\s+/,h],className:{1:"keyword",3:"title"}},re={begin:[/precedencegroup/,/\s+/,E],className:{1:"keyword",3:"title"},contains:[Y],keywords:[...p,...m],end:/}/};for(const t of Z.variants){const e=t.contains.find((e=>"interpol"===e.label));e.keywords=B;const n=[..._,...x,...O,P,Z,...R];e.contains=[...n,{begin:/\(/,end:/\)/,contains:["self",...n]}]}return{name:"Swift",keywords:B,contains:[...b,ce,ue,{beginKeywords:"struct protocol class extension enum actor",end:"\\{",excludeEnd:!0,keywords:B,contains:[e.inherit(e.TITLE_MODE,{className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),..._]},oe,re,{beginKeywords:"import",end:/$/,contains:[...b],relevance:0},..._,...x,...O,P,Z,...R,...Q,Y,te]}}e.exports=N}}]);