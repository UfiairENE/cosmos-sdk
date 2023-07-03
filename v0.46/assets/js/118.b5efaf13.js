(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{641:function(e,c,o){"use strict";o.r(c);var r=o(1),l=Object(r.a)({},(function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"errors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),o("p",{attrs:{synopsis:""}},[e._v("This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.")]),e._v(" "),o("p",[e._v("Modules are encouraged to define and register their own errors to provide better\ncontext on failed message or handler execution. Typically, these errors should be\ncommon or general errors which can be further wrapped to provide additional specific\nexecution context.")]),e._v(" "),o("h2",{attrs:{id:"registration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[e._v("#")]),e._v(" Registration")]),e._v(" "),o("p",[e._v("Modules should define and register their custom errors in "),o("code",[e._v("x/{module}/errors.go")]),e._v(". Registration\nof errors is handled via the "),o("code",[e._v("types/errors")]),e._v(" package.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eXBlcwoKaW1wb3J0ICgKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwopCgovLyB4L2Rpc3RyaWJ1dGlvbiBtb2R1bGUgc2VudGluZWwgZXJyb3JzCnZhciAoCglFcnJFbXB0eURlbGVnYXRvckFkZHIgICAgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAyLCAmcXVvdDtkZWxlZ2F0b3IgYWRkcmVzcyBpcyBlbXB0eSZxdW90OykKCUVyckVtcHR5V2l0aGRyYXdBZGRyICAgICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDMsICZxdW90O3dpdGhkcmF3IGFkZHJlc3MgaXMgZW1wdHkmcXVvdDspCglFcnJFbXB0eVZhbGlkYXRvckFkZHIgICAgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCA0LCAmcXVvdDt2YWxpZGF0b3IgYWRkcmVzcyBpcyBlbXB0eSZxdW90OykKCUVyckVtcHR5RGVsZWdhdGlvbkRpc3RJbmZvID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDUsICZxdW90O25vIGRlbGVnYXRpb24gZGlzdHJpYnV0aW9uIGluZm8mcXVvdDspCglFcnJOb1ZhbGlkYXRvckRpc3RJbmZvICAgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCA2LCAmcXVvdDtubyB2YWxpZGF0b3IgZGlzdHJpYnV0aW9uIGluZm8mcXVvdDspCglFcnJOb1ZhbGlkYXRvckNvbW1pc3Npb24gICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCA3LCAmcXVvdDtubyB2YWxpZGF0b3IgY29tbWlzc2lvbiB0byB3aXRoZHJhdyZxdW90OykKCUVyclNldFdpdGhkcmF3QWRkckRpc2FibGVkID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDgsICZxdW90O3NldCB3aXRoZHJhdyBhZGRyZXNzIGRpc2FibGVkJnF1b3Q7KQoJRXJyQmFkRGlzdHJpYnV0aW9uICAgICAgICAgPSBzZGtlcnJvcnMuUmVnaXN0ZXIoTW9kdWxlTmFtZSwgOSwgJnF1b3Q7Y29tbXVuaXR5IHBvb2wgZG9lcyBub3QgaGF2ZSBzdWZmaWNpZW50IGNvaW5zIHRvIGRpc3RyaWJ1dGUmcXVvdDspCglFcnJJbnZhbGlkUHJvcG9zYWxBbW91bnQgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMCwgJnF1b3Q7aW52YWxpZCBjb21tdW5pdHkgcG9vbCBzcGVuZCBwcm9wb3NhbCBhbW91bnQmcXVvdDspCglFcnJFbXB0eVByb3Bvc2FsUmVjaXBpZW50ICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMSwgJnF1b3Q7aW52YWxpZCBjb21tdW5pdHkgcG9vbCBzcGVuZCBwcm9wb3NhbCByZWNpcGllbnQmcXVvdDspCglFcnJOb1ZhbGlkYXRvckV4aXN0cyAgICAgICA9IHNka2Vycm9ycy5SZWdpc3RlcihNb2R1bGVOYW1lLCAxMiwgJnF1b3Q7dmFsaWRhdG9yIGRvZXMgbm90IGV4aXN0JnF1b3Q7KQoJRXJyTm9EZWxlZ2F0aW9uRXhpc3RzICAgICAgPSBzZGtlcnJvcnMuUmVnaXN0ZXIoTW9kdWxlTmFtZSwgMTMsICZxdW90O2RlbGVnYXRpb24gZG9lcyBub3QgZXhpc3QmcXVvdDspCik="}})],1),e._v(" "),o("p",[e._v('Each custom module error must provide the codespace, which is typically the module name\n(e.g. "distribution") and is unique per module, and a uint32 code. Together, the codespace and code\nprovide a globally unique Cosmos SDK error. Typically, the code is monotonically increasing but does not\nnecessarily have to be. The only restrictions on error codes are the following:')]),e._v(" "),o("ul",[o("li",[e._v("Must be greater than one, as a code value of one is reserved for internal errors.")]),e._v(" "),o("li",[e._v("Must be unique within the module.")])]),e._v(" "),o("p",[e._v("Note, the Cosmos SDK provides a core set of "),o("em",[e._v("common")]),e._v(" errors. These errors are defined in "),o("code",[e._v("types/errors/errors.go")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"wrapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wrapping"}},[e._v("#")]),e._v(" Wrapping")]),e._v(" "),o("p",[e._v("The custom module errors can be returned as their concrete type as they already fulfill the "),o("code",[e._v("error")]),e._v("\ninterface. However, module errors can be wrapped to provide further context and meaning to failed\nexecution.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBCYXNlS2VlcGVyKSBEZWxlZ2F0ZUNvaW5zKGN0eCBzZGsuQ29udGV4dCwgZGVsZWdhdG9yQWRkciwgbW9kdWxlQWNjQWRkciBzZGsuQWNjQWRkcmVzcywgYW10IHNkay5Db2lucykgZXJyb3IgewoJbW9kdWxlQWNjIDo9IGsuYWsuR2V0QWNjb3VudChjdHgsIG1vZHVsZUFjY0FkZHIpCglpZiBtb2R1bGVBY2MgPT0gbmlsIHsKCQlyZXR1cm4gc2RrZXJyb3JzLldyYXBmKHNka2Vycm9ycy5FcnJVbmtub3duQWRkcmVzcywgJnF1b3Q7bW9kdWxlIGFjY291bnQgJXMgZG9lcyBub3QgZXhpc3QmcXVvdDssIG1vZHVsZUFjY0FkZHIpCgl9CgoJaWYgIWFtdC5Jc1ZhbGlkKCkgewoJCXJldHVybiBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJySW52YWxpZENvaW5zLCBhbXQuU3RyaW5nKCkpCgl9CgoJYmFsYW5jZXMgOj0gc2RrLk5ld0NvaW5zKCkKCglmb3IgXywgY29pbiA6PSByYW5nZSBhbXQgewoJCWJhbGFuY2UgOj0gay5HZXRCYWxhbmNlKGN0eCwgZGVsZWdhdG9yQWRkciwgY29pbi5EZW5vbSkKCQlpZiBiYWxhbmNlLklzTFQoY29pbikgewoJCQlyZXR1cm4gc2RrZXJyb3JzLldyYXBmKAoJCQkJc2RrZXJyb3JzLkVyckluc3VmZmljaWVudEZ1bmRzLCAmcXVvdDtmYWlsZWQgdG8gZGVsZWdhdGU7ICVzIGlzIHNtYWxsZXIgdGhhbiAlcyZxdW90OywgYmFsYW5jZSwgYW10LAoJCQkpCgkJfQoKCQliYWxhbmNlcyA9IGJhbGFuY2VzLkFkZChiYWxhbmNlKQoJCWVyciA6PSBrLlNldEJhbGFuY2UoY3R4LCBkZWxlZ2F0b3JBZGRyLCBiYWxhbmNlLlN1Yihjb2luKSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIGVycgoJCX0KCX0KCglpZiBlcnIgOj0gay50cmFja0RlbGVnYXRpb24oY3R4LCBkZWxlZ2F0b3JBZGRyLCBjdHguQmxvY2tIZWFkZXIoKS5UaW1lLCBiYWxhbmNlcywgYW10KTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIHNka2Vycm9ycy5XcmFwKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIHRyYWNrIGRlbGVnYXRpb24mcXVvdDspCgl9CgoJZXJyIDo9IGsuQWRkQ29pbnMoY3R4LCBtb2R1bGVBY2NBZGRyLCBhbXQpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJcmV0dXJuIG5pbAp9"}})],1),e._v(" "),o("p",[e._v("Regardless if an error is wrapped or not, the Cosmos SDK's "),o("code",[e._v("errors")]),e._v(" package provides an API to determine if\nan error is of a particular kind via "),o("code",[e._v("Is")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"abci"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[e._v("#")]),e._v(" ABCI")]),e._v(" "),o("p",[e._v("If a module error is registered, the Cosmos SDK "),o("code",[e._v("errors")]),e._v(" package allows ABCI information to be extracted\nthrough the "),o("code",[e._v("ABCIInfo")]),e._v(" API. The package also provides "),o("code",[e._v("ResponseCheckTx")]),e._v(" and "),o("code",[e._v("ResponseDeliverTx")]),e._v(" as\nauxiliary APIs to automatically get "),o("code",[e._v("CheckTx")]),e._v(" and "),o("code",[e._v("DeliverTx")]),e._v(" responses from an error.")])])}),[],!1,null,null,null);c.default=l.exports}}]);