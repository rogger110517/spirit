(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[15],{485:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r(1),c=r.n(o),n=r(2),i=r(535),s=r(510),d=r(508),l=r(511),m=r(4),u=r(21),b=r(12),_=r(120),p=r(503),y=r(506),x=r(501);class h extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(n.__)("Tax code",'woocommerce'),key:"tax_code",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(n.__)("Rate",'woocommerce'),key:"rate",isSortable:!0,isNumeric:!0},{label:Object(n.__)("Total tax",'woocommerce'),key:"total_tax",isSortable:!0},{label:Object(n.__)("Order tax",'woocommerce'),key:"order_tax",isSortable:!0},{label:Object(n.__)("Shipping tax",'woocommerce'),key:"shipping_tax",isSortable:!0},{label:Object(n.__)("Orders",'woocommerce'),key:"orders_count",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0}]}getRowsContent(e){const{render:t,formatDecimal:r,getCurrencyConfig:o}=this.context;return Object(m.map)(e,e=>{const{query:c}=this.props,{order_tax:n,orders_count:i,tax_rate:s,tax_rate_id:d,total_tax:l,shipping_tax:m}=e,y=Object(p.a)(e),x=Object(b.getPersistedQuery)(c),h=Object(b.getNewPath)(x,"/analytics/orders",{filter:"advanced",tax_rate_includes:d});return[{display:Object(a.createElement)(u.Link,{href:h,type:"wc-admin"},y),value:y},{display:s.toFixed(2)+"%",value:s},{display:t(l),value:r(l)},{display:t(n),value:r(n)},{display:t(m),value:r(m)},{display:Object(_.formatValue)(o(),"number",i),value:i}]})}getSummary(e){const{tax_codes:t=0,total_tax:r=0,order_tax:a=0,shipping_tax:o=0,orders_count:c=0}=e,{formatAmount:i,getCurrencyConfig:s}=this.context,d=s();return[{label:Object(n._n)("tax code","tax codes",t,'woocommerce'),value:Object(_.formatValue)(d,"number",t)},{label:Object(n.__)("total tax",'woocommerce'),value:i(r)},{label:Object(n.__)("order tax",'woocommerce'),value:i(a)},{label:Object(n.__)("shipping tax",'woocommerce'),value:i(o)},{label:Object(n._n)("order","orders",c,'woocommerce'),value:Object(_.formatValue)(d,"number",c)}]}render(){const{advancedFilters:e,filters:t,isRequesting:r,query:o}=this.props;return Object(a.createElement)(y.a,{compareBy:"taxes",endpoint:"taxes",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["tax_codes","total_tax","order_tax","shipping_tax","orders_count"],isRequesting:r,itemIdField:"tax_rate_id",query:o,searchBy:"taxes",tableQuery:{orderby:o.orderby||"tax_rate_id"},title:Object(n.__)("Taxes",'woocommerce'),columnPrefsKey:"taxes_report_columns",filters:t,advancedFilters:e})}}h.contextType=x.a;var f=h,O=r(505);class j extends a.Component{getChartMeta(){const{query:e}=this.props,t="compare-taxes"===e.filter?"item-comparison":"time-comparison";return{itemsLabel:Object(n.__)("%d taxes",'woocommerce'),mode:t}}render(){const{isRequesting:e,query:t,path:r}=this.props,{mode:o,itemsLabel:c}=this.getChartMeta(),n={...t};return"item-comparison"===o&&(n.segmentby="tax_rate_id"),Object(a.createElement)(a.Fragment,null,Object(a.createElement)(O.a,{query:t,path:r,filters:i.c,advancedFilters:i.a,report:"taxes"}),Object(a.createElement)(l.a,{charts:i.b,endpoint:"taxes",isRequesting:e,query:n,selectedChart:Object(s.a)(t.chart,i.b),filters:i.c,advancedFilters:i.a}),Object(a.createElement)(d.a,{charts:i.b,filters:i.c,advancedFilters:i.a,mode:o,endpoint:"taxes",query:n,path:r,isRequesting:e,itemsLabel:c,selectedChart:Object(s.a)(t.chart,i.b)}),Object(a.createElement)(f,{isRequesting:e,query:t,filters:i.c,advancedFilters:i.a}))}}j.propTypes={query:c.a.object.isRequired};t.default=j},502:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return y})),r.d(t,"h",(function(){return x})),r.d(t,"g",(function(){return h}));var a=r(15),o=r(17),c=r.n(o),n=r(4),i=r(12),s=r(11),d=r(13),l=r(503);function m(e,t=n.identity){return function(r="",o){const n="function"==typeof e?e(o):e,s=Object(i.getIdsFromQuery)(r);if(s.length<1)return Promise.resolve([]);const d={include:s.join(","),per_page:s.length};return c()({path:Object(a.addQueryArgs)(n,d)}).then(e=>e.map(t))}}m(s.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=m(s.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=m(s.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),_=m(s.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=m(s.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),y=m(s.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(l.a)(e)}));function x({attributes:e,name:t}){const r=Object(d.f)("variationTitleAttributesSeparator"," - ");if(t&&t.indexOf(r)>-1)return t;const a=(e||[]).map(({option:e})=>e).join(", ");return a?t+r+a:t}const h=m(({products:e})=>e?s.NAMESPACE+`/products/${e}/variations`:s.NAMESPACE+"/variations",e=>({key:e.id,label:x(e)}))},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(2);function o(e){return[e.country,e.state,e.name||Object(a.__)("TAX",'woocommerce'),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},535:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return _}));var a=r(2),o=r(30),c=r(11),n=r(7),i=r(502),s=r(503),d=r(55);const{addCesSurveyForAnalytics:l}=Object(n.dispatch)(d.c),m=Object(o.applyFilters)("woocommerce_admin_taxes_report_charts",[{key:"total_tax",label:Object(a.__)("Total tax",'woocommerce'),order:"desc",orderby:"total_tax",type:"currency"},{key:"order_tax",label:Object(a.__)("Order tax",'woocommerce'),order:"desc",orderby:"order_tax",type:"currency"},{key:"shipping_tax",label:Object(a.__)("Shipping tax",'woocommerce'),order:"desc",orderby:"shipping_tax",type:"currency"},{key:"orders_count",label:Object(a.__)("Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"}]),u=Object(o.applyFilters)("woocommerce_admin_taxes_report_advanced_filters",{filters:{},title:Object(a._x)("Taxes match {{select /}} filters","A sentence describing filters for Taxes. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ",'woocommerce')}),b=[{label:Object(a.__)("All taxes",'woocommerce'),value:"all"},{label:Object(a.__)("Comparison",'woocommerce'),value:"compare-taxes",chartMode:"item-comparison",settings:{type:"taxes",param:"taxes",getLabels:Object(i.e)(c.NAMESPACE+"/taxes",e=>({id:e.id,key:e.id,label:Object(s.a)(e)})),labels:{helpText:Object(a.__)("Check at least two tax codes below to compare",'woocommerce'),placeholder:Object(a.__)("Search for tax codes to compare",'woocommerce'),title:Object(a.__)("Compare Tax Codes",'woocommerce'),update:Object(a.__)("Compare",'woocommerce')},onClick:l}}];Object.keys(u.filters).length&&b.push({label:Object(a.__)("Advanced filters",'woocommerce'),value:"advanced"});const _=Object(o.applyFilters)("woocommerce_admin_taxes_report_filters",[{label:Object(a.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:b}])}}]);